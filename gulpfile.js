
var args = require('yargs').argv;
var config = require('./gulp.config')();
var gulp = require('gulp');
var path = require('path');
var cp = require('child_process');
var $ = require('gulp-load-plugins')({ lazy: true });
var del = require('del');

var mocha = require("gulp-mocha");
var gutil = require("gulp-util");

var colors = $.util.colors;
var envenv = $.util.env;
var gulp_typedoc = require("gulp-typedoc");
var typedoc = require('typedoc');



/**
 * yargs variables can be passed in to alter the behavior, when present.
 * Example: gulp serve-dev
 *
 * --verbose  : Various tasks will produce more output to the console.
 * --nosync   : Don't launch the browser with browser-sync when serving code.
 * --debug    : Launch debugger with node-inspector.
 * --debug-brk: Launch debugger and break on 1st line with node-inspector.
 * --startServers: Will start servers for midway tests on the test task.
 */

/**
 * List the available gulp tasks
 */
gulp.task('help', $.taskListing);
gulp.task('default', ['help']);

gulp.task('build', ['ts-compile']);
gulp.task('build-all', ['ts-compile', 'ts-compile-amd']);//, 'ts-compile-tests', 'ts-compile-amd-tests']);

//gulp.task('ts-clean', function(done) {
//    clean(config.ts.output, done);
//});
//
//gulp.task('ts-vet', function () {
//    var reporter = args.verbose ? 'verbose' : 'prose'; 
//    return gulp
//        .src(config.ts.allts)
//        .pipe($.if(args.verbose, $.print()))
//        .pipe($.tslint())
//        .pipe($.tslint.report(reporter));
//});

/**
 * Creates the app.d.ts file with all references to *.ts files
 * Not needed if we use the `files: undefined` in tsconfig.json 
 */
//gulp.task('ts-create-refs', function () {
//    var source = gulp.src(config.ts.allts, { read: false });
//    var injectOptions = {
//        starttag: '//{',
//        endtag: '//}',
//        transform: config.ts.transformFn
//    };
//    
//    fs.writeFile(config.ts.refs, '//{\n//}', function(err) {
//        if(err) { return log(err); }
//        log('The file was saved!');
//    });
//     
//    return gulp.src(config.ts.refs)
//        .pipe($.inject(source, injectOptions))
//        .pipe($.if(args.verbose, $.print()))
//        .pipe(gulp.dest(config.ts.typings));
//});

/**
 * Watch TypeScript and recompile and create refs
 */
gulp.task('ts-watcher', function () {
    gulp.watch(config.ts.files, ['ts-compile']);
});

/**
 * Compiles *.js files, sourcemaps, 
 * and optionally d.ts files (if passed --dts)
 */
gulp.task('ts-compile', function (done) {
    var outdir = path.join(process.cwd(), 'build/output/node');
    runTSC('.', outdir, [], done);
});


function runTSC(inputDir, outputDir, tsArgs, done) {
    var tscjs = path.join(process.cwd(), 'node_modules/typescript/bin/tsc');
    //console.log(outputDir);
    var tsArguments = [tscjs, '-p', inputDir, '--outDir', outputDir];
    tsArgs.forEach(function (arg) {
        tsArguments.push(arg);
    });
    var childProcess = cp.spawn('node', tsArguments, { cwd: process.cwd() });
    childProcess.stdout.on('data', function (data) {
        // Ticino will read the output
        console.log(data.toString());
    });
    childProcess.stderr.on('data', function (data) {
        // Ticino will read the output
        console.log(data.toString());
    });
    childProcess.on('close', function () {
        done();
    });
}

/**
 * Compiles *.js files, sourcemaps, 
 * and optionally d.ts files (if passed --dts)
 */
gulp.task('ts-compile-amd', function (done) {
    var outdir = path.join(process.cwd(), 'build/output/amd');
    runTSC('.', outdir, ["--module", "amd"], done);
});


/**
 * Compiles *.js files, sourcemaps, 
 * and optionally d.ts files (if passed --dts)
 */
// gulp.task('ts-compile-tests', [], function (done) {
//     var outdir = path.join(process.cwd(), 'build/output/node/test/mocha/');    
//     runTSC("./test", outdir, [ '--listFiles'], done);
// });


gulp.task('tests', [], function (done) {
    return gulp.src([
        './build/output/node/test/mocha/**/*.js',
    ], { read: false })
        .pipe(mocha({ reporter: 'spec' }))
        .on('error', gutil.log);
});



// gulp.task('ts-compile-amd-tests', function (done) {
//     var outdir = path.join(process.cwd(), 'build/output/amd/test/mocha');
//     runTSC('./test', outdir, ["--module", "amd"], done);
// });

// gulp.task('amd-tests', ['ts-compile-amd-tests'], function (done) {
//     return gulp.src(['./build/output/amd/test/mocha/*.js'], { read: false })
//         .pipe(mocha({ reporter: 'spec' }))
//         .on('error', gutil.log);
// });



gulp.task('serve-dev', function (done) {
    var childProcess = cp.spawn('http-server', ['./build/output/amd'], { cwd: process.cwd() });
    childProcess.stdout.on('data', function (data) {
        // Ticino will read the output
        console.log(data.toString());
    });
    childProcess.stderr.on('data', function (data) {
        // Ticino will read the output
        console.log(data.toString());
    });
    childProcess.on('close', function () {
        done();
    });

});

gulp.task("npm-prep", function () {
    gulp.src([
        "./README.md",
        "./LICENSE",
        "./COPYRIGHT",
        "./package.json"
    ])
        .pipe(gulp.dest("./build/output/node/src"));
    return gulp.src(["./typings/ExchangeWebService.d.ts"])
        .pipe(gulp.dest("./build/output/node/src/typings"));
});

gulp.task('ts-def-compile', function (done) {
    var outdir = path.join(process.cwd(), 'build/output/.tmp');
    runTSC('.', outdir, ["--declaration"], done);
});

/** import statement regex "^import\s*\{\s*.*\s*\}.*from.*;" */
var concat = require('gulp-concat');
var replace = require('gulp-replace');
gulp.task("ts-def-prep", ["ts-def-compile"], function () {
    return gulp.src([
        "./build/output/.tmp/src/**/*.d.ts"
    ])
        .pipe(concat("temp.d.ts"))
        .pipe(replace(/^.*import.*\{.*\}.*from.*\;/gm, ''))
        .pipe(replace(/^.*export.*\{.*\}.*from.*\;/gm, ''))
        .pipe(replace(/^.*export.*\{.*\};$/gm, ''))
        .pipe(replace(/^.*\/\/\/\s*\<reference.*\>/gm, ''))
        .pipe(replace(/^\s*private\s.*;/gm, ''))
        .pipe(replace('\r\n\r\n', ''))
        .pipe(replace('\n\n', ''))
        .pipe(replace('export declare', ''))
        .pipe(gulp.dest("./build/output/.tmp/"));
});
gulp.task("ts-def-concat", ["ts-def-prep"], function () {
    return gulp.src([
        "./config/tsd.start",
        "./build/output/.tmp/temp.d.ts",
        "./config/tsd.end"
    ])
        .pipe(concat("ExchangeWebService.d.ts"))
        .pipe(gulp.dest("./typings/"));
});
gulp.task('ts-def-clean', ["ts-def-concat"], function (done) {
    var delconfig = [].concat("build/output/.tmp/*");
    log('Cleaning: ' + $.util.colors.blue(delconfig));
    del(delconfig, done);
});

gulp.task("build-typedef", ['ts-def-clean'])


/**
 * When files change, log it
 * @param  {Object} event - event that fired
 */
function changeEvent(event) {
    var srcPattern = new RegExp('/.*(?=/' + config.source + ')/');
    log('File ' + event.path.replace(srcPattern, '') + ' ' + event.type);
}

/**
 * Log a message or series of messages using chalk's blue color.
 * Can pass in a string, object or array.
 */
function log(msg) {
    if (typeof (msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}

/**
 * replace line [reflection.name = '"' + _this.basePath.trim(name) + '"';] with [reflection.name = _this.basePath.trim(name);] to avoid '"' in names
 */
gulp.task("typedocX", function () {
    process.chdir("./src/js/");
    return gulp
        .src(config.typedocFiles)
        .pipe(gulp_typedoc({
            // TypeScript options (see typescript docs) 
            module: "commonjs",
            target: "es5",
            includeDeclarations: true,

            // Output options (see typedoc docs) 
            out: "./build/docs",
            //json: "./build/docs/file.json",

            // TypeDoc options (see typedoc docs) 
            name: "EWS JavaScript Api",
            theme: "default",
            //plugins: ["my", "plugins"],
            ignoreCompilerErrors: true,
            //version: true,
        }));
});


gulp.task("typedocFile", function () {
    var options = {
        target: "ES5",
        module: "commonjs",
        //experimentalDecorators: true,
        //emitDecoratorMetadata: true,
        //allowUnreachableCode: true,
        ignoreCompilerErrors: true,
        name: "Ews JavaScript Api",
        verbose: false,
        //entryPoint:'"Core/ExchangeService"',
        exclude: "**/*.d*.ts",
        excludeExternals: true,
        theme: "default",
        mode: "File",
        readme: "none"
    }
    var app = new typedoc.Application(options);
    return app.generateDocs(app.expandInputFiles(['.\\src\\js']), ".\\build\\docs\\FileMode");
    //return app.generateDocs(app.expandInputFiles(['.\\src\\js\\Core\\ServiceObjects\\Items']), ".\\build\\doc\\File");

});
gulp.task("typedocModules", function () {
    var options = {
        target: "ES5",
        module: "commonjs",
        //experimentalDecorators: true,
        //emitDecoratorMetadata: true,
        //allowUnreachableCode: true,
        ignoreCompilerErrors: true,
        name: "Ews JavaScript Api",
        verbose: false,
        //entryPoint:'Core/ExchangeService',
        exclude: "**/*.d*.ts",
        excludeExternals: true,
        theme: "default",
        mode: "Modules",
        readme: "none"
    }
    var app = new typedoc.Application(options);
    return app.generateDocs(app.expandInputFiles(['.\\src\\js']), ".\\build\\docs\\ModulesMode");

});

gulp.task("typedoc", ["typedocFile", "typedocModules"]);

module.exports = gulp;

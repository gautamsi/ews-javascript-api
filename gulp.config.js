module.exports = function() {
    var root = './';
    var temp = './.tmp/';
    var typings = './src/js/typings/';

    var config = {
        /**
         * File paths
         */
        
        // All typescript settings
        ts: {
            // all typescript that we want to vet
            files: [
                './src/**/*.ts',                                                
            ],
            // all typescript that we want to vet
           testFiles: [
                './test/**/*.ts',                
            ],
            defs: typings + '**/*.ts',
            output: '.tmp',
            refs: typings + 'app.d.ts',
            appRefs: '.tmp/typings/app-dts/',
            transformFn: function (filepath) {
                return '/// <reference path="..' + filepath + '" />';
            },
            tscOptions: {
                target: 'ES5',
                declarationFiles: true,
                noExternalResolve: true,
                module: 'commonjs',
                noImplicitAny: true,
                removeComments: false,
                sortOutput: true
            },
            typings: typings            
        },
        typedocFiles:[
            './**/*.ts',
            '!./**/*.d.ts',
            '!./WebService.Extra.ts',
            '!./Microsoft.Exchange.WebServices.d__.ts',
        ],
        build: './build/',
        root: root,
        source: 'src/',
        temp: temp,

        /**
         * optimized files
         */
        optimized: {
            app: 'app.js',
            lib: 'lib.js'
        },
     };

    return config;
};

var typedoc = require('typedoc');

var options = {
    target: "ES5",
    module: "commonjs",
    experimentalDecorators: true,
    emitDecoratorMetadata: true,
    allowUnreachableCode: true,
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
app.generateDocs(app.expandInputFiles(['.\\src\\js']), ".\\build\\docs\\ModulesMode");

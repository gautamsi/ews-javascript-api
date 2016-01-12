({
    baseUrl: ".",
    paths: {
        'moment-timezone': 'empty:',//../../bower_components/moment-timezone/moment-timezone',
        'moment': 'empty:',//../../bower_components/moment/moment',
        'winjs-node': 'empty:',//../../bower_components/winjs/js/base',
    },
    
    optimize:'none',
    name: "ExchangeWebService", //../../../../../node_modules/almond/almond",
    /*almond - bundle winjs and moemnt with almond
    //include:['ExchangeWebService'],
    //insertRequire:['ExchangeWebService'],
    //wrap:true,    
    // wrap: {
    //     startFile: 'build.start',
    //     endFile: 'build.end'
    // },*/
    out:'../../test/ManualLiveTesting/ExchangeWebService.js'
    
})
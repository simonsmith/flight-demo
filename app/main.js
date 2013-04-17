require.config({
    baseUrl: './',
    paths: {
        'jquery':     'components/jquery/jquery',
        'text':       'components/require/plugins/text',
        'handlebars': 'components/handlebars/handlebars'
    },
    map: {
        '*': {
            'flight/component': 'components/flight/lib/component'
        }
    },
    shim: {
        'handlebars': {
            exports: 'Handlebars'
        },
        'components/flight/lib/component': {
            deps: ['jquery']
        }
    }
});

require(['app/app'], function(app) {
    app.init();
});

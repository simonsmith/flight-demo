Object.toType = function(obj) {
  return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
};

require.config({
    baseUrl: '../',
    urlArgs: "bust=" +  (new Date()).getTime(),
    paths: {
        'jquery':     'components/jquery/jquery',
        'text':       'components/require/plugins/text',
        'handlebars': 'components/handlebars/handlebars',
        'moment':     'components/moment/moment'
    },
    map: {
        '*': {
            'flight/component': 'components/flight/lib/component',
            'spec': 'tests/spec',
            'flight': 'components/flight'
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

// Load spec files
require([
    'spec/data-records',
    'spec/ui-recordsList'
], function() {
    var jasmineEnv = jasmine.getEnv();

    var htmlReporter = new jasmine.BootstrapReporter();
    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function(spec) {
        return htmlReporter.specFilter(spec);
    };

    jasmineEnv.execute();
});

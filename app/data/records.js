define(function(require) {
    'use strict';
    var defineComponent     = require('flight/component');
    var withRenderTemplate  = require('../mixins/renderTemplate');
    var withAjax            = require('../mixins/ajax');
    var recordView          = require('text!app/views/record.handlebars');

    return defineComponent(recordsData, withRenderTemplate, withAjax);

    function recordsData() {
        this.getRecords = function(event, total) {
            total = +total;

            this.get({
                xhr: {
                    url: 'records.json',
                    data: { total: total }
                },
                events: { done: 'dataRecordsLoaded' }
            });
        };

        this.renderRecords = function(event, data) {
            var html = this.renderDataToHTML(data, recordView);
            this.trigger('dataRecordsRendered', {html: html});
        };

        this.after('initialize', function() {
            this.on(document, 'dataRecordsLoaded', this.renderRecords);
            this.on(document, 'uiNeedsRecords', this.getRecords);
        });
    }
});

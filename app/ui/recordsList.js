define(function(require) {
    'use strict';
    var defineComponent = require('flight/component');

    return defineComponent(recordsList);

    function recordsList() {
        this.insertRecords = function(event, data) {
            this.$node.html(data.html);
        };

        this.clearRecords = function() {
            this.$node.empty();
        };

        this.addRecords = function(event, recordTotal) {
            if (this.$node.children().length > 0) {
                return;
            }

            this.trigger('uiNeedsRecords', recordTotal);
        };

        this.after('initialize', function() {
            this.on(document, 'dataRecordsRendered', this.insertRecords);
            this.on(document, 'uiClearRecordsAction', this.clearRecords);
            this.on(document, 'uiAddRecordsAction', this.addRecords);
        });
    }
});

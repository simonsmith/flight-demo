define(function(require) {
    'use strict';
    var defineComponent = require('flight/component');

    return defineComponent(recordControls);

    function recordControls() {
        this.defaultAttrs({
            insertSelector: '.record-insert',
            clearSelector: '.record-clear'
        });

        this.addRecords = function(event) {
            this.trigger(document, 'uiAddRecordsAction', $(event.target).data('total'));
            event && event.preventDefault();
        };

        this.clearRecords = function(event) {
            this.trigger(document, 'uiClearRecordsAction');
            event && event.preventDefault();
        };

        this.after('initialize', function() {
            this.select('insertSelector').on('click', this.addRecords.bind(this));
            this.select('clearSelector').on('click', this.clearRecords.bind(this));
        });
    }
});

define(function(require) {
    var recordsData     = require('app/data/records');
    var recordsList     = require('app/ui/recordsList');
    var recordControls  = require('app/ui/recordControls');

    return {
        init: function() {
            recordsData.attachTo(document);
            recordsList.attachTo('.record-list');
            recordControls.attachTo('.record-controls');
        }
    }
});

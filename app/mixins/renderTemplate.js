define(function(require) {
    'use strict';
    var Handlebars = require('handlebars');

    // Register template helpers/partials here
    // e.g require('app/views/helpers/someHelper');

    return function() {
        this.renderDataToHTML = function(data, template) {
            var compiledTemplate = Handlebars.compile(template);
            return compiledTemplate(data);
        }
    }
});

describeComponent('app/ui/recordsList', function() {
    var html;

    beforeEach(function() {
        html = readFixtures('records.html');
        setupComponent();
    });

    describe('Injecting records', function() {
        it('should inject the rendered HTML', function() {
            $(document).trigger('dataRecordsRendered', {
                html: html
            });

            expect(this.component.$node.children()).toHaveLength(3);
            expect(this.component.$node.children().eq(0)).toHaveText('GitHub');
        });
    });

    describe('Clearing records', function() {
        it('should remove any existing records', function() {
            this.component.$node.html(html);
            $(document).trigger('uiClearRecordsAction');

            expect(this.component.$node).toBeEmpty();
        });
    });

    describe('Adding records', function() {
        var spy;

        beforeEach(function() {
            spy = spyOnEvent(document, 'uiNeedsRecords');
        });

        it('should make a request for new records', function() {
            $(document).trigger('uiAddRecordsAction', 5);

            expect(spy.callCount).toBe(1);
        });

        it('should ignore the request if records already exist', function() {
            this.component.$node.html(html);
            $(document).trigger('uiAddRecordsAction', 5);

            expect(spy.callCount).toBe(0);
        });
    })
});

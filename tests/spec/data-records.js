describeComponent('app/data/records', function() {
    beforeEach(setupComponent);

    describe('Requesting records', function() {
        var fakeRecords = [
            {
                "title": "GitHub",
                "url": "http://github.com"
            },
            {
                "title": "Twitter",
                "url": "http://twitter.com"
            }
        ];

        beforeEach(function() {
            spyOn(this.component, 'get').andCallFake(function() {
                this.trigger('dataRecordsLoaded', [fakeRecords]);
            });
        });

        it('should accept a total as an integer', function() {
            $(document).trigger('uiNeedsRecords', 10);

            expect(this.component.get.mostRecentCall.args[0].xhr.data.total).toEqual(10);
        });

        it('should allow for the total to be a string', function() {
            $(document).trigger('uiNeedsRecords', '10');

            expect(this.component.get.mostRecentCall.args[0].xhr.data.total).toEqual(10);
        });

        it('should call event with rendered HTML', function() {
            var spy = spyOnEvent(document, 'dataRecordsRendered');
            $(document).trigger('uiNeedsRecords', 10);

            var html = spy.mostRecentCall.args[1].html;
            var $result = $('<ul></ul>').html(html);


            $result.children().find('a').each(function(index) {
                expect($(this)).toHaveText(fakeRecords[index].title);
                expect($(this)).toHaveAttr('href', fakeRecords[index].url);
            });

            expect($result.children()).toHaveLength(2);
        });
    });
});

/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Test if all feed URLs inside allFeeds are defined and not empty.
         */
        it('have URL', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


        /* Test if all feed names inside allFeeds are defined and not empty.
         */
        it('have name', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    describe('The menu', function() {


        /* Test if the menu element is hidden by default
         */
        it('is hidden by default', function() {
            //Checks if body has the class menu-hidden
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* Test if menu changes from hidden to visible on menu icon click.
         */
        it('changes visibility on menu icon click', function() {
            //Menu is hidden by default and we click on menu icon
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);

        });
    });

    describe('Initial Entries', function() {
        var h2innerHTMLFeedEntry; // has the h2 innerHTML content for the first feed entry
        beforeEach(function(done) {
            loadFeed(0, done); // loadFeed async test, done will be callled when loadFeed finish.
        });
        /* Test that here is at least one feed entry after loadFeed is called.
         */
        it('have at least one element', function(done) {
            h2innerHTMLFeedEntry = $('.entry h2')[0].innerHTML;
            expect(h2innerHTMLFeedEntry).toBeDefined();
            done();
        });

        describe('New Feed Selection', function() {
            beforeEach(function(done) {
                loadFeed(1, done); // Call loadFeed with the second feed entry.
            });

            /* Test that content changes when a new feed is loaded.
             */
            it('feed content changes', function(done) {
                expect($('.entry h2')[0].innerHTML).not.toMatch(h2innerHTMLFeedEntry);
                done();
            });

        });


    });


}());
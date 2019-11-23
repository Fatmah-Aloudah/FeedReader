/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* this file was formated using https://htmlformatter.com */

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
        it('Are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('All URLS are defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe("");
            });
        });

        /* in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('AllFeeds have a Defined Names', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe("");
                // etc
            });
        });
    });

    /*Menue test suit*/

    describe('The menu ', function() {
        var $htmlBody = $(window.document.body);

        /* This test ensures the menu element is
         * hidden by default.
         */
        it('It is hidden by default', function() {
            expect($htmlBody.hasClass("menu-hidden")).toBe(true);
        });

        /* This test ensures the menu element changes the visibility when
         *the menu icon is clicked (Toggle between "Shown/Hidden").
         */
        it('It is shown and hidden by clicking', function() {
            $(".menu-icon-link")[0].click();
            expect($htmlBody.hasClass("menu-hidden")).toBe(false);

            $(".menu-icon-link")[0].click();
            expect($htmlBody.hasClass("menu-hidden")).toBe(true);
        });
    });

    /* Initial Entries test suit*/

    describe('Initial Entries', function() {
        var $feedResult;
        beforeEach(function(done) {
            loadFeed(0, function() {
                $feedResult = $(".feed .entry");
                done();
            });
        });

        //Ensures loadFeed load at least one entry
        it('LoadFeed are populated.', function() {
            expect($feedResult).toBeDefined();
            expect($feedResult.length).toBeGreaterThan(0);
        });
        });
    });

    /* New Feed Selection test suit */
    describe('New Feed Selection', function() {
        var initHTML;
        beforeEach(function(done) {
            loadFeed(0, function() {
                initHTML = window.document.querySelector(".feed").innerHTML;
                loadFeed(1, function() {
                    done();
                });
            });
        });

        /* Ensures when a new feed is loaded the content will change */
        it('content changes.', function() {
            var newHTML = window.document.querySelector(".feed").innerHTML;
            expect(initHTML).not.toBe(newHTML);
        });
    });

}());

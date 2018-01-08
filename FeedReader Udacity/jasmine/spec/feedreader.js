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
    //This suite is all about the RSS feeds definitions, the allFeeds variable in our application.
    describe('RSS Feeds', function() {
        //Tests to make sure that the allFeeds variable has been defined and that it is not empty.
        it('are defined', function() {
            allFeeds.forEach(function(allFeeds) {
                expect(allFeeds).toBeDefined();
                expect(allFeeds.length).not.toBe(0);
            });
        });
        //Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
        it('URLs are defined and no URLs are empty', function() {
            allFeeds.forEach(function(allFeeds) {
                expect(allFeeds.url).toBeDefined();
                expect(allFeeds.url.length).not.toBe(0);
            });
        });
        //Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
        it('Names are defined and no names are empty', function() {
            allFeeds.forEach(function(allFeeds) {
                expect(allFeeds.name).toBeDefined();
                expect(allFeeds.name.length).not.toBe(0);
            });
        });
    });
    //Write a new test suite named "The menu"
    describe('The Menu', function() {
        //Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
        it('Menu element is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBeTruthy()
        });
        //Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
        it('Menu changes visibility when clicked with two expectations', function() {
            var expectations = $('.menu-icon-link');
            //Displays Menu
            expectations.click();
            expect($('body').hasClass('menu-hidden')).toBeFalsy();
            //Hides Menu
            expectations.click();
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });
    //Write a new test suite named "Initial Entries"
    describe('Initial Entries', function() {
        //Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
        //beforeEach and asynchronous done() function
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        //Test
        it('Test that ensure loadFeed function is called and completes work', function(done) {
            expect($('.feed').find('.entry').length).toBeGreaterThan(0);
            done();
        });
    });
    //Write a new test suite named "New Feed Selection"
    describe('New Feed Selection', function() {
        //Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
        //define variables used
        var newfeederSelection1
        var oldfeederSelection2
        beforeEach(function(done) {
            loadFeed(0, function() {
                newfeederSelection1 = $('.feed').text();
                loadFeed(1, function() {
                    oldfeederSelection2 = $('.feed').text();
                    done();
                });
            });
        });
        it('Content changes when new feed is loaded', function() {
            expect(newfeederSelection1).not.toBe(oldfeederSelection2);
        });
    });
}());

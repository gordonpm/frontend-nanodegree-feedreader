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


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('Feed URL is defined and URL not empty', function() {
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);        
            }
        });


        /* Test that loops through each feed 
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Feed Name is defined and not empty', function() {
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });

    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        let body = document.getElementsByTagName('body')[0];
        it('Menu element is hidden by default', function() {    
            expect(body.classList.contains('menu-hidden')).toBe(true); // checks if body element has menu-hidden
        });

        /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it('Menu changes visibility when menu icon is clicked', function() {
            let menuIcon = document.getElementsByClassName('menu-icon-link')[0];
            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
         });
    });

    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        
        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        it('at least one entry in feed', function(done) {
            let feed = document.getElementsByClassName('feed')[0];
            let entryLinks = feed.children;
            expect(entryLinks.length > 0).toBeTruthy(); 
            let entry = entryLinks[0].firstElementChild;
            expect(entry.className).toBe('entry');
            done();
        });
    });
        
    describe('New Feed Selection', function() {
        beforeEach(function(done) {
            loadFeed(0, function() {  // call the load function on the first feed
                previousTitle = document.querySelector('.header-title').innerHTML; 
                loadFeed(1, done); //call the load function on the second feed
            });
        });

        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        it('changes the content', (done) => {
            const currentTitle = document.querySelector('.header-title').innerHTML;
            expect(currentTitle === previousTitle).toBe(false); //compare title of first feed with the title of second feed
            done();
        });
    });
        
}());

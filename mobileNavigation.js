// Navigation for use on mobile devices
// Hammer.js is loaded via CFN in each HTML file
// Hammer.js swipes follow the direction of finger movement, so moving the finger left means swiping left. This logic is reversed to what is intended here.


document.addEventListener("DOMContentLoaded", function() {
    // Initialize mobile navigation after DOM is fully loaded. This is to ensure that the body element is available.
    
    // Select the main content area (or document body)
    const swipeArea = document.main;
    
    // Initialize Hammer.js
    const hammer = new Hammer(swipeArea);
    
    // Pages for navigation
    const pages = [
        "index.htm",
        "plan.htm",
        "recipes.htm",
        "storage.htm",
        "settings.htm"
    ];
    
    function getCurrentPageIndex() {
        const currentPage = window.location.pathname.split("/").pop();
        return pages.indexOf(currentPage);
    }
    
    // Listen for swipe events
    hammer.on('swiperight', function() {
        const pageIndex = getCurrentPageIndex();
        // If user swipes left on first page, go to last page
        const previousPageIndex = (pageIndex === 0) ? pages.length - 1 : pageIndex - 1;
        //console.log("Swiping left to: " + pages[previousPageIndex]);
        window.location.href = pages[previousPageIndex];
    });

    hammer.on('swipeleft', function() {
        const pageIndex = getCurrentPageIndex();
        // If user swipes right on last page, go to first page
        const nextPageIndex = (pageIndex === pages.length - 1) ? 0 : pageIndex + 1;
        //console.log("Swiping right to: " + pages[nextPageIndex]);
        window.location.href = pages[nextPageIndex];
    });

});
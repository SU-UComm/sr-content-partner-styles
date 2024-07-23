/**
 *  @file legacyContentCustomFixes.js
 *  @description File stores custom fixes for Legacy Content
 *  @author [Squiz]
 **/
/* ============================================================================================== */
/**
  @name fixPanelsCollectionsArea
  @description Function fixes the panels collections area and hides stories for you if its too close to the top.
  @author [ Squiz ]
**/
const fixPanelsCollectionsArea = {
    getPosition: (element) => {
        var xPosition = 0;
        var yPosition = 0;
  
        while (element) {
            xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
            yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
            element = element.offsetParent;
        }
  
        return {
            x: xPosition,
            y: yPosition
        };
    },
    init: () => {
        // Check if functionality needs to be triggered
        const validateItems = fixPanelsCollectionsArea.validateElements();
        if (validateItems === false) {
            return false;
        }
        // Get main content height
        const mainContentHeight = fixPanelsCollectionsArea.getMainContentHeight();
  
        // If mainContentHeight is less than 150 :: Means there's almost no content
        // And nothing fits in :: therefore hide all RHS Boxes boxes
        if (mainContentHeight < 150) {
            fixPanelsCollectionsArea.hideAllRhs();
        }
  
        // Otherwise :: Set new max-height on aside element
        const asideElement = document.querySelector("aside.su-page-sidebar");
        asideElement.style.maxHeight = mainContentHeight + "px";
  
        // Check if any of the boxes does not fit and needs to be hidden
        fixPanelsCollectionsArea.checkRhsBoxes(mainContentHeight);
  
    },
    validateElements: () => {
        // Check window width
        const windowWidth = window.innerWidth;
        // Breakpoint for having aside element as rhs column is 992px
        if (windowWidth < 992){
            return false;
        }
  
        // Check if content is present on the site :: if not = do nothing
        const contentEl = document.querySelector(".su-page-content");
        if (contentEl === null) {
            return false;
        }
        // Check if aside element is present on the page :: if not = do nothing
        const asideElement = document.querySelector("aside.su-page-sidebar");
        // IF aside element does not exist :: do nothig
        if (asideElement === null) {
            return false;
        }
        // Check if Panels Collection is present on the page :: if not = do nothing
        const panelsArea = document.querySelector("article .panel-collection");
        // If panels does not exist :: do nothing
        if (panelsArea === null) {
            return false;
        }
        // Check if panels has height ::  if not means empty container = do nothing
        const panelsAreaHeight = panelsArea.clientHeight || 0;
        // IF height is zero :: means its empty container :: do nothing
        if (panelsAreaHeight === 0) {
            return false;
        }
  
        return true;
    },
    getMainContentHeight: () => {
        // Get whole Content Container height
        const contentEl = document.querySelector(".su-page-content");
        const contentElHeight = contentEl.clientHeight;
  
        // Get Panels Height
        const panelsArea = document.querySelector("article .panel-collection");
        const panelsAreaHeight = panelsArea.clientHeight || 0;
  
        // Get Lower Content height
        const lowerContent = document.querySelector("div.su-lower-content");
        let lowerContentHeight = 0;
        if (lowerContent !== null) {
            lowerContentHeight = lowerContent.clientHeight || 0;
        }
        // Calculate Main Content Height :: need to decrease by 300 for some reasons to be accurate
        const mainContentHeight = contentElHeight - panelsAreaHeight - lowerContentHeight - 300;
  
        return mainContentHeight;
    },
    hideAllRhs: () => {
        // Get RHS Components:
        const subscribeBox = document.querySelector("div[data-component='subscribe-to-stanford-report']");
        const storiesForYou = document.querySelector("div[data-component='link-list']");
        const popularStories = document.querySelector("div[data-component='popular-stories']");
  
        // Hide Subscribe Box
        if (typeof(subscribeBox) !== 'undefined' && subscribeBox !== null) {
            subscribeBox.style.display = "none";
        }
        // Hide Stories For You box
        if (typeof(storiesForYou) !== 'undefined' && storiesForYou !== null) {
            storiesForYou.style.display = "none";
        }
        // Hide Popular Stories box
        if (typeof(popularStories) !== 'undefined' && popularStories !== null) {
            popularStories.style.display = "none";
        }
    },
    checkRhsBoxes: (mainContentHeight) => {
        // Get RHS Boxes
        const subscribeBox = document.querySelector("div[data-component='subscribe-to-stanford-report']");
        const storiesForYou = document.querySelector("div[data-component='link-list']");
        const popularStories = document.querySelector("div[data-component='popular-stories']");
        // And their heights
        let subscribeBoxHeight = 0;
        let storiesForYouHeight = 0;
        let popularStoriesHeight = 0;
        // Get Height: Subscribe Box
        if (typeof(subscribeBox) !== 'undefined' && subscribeBox !== null) {
            subscribeBoxHeight = subscribeBox.clientHeight || 200;
        }
        // Get Height: Stories For You box
        if (typeof(storiesForYou) !== 'undefined' && storiesForYou !== null) {
            storiesForYouHeight = storiesForYou.clientHeight || 450;
        }
        // Get Height: Popular Stories
        if (typeof(popularStories) !== 'undefined' && popularStories !== null) {
            popularStoriesHeight = popularStories.clientHeight || 200;
        }
  
        // Get Combined height
        let rhsCombinedHeight = subscribeBoxHeight + storiesForYouHeight + popularStoriesHeight;
  
        // Check #1: If height is bigger :: hide last box
        if ((mainContentHeight < rhsCombinedHeight) && (popularStories !== null)) {
            popularStories.style.display = "none";
        }
  
        // Check #2: Need to check this again :: without last box now
        rhsCombinedHeight = subscribeBoxHeight + storiesForYouHeight;
        if ((mainContentHeight < rhsCombinedHeight) && (storiesForYou !== null)) {
            storiesForYou.style.display = "none";
        }
        // Check #3: Need to check standalone subscribe box now
        if ((mainContentHeight < subscribeBoxHeight) && (subscribeBox !== null)) {
            subscribeBox.style.display = "none";
        }
  
        // The end
    },
  };
  
  /* ============================================================================================== */
  /* Init Area */
  /* ============================================================================================== */
  
  fixPanelsCollectionsArea.init();
  
  window.addEventListener('resize', function(event) {
    fixPanelsCollectionsArea.init();
  }, true);
  
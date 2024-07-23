/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms-csstransitions-touch-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.csstransforms=function(){return!!F("transform")},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
!function(e){if("function"==typeof define&&define.amd)define(e);else if("object"==typeof exports)module.exports=e();else{var n=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=n,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var o in t)n[o]=t[o]}return n}function n(t){function o(n,r,i){var c;if(arguments.length>1){if(i=e({path:"/"},o.defaults,i),"number"==typeof i.expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*i.expires),i.expires=s}try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(a){}return r=encodeURIComponent(String(r)),r=r.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)),n=n.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),n=n.replace(/[\(\)]/g,escape),document.cookie=[n,"=",r,i.expires&&"; expires="+i.expires.toUTCString(),i.path&&"; path="+i.path,i.domain&&"; domain="+i.domain,i.secure?"; secure":""].join("")}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],u=/(%[0-9A-Z]{2})+/g,d=0;d<p.length;d++){var f=p[d].split("="),l=f[0].replace(u,decodeURIComponent),m=f.slice(1).join("=");'"'===m.charAt(0)&&(m=m.slice(1,-1));try{if(m=t&&t(m,l)||m.replace(u,decodeURIComponent),this.json)try{m=JSON.parse(m)}catch(a){}if(n===l){c=m;break}n||(c[l]=m)}catch(a){}}return c}return o.get=o.set=o,o.getJSON=function(){return o.apply({json:!0},[].slice.call(arguments))},o.defaults={},o.remove=function(n,t){o(n,"",e(t,{expires:-1}))},o.withConverter=n,o}return n()});
$ = jQuery;

/***
Utility functions available across the site
***/
var SUNEWS = {


  size: function(){
    // return window size based on visibility as calculated by CSS
    var size = 'unknown';

    // if we don't already have the size-detect div's, add them
    if ( $('.size-detect-xs').length == 0 ) {
      $('body')
        .append('<div class="size-detect-xs" />')
        .append('<div class="size-detect-sm" />')
        .append('<div class="size-detect-md" />')
        .append('<div class="size-detect-lg" />');
    }

    $(['xs', 'sm', 'md', 'lg']).each(function(i, sz) {
      if ($('.size-detect-'+sz).css('display') != 'none') {
        size = sz;
      }
    });
    return size;
  },

  headerHeight: function () {
    return $('#top').outerHeight() + $('#header').outerHeight() + $('#mainmenu').outerHeight() + $('#wpadminbar').outerHeight();
  },

  stickFooter: function(){
    // adjust css to make footer sticky
    var h = $('#footer').height() + 'px';
    $('#su-content').css('padding-bottom', h);
    $('#footer').css('margin-top', '-'+h);
  },

  cardHeight: function (elements) {
    // only work on card-content - images will be equal height
    elements = $(elements).find(".card-content");

    // on phones, everything is auto height
    if (SUNEWS.size() == 'xs') {
      elements.each( function() { $(this).height('auto'); } );
      return elements; // allow chaining
    }

    var heights, maxHeight;
    heights = elements.map(function() {
      $(this).height('auto'); // ensure it has its natural height
      return $(this).height();
    });
    maxHeight = Math.max.apply(null, heights);

    elements.height(maxHeight);
    return elements; // allow chaining
  },

  equalHeight: function (container, containerlg) {
    // until CSS flexboxes are widely supported, use this to make div's be equal height
    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        height = 0,
        numGaps = 0,
        $el,
        topPosition = 0;
    $(container).each(function () {

      $el = $(this);
      $($el).height('auto')
      topPostion = $el.parent().position().top;

      if (currentRowStart != topPostion) {
        height += currentTallest;
        numGaps++;
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
          rowDivs[currentDiv].height(currentTallest);
        }
        rowDivs.length = 0; // empty the array
        currentRowStart = topPostion;
        currentTallest = $el.height();
        rowDivs.push($el);
      } else {
        rowDivs.push($el);
        currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
      }
      for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
        rowDivs[currentDiv].height(currentTallest);
      }
    });
    height += currentTallest; numGaps--;

    // Set height for large card on diferent viewport sizes
    var gap = $(container).css('margin-bottom');
    gap = parseInt(gap);
    var cardfull = $(containerlg);
    if ($(window).width() > 992) {
      cardfull.height(height + (gap * numGaps));
    } else {
      cardfull.height('auto');
    }
    //set height for regular card to auto on smaller devices
    if ($(window).width() < 768) {
      $(container).height('auto');
    }
  },

  pushdown: function(e){
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || SUNEWS.size() == 'xs' ) {
      var elems = $(e);
      $('#main-bottom').find('[class*="col-"]').prepend( elems );
      elems.removeClass('pull-left pull-left-narrow pull-left-wide pull-right pull-right-narrow pull-right-wide').addClass('align-center center-block');
    }
  },

  trackClick: function() {
    if ( typeof ga == 'function' ) {
      var $this = $( this )
        , category = $this.closest('[data-ga-category]').data('ga-category') || 'Unknown'
        , action   = $this.closest('[data-ga-action]').data('ga-action') || ( $this.is( 'a' ) && this.hostname ) || 'click'
        , label    = $this.data('ga-label') || this.href
      ;
      ga( 'send', 'event', category, action, label);
    }
  }
};

$(function() {
  // add :external filter to elements
  $.expr[':'].external = function(obj) {
    return obj.hostname && (obj.hostname != document.location.hostname);
  };

  // style external links
  $('#section-list a:external, #post-list h3 a:external').addClass('external-link').attr('aria-label', 'external link');

  // set background image for elements that have data-bg-img attribute (e.g. infoboxes)
  $('[data-bg-img]').each(function () {
    $(this).css('background-image', 'url('+$(this).data('bg-img')+')');
  });

  // note resize events and trigger resizeEnd event when resizing stops
  $(window).resize(function() {
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
      $(this).trigger('resizeEnd');
    }, 200);
  });

  // Trigger resizeEnd when document is loaded
  $(window).load(function(){
    $(this).trigger('resizeEnd');
  });


  // Call responsive funtion when browser window resizing is complete
  $(window).bind('resizeEnd', function() {
    // SUNEWS.storyBannerFullScreenHeight('#story-banner.banner-full-screen img','#story-banner.banner-full-screen'); // make story banner container the same size as story banner full screen image
    // re-stick the footer in case its height has changed
    SUNEWS.stickFooter();
    SUNEWS.pushdown('.pushdown'); // move infoboxes, sidebars to bottom on small screens
    SUNEWS.equalHeight('.eq-height');

  });
  $(window).trigger('resizeEnd');

  // don't add skip links to browser history
  $('#skip > a').click(function(e){
    var href = $(this).attr('href').substr(1); // remove the #
    var target = $('a[name="' + href + '"]');
    target.focus();
  });

  // on small screens, reveal the top nav when they start scrolling up
  if (SUNEWS.size() == 'xs') {
    var nav = $('#mainmenu')[0]
        , $nav = $(nav)
        , $header = $('#header')
        , $article = $nav.next('article')
        , $navHeight = $nav.outerHeight()
        , navTop = $nav.position().top
        , navBottom = navTop + $nav.height()
        , prevScroll = 0
        ;
    $(window).scroll(function () {
      var currScroll = $(this).scrollTop();

      if (currScroll > navBottom) {
        $nav.addClass('fixed');
        $article.css("padding-top", $navHeight + 'px');
        if (currScroll > prevScroll) {
          $nav.removeClass('visible');
        } else {
          $nav.addClass('visible');
        }
      }
      else if (currScroll <= navTop) {
        $nav.removeClass('fixed');
        $nav.removeClass('visible');
        $article.css("padding-top", "0");
      }
      prevScroll = currScroll;
    });
  }
});
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
  
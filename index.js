'use strict';


var scrollAnimator = {};

scrollAnimator.inViewport = function (elem) {

    //Get the bounding rectangle's position in relation to the viewport
    var elemRect = elem.getBoundingClientRect();

    //Get height of viewport
    var height = window.innerHeight;

    //return true if bounding rectangle top or bottom are positive and less than viewport height
    var topVisible = elemRect.top > 0 && elemRect.top < height;
    var bottomVisible = elemRect.bottom > 0 && elemRect.bottom < height;

    return topVisible || bottomVisible;
}

scrollAnimator.addClass = function (elem, classAdd) {
    if (elem.className.indexOf(classAdd) < 0) {
        elem.className = elem.className + ' ' + classAdd;
    }
}

scrollAnimator.removeClass = function (elem, classRemove) {
    var pos = elem.className.indexOf(classRemove);
    if (pos > 0) {
        var before = elem.className.slice(0, pos);
        var after = elem.className.slice(pos + classRemove.length);
        elem.className = before + after;
    }
}

//add event listener
scrollAnimator.addScroll = function (id, searchClass) {
    var scrollContainer = document.getElementById(id);
    if (!scrollContainer) {
        console.log('Scroll-animator error: element with id ' + id + ' could not be found.');
        return false;
    }
    scrollContainer.addEventListener('scroll', function () {
        animate(searchClass);
    });
}

function animate (className) {
    //add default of anim-elem
    className = className || 'anim-elem';
    //get all elements with that class name
    var elemList = document.getElementsByClassName(className);

    //You can't use forEach on NodeLists or HTML collections
    for (var i = 0; i < elemList.length; i++) {
        var elem = elemList[i];
        //check if those elements are in view
        if (scrollAnimator.inViewport(elem)) {
            //add class
            scrollAnimator.addClass(elem, 'anim-trigger');
        } else {
            scrollAnimator.removeClass(elem, 'anim-trigger');
        }
    }
}

module.exports = scrollAnimator;

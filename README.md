#scroll-animator

## Description

Scroll-animator is a simple, lightweight scroller control that enables developers to easily base animations on **vertical** scroll position. It does not require jquery or any other framework and enables developers to create their own css animations.

## Code Example

Using scroll-animator is simple! There are two easy steps:

1. Initiate the scroll watcher
    ```js
        scrollAnimator.addScroll('scroll-container', 'anim-elem');
    ```
    Here, 'scroll-container' is the id of the scrolling element and 'anim-elem' is the class on the elements you want to animate. 

2. Set up the animation in your css stylesheet
```css
    @-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
    @-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
    @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

    .anim-trigger.fade-in {
        opacity:0;  /* make things invisible upon start */
        -webkit-animation:fadeIn ease-in 1;  /* call our keyframe named fadeIn, use animattion ease-in and repeat it only 1 time */
        -moz-animation:fadeIn ease-in 1;
        animation:fadeIn ease-in 1;
    
        -webkit-animation-fill-mode:forwards;  /* this makes sure that after animation is done we remain at the last keyframe value (opacity: 1)*/
        -moz-animation-fill-mode:forwards;
        animation-fill-mode:forwards;
    
        -webkit-animation-duration:1s;
        -moz-animation-duration:1s;
        animation-duration:1s;
    }
```

## Motivation

There are certainly other packages that exist for this type of function, like Wow.js or Animate on Scroll for example.  I wanted to create my own very simple version that didn't rely on jquery or another front end framework or library. I also wanted to learn more about the process of creating my own NPM module as well as scrolling animations. I wanted this module to work with websites using parallax.

## Installation

To install, first install the package using:
```bash
    npm install @syvzies/scroll-animator
```

Then, include the module using your favorite framework. In webpack, I have

```js
    var scrollAnimator = require('@syvzies/scroll-animator');
```

The API is know available through the scrollAnimator object.

## API Reference

### addScroll(id, className)
Will add an event listener on the scroll on the id of the specified element. When the user scrolls, scroll-animator will check to see if any elements with the provided class names are in the viewport. If they are, it will add the class 'anim-trigger' to the element. The class should be specified in your css stylesheet along with another class to control the animation. If the element is not in the viewport, scroll-animator will remove the 'trigger-anim' class.

If no className is provided, 'anim-elem' is used as a default.

### inViewport(elem)
Will return true if the element is visible in the viewport.

### addClass(elem, className)
Will add the class className to the element elem, provided the element does not already have that class

### removeClass(elem, className)
Will remove the specified class from the element, if that class exists on the element

## Contributors
Please feel free to submit pull requests or leave any suggestsions/comments/feedback. I'd love to hear it!

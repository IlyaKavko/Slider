# My slider
To start using my slider you need to insert the custom_slider.less file in your `<head>`:
`<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css">
</head>`
And so-same insert in the end of the `<body>` custom_slider.js:
`<script src="./js/custom_slider.js"></script>`

After you should to create the struct which include `<div>` blocks:
`<div class="custom_slider">
        <div><img src="./img/..." alt="..."></div>
        <div><img src="./img/..." alt="..."></div>
        <div><img src="./img/..." alt="..."></div>
    </div>`

For to calling the custom_slider.js you need to call the function in your .js file:
`let mySlider = document.querySelector('.custom_slider');
mySlider.customSlider();`

Also you can configure this slider 

# Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
accessibility | boolean | true | Enables tabbing and arrow key navigation.  Unless `autoplay: true`, sets browser focus to current slide (or first of current slide set, if multiple `slidesToShow`) after slide change. For full a11y compliance enable focusOnChange in addition to this.
adaptiveHeight | boolean | false | Adapts slider height to the current slide
appendArrows | string | $(element) | Change where the navigation arrows are attached (Selector, htmlString, Array, Element, jQuery object)
appendDots | string | $(element) | Change where the navigation dots are attached (Selector, htmlString, Array, Element, jQuery object)
arrows | boolean | true | Enable Next/Prev arrows
asNavFor | string | $(element) | Enables syncing of multiple sliders
autoplay | boolean | false | Enables auto play of slides
autoplaySpeed | int  | 3000 | Auto play change interval
centerMode | boolean | false | Enables centered view with partial prev/next slides. Use with odd numbered slidesToShow counts.
centerPadding | string | '50px' | Side padding when in center mode. (px or %)
cssEase | string |  'ease' | CSS3 easing
customPaging | function | n/a | Custom paging templates. See source for use example.
dots | boolean | false | Current slide indicator dots
dotsClass | string | 'slick-dots' | Class for slide indicator dots container
draggable | boolean | true | Enables desktop dragging
easing | string |  'linear' | animate() fallback easing
edgeFriction | integer | 0.15 | Resistance when swiping edges of non-infinite carousels
fade | boolean | false | Enables fade
focusOnSelect | boolean | false | Enable focus on selected element (click)
focusOnChange | boolean | false | Puts focus on slide after change
infinite | boolean | true | Infinite looping
initialSlide | integer | 0 | Slide to start on
lazyLoad | string | 'ondemand' | Accepts 'ondemand' or 'progressive' for lazy load technique. 'ondemand' will load the image as soon as you slide to it, 'progressive' loads one image after the other when the page loads.
mobileFirst | boolean | false | Responsive settings use mobile first calculation
nextArrow | string (html \| jQuery selector) \| object (DOM node \| jQuery object) | `<button type="button" class="slick-next">Next</button>` | Allows you to select a node or customize the HTML for the "Next" arrow.
pauseOnDotsHover | boolean | false | Pauses autoplay when a dot is hovered
pauseOnFocus | boolean | true | Pauses autoplay when slider is focussed
pauseOnHover | boolean | true | Pauses autoplay on hover
prevArrow | string (html \| jQuery selector) \| object (DOM node \| jQuery object) | `<button type="button" class="slick-prev">Previous</button>` | Allows you to select a node or customize the HTML for the "Previous" arrow.
respondTo | string | 'window' | Width that responsive object responds to. Can be 'window', 'slider' or 'min' (the smaller of the two).
responsive | array | null | Array of objects [containing breakpoints and settings objects (see example)](#responsive-option-example). Enables settings at given `breakpoint`. Set `settings` to "unslick" instead of an object to disable slick at a given breakpoint.
rows | int | 1 | Setting this to more than 1 initializes grid mode. Use slidesPerRow to set how many slides should be in each row.
rtl | boolean | false | Change the slider's direction to become right-to-left
slide | string | '' | Slide element query
slidesPerRow | int | 1 | With grid mode initialized via the rows option, this sets how many slides are in each grid row.
slidesToScroll | int | 1 | # of slides to scroll at a time
slidesToShow | int | 1 | # of slides to show at a time
speed | int | 300 | Transition speed
swipe | boolean | true | Enables touch swipe
swipeToSlide | boolean | false | Swipe to slide irrespective of slidesToScroll
touchMove | boolean | true | Enables slide moving with touch
touchThreshold | int | 5 | To advance slides, the user must swipe a length of (1/touchThreshold) * the width of the slider.
useCSS | boolean | true | Enable/Disable CSS Transitions
useTransform | boolean | true | Enable/Disable CSS Transforms
variableWidth | boolean | false | Disables automatic slide width calculation
vertical | boolean | false | Vertical slide direction
verticalSwiping | boolean | false | Changes swipe direction to vertical
waitForAnimate | boolean | true | Ignores requests to advance the slide while animating
zIndex | number | 1000 | Set the zIndex values for slides, useful for IE9 and lower

# My slider
To start using my slider you need to insert the custom_slider.less file in your `<head>`:
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css">
</head>```
And so-same insert in the end of the ```<body>``` custom_slider.js:
```html
<script src="./js/custom_slider.js"></script>```

After you should to create the struct which include `<div>` blocks:
```html
<div class="custom_slider">
        <div><img src="./img/..." alt="..."></div>
        <div><img src="./img/..." alt="..."></div>
        <div><img src="./img/..." alt="..."></div>
    </div>```

For to calling the custom_slider.js you need to call the function in your .js file:
```html
let mySlider = document.querySelector('.custom_slider');
mySlider.customSlider();```

Also you can configure this slider 

# Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
slideWidth: | Number | 300 | Sets the width of slider 
slideHeight: | Number | auto | Sets the height of slider
maxSlides: | Numder | 1 | Sets the number of pictures on the screen 
navs: | Boolean | true | Enables the navigation buttons
loop: | Boolean | true | Enables the slider loop
autoplay: | Boolean | true | Enables slider autoplay
timeout: | Number | 4000 | Sets the rotation speed

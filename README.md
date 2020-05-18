# My slider

To use the slider you need to <a href="https://github.com/IlyaKavko/Slider">download</a> two files and copy them to your file

Add HTML markup to your `<body>`:

    <div class="custom_slider">
        <div><img src="..." alt="..."></div>
        <div><img src="..." alt="..."></div>
        <div><img src="..." alt="..."></div>
    </div>

Add the link for the CSS file to your `<head>`:

    <link rel="stylesheet" href="./css/custom_slider.css">
    
Then you need to insert a link to the JS file before the closing tag of your `<body>`;

    <script src="./js/custom_slider.js"></script>
    
Then in your file .JS needs to create a variable and call the function. Example:

    let mySlider = document.querySelector('.custom_slider');
    mySlider.customSlider();
    
### Seting

To set the settings, you need to open the curly brackets and enter the settings. Example:
    
    let mySlider = document.querySelector('.custom_slider');
    mySlider.customSlider({
        slideWidth: 300,
        slideHeight: '',
        maxSlides: 1,
        navs: true,
        loop: true,
        autoplay: true,
        timeout: 4000,
        margin: 10,
        delay: 300,
        onHover: true,
        dots: true,
    });
  
Option          | Type            |Default           |        Description                       |
:-------------: | :-------------: | :--------------: | :--------------------------------        |
slideWidth:     | Number          | 300              | Sets the width of the slide.             |
slideHeight:    | Number          | ''(auto)         | Sets the height of the slide.            |
maxSlides:      | Number          | 1                | Sets the number of slides in the slider itself.|
navs:           | Boolean         | true             | Enables the presence of navigation arrows.|
loop:           | Boolean         | true             | Enables looping the slider.              |
autoplay:       | Boolean         | true             | Enables autoplay the slider.             |
timeout:        | Number          | 4000             | Sets the delay for autoplay of slider / Set in the thousands (1000 = 1s).|
margin:         | Number          | 10               | Sets spacing between slides.             |
delay:          | Number          | 300              | Sets the delay when scrolling the slide. |
onHover:        | Boolean         | true             | Stops the autoplay when you hover / And when you remove the mouse hover autoplay starts again.|
dots:           | Boolean         | true             | Enables navigation dots. |

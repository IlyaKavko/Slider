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

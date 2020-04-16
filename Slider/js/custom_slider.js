const defaultSettings = {
    slideWidth: 300,
    slideHeight: '',
    maxSlides: 1,
    navs: true,
    loop: true,
    autoplay: true,
    timeout: 4000,
};

let moveNum = 0;

let customSliderArr = document.querySelectorAll('.custom_slider');
customSliderArr.forEach(item => item.customSlider = function (sliderSettings = {}) {
    const slidesOffset = sliderSettings.slideWidth || defaultSettings.slideWidth;
    const slidesHeight = sliderSettings.slideHeight || defaultSettings.slideHeight;
    const maxSlides = sliderSettings.maxSlides || defaultSettings.maxSlides;
    const navs = (sliderSettings.navs !== undefined) ? sliderSettings.navs : defaultSettings.navs;
    const loop = (sliderSettings.loop !== undefined) ? sliderSettings.loop : defaultSettings.loop;
    const autoplay = (sliderSettings.autoplay !== undefined) ? sliderSettings.autoplay : defaultSettings.autoplay;
    const timeout = sliderSettings.timeout || defaultSettings.timeout;
    const duration = sliderSettings.duration || defaultSettings.duration;
    const slides = item.querySelectorAll('div');
    const totalLength = slides.length * slidesOffset;

    buildSlider(item, slidesOffset, slidesHeight, slides, navs);


    let outerContainer = item.querySelector('.outer_container');
    outerContainer.style.width = `${slidesOffset * maxSlides}px`;
    if (navs) {
        let nextSlideBtn = item.querySelector('.custom_slider .next_slide');
        let prevSlideBtn = item.querySelector('.custom_slider .prev_slide');

        nextSlideBtn.addEventListener('click', nextSlideClick);
        prevSlideBtn.addEventListener('click', prevSlideClick);
    }

    function nextSlideClick(e) {
        e.preventDefault()
        item.closest('.custom_slider');
        let innerContainer = item.querySelector('.inner_container');
        if ((moveNum - slidesOffset) > -totalLength) {
            moveNum = moveNum - slidesOffset;
            innerContainer.style.transform = `translate(${moveNum}px, 0)`;
            innerContainer.style.transition = `transform ${duration} ease-in`;
        } else if (loop) {
            moveNum = 0;
            innerContainer.style.transform = `translate(${moveNum}px, 0)`;
        }
    }

    function prevSlideClick(e) {
        e.preventDefault()
        item.closest('.custom_slider');
        let innerContainer = item.querySelector('.inner_container');
        if (moveNum < 0) {
            moveNum = moveNum + slidesOffset;
            innerContainer.style.transform = `translate(${moveNum}px, 0)`;
            innerContainer.style.transition = `transform ${duration} ease-in`;
        } else if (loop) {
            moveNum = -totalLength + slidesOffset;
            innerContainer.style.transform = `translate(${moveNum}px, 0)`;
            innerContainer.style.transition = `transform ${duration} ease-in`;
        }
    }

    if (autoplay) {
        function moveSlide() {
            let innerContainer = item.querySelector('.inner_container');
        if ((moveNum - slidesOffset) > -totalLength) {
            moveNum = moveNum - slidesOffset;
            innerContainer.style.transform = `translate(${moveNum}px, 0)`;
            innerContainer.style.transition = `transform ${duration} ease-in`;
        } else if (loop) {
            moveNum = 0;
            innerContainer.style.transform = `translate(${moveNum}px, 0)`;
            innerContainer.style.transition = `transform ${duration} ease-in`;
        }
        }
        setInterval(moveSlide, timeout);
    }
});

function buildSlider(slider, slidesWidth, slidesHeight, slides, navs) {
    slides.forEach(item => {
        item.classList.add('one_slide');
        item.style.width = `${slidesWidth}px`;
        item.style.height = `${slidesHeight}px`;
    });

    slider.innerHTML = `        
        <div class="outer_container">
            <div class="inner_container">
                ${slider.innerHTML}
            </div>
        </div>`;
    if (navs) {
        slider.innerHTML = slider.innerHTML + `
            <div class="navs">
                <a href="#" class="prev_slide"><</a>
                <a href="#" class="next_slide">></a>
            </div>`
    }
}
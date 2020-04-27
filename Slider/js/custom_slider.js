const defaultSettings = {
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
    dots:true,
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
    const margin = sliderSettings.margin || defaultSettings.margin;
    const delay = sliderSettings.delay || defaultSettings.delay;
    const onHover = (sliderSettings.onHover != undefined) ? sliderSettings.onHover : defaultSettings.onHover;
    const dots = (sliderSettings.dots != undefined) ? sliderSettings.dots : defaultSettings.dots;
    const slides = item.querySelectorAll('div');
    const totalLength = slides.length * slidesOffset;

    buildSlider(item, slidesOffset, slidesHeight, slides, navs, margin);

    let outerContainer = item.querySelector('.outer_container');
    outerContainer.style.width = `${slidesOffset * maxSlides}px`;

    if (navs) {
        let nextSlideBtn = item.querySelector('.custom_slider .next_slide');
        let prevSlideBtn = item.querySelector('.custom_slider .prev_slide');

        nextSlideBtn.addEventListener('click', nextSlideClick);
        prevSlideBtn.addEventListener('click', prevSlideClick);
    };

    function firstSlide () {
        let custSliderArr = document.querySelectorAll('div.one_slide');
        return custSliderArr[0];
    }

    function lastSlider () {
        let custSliderArr = document.querySelectorAll('div.one_slide');
        return custSliderArr[custSliderArr.length - 1];
    }

    function nextSlideClick(e) {
        e.preventDefault();
        item.closest('.custom_slider');
        let innerContainer = item.querySelector('.inner_container');

        if (!loop && moveNum) {
            return;
        };

        if (loop && moveNum >= totalLength - 1) {
            moveNum = -1;
        }
        moveNum++;

        innerContainer.style.transition = `transform ${delay}ms ease-in`;
        innerContainer.innerHTML = innerContainer.innerHTML + firstSlide().outerHTML;
        innerContainer.classList.remove('no_transition');
        innerContainer.style.transform = `translate(${-slidesOffset}px,0)`;

        setTimeout(() => {
            innerContainer.classList.add('no_transition');
            innerContainer.style.transform = `translate(0,0)`;
            firstSlide().remove();
        },delay);
        
    };

    function prevSlideClick(e) {
        e.preventDefault();
        item.closest('.custom_slider');
        let innerContainer = item.querySelector('.inner_container');
        if (!loop && moveNum) {
            return;
        };

        if (loop && moveNum < 0) {
            moveNum = totalLength;
        }
        moveNum--;

        innerContainer.style.transition = `transform ${delay}ms ease-in`;
        innerContainer.classList.add('no_transition');
        innerContainer.innerHTML = lastSlider().outerHTML + innerContainer.innerHTML;
        innerContainer.style.transform = `translate(${-slidesOffset}px,0)`;

        setTimeout(() => {
            innerContainer.classList.remove('no_transition');
            innerContainer.style.transform = `translate(0,0)`;
            setTimeout (() => {
                lastSlider().remove();
            },delay)
        });
    };

    if (onHover) {
        let innerContainer = item.querySelector('.inner_container');
        innerContainer.addEventListener('mouseover', e =>{
            if (e.target) {
              setTimeout(() => {clearInterval(stopAutoplay);}) 
            };
        });

        innerContainer.addEventListener('mouseout', e => {
            if(e.target){
                startAutoplay();
            }
        });
    };

    if (autoplay) {
        function moveSlide() {
            let innerContainer = item.querySelector('.inner_container');
            if (!loop && moveNum) {
                return;
            };
    
            if (loop && moveNum >= totalLength - 1) {
                moveNum = -1;
            }
            moveNum++;
            innerContainer.style.transition = `transform ${delay}ms ease-in`;
            innerContainer.innerHTML = innerContainer.innerHTML + firstSlide().outerHTML;
            innerContainer.classList.remove('no_transition');
            innerContainer.style.transform = `translate(${-slidesOffset}px,0)`;
            
            setTimeout(() => {
                innerContainer.classList.add('no_transition');
                innerContainer.style.transform = `translate(0,0)`;
                firstSlide().remove();
            },delay);
        }; 
    }
    let stopAutoplay;
    function startAutoplay () {
        stopAutoplay = setInterval(moveSlide, timeout);
    }
    startAutoplay();

    if (dots){
        let innerContainer = item.querySelector('.inner_container');
        let dotsArr = document.querySelectorAll('div.one_slide');
        let dotsDiv = document.createElement('div');
        innerContainer.append(dotsDiv);
        dotsDiv.classList.add('dots-item')
        for (let i = 0; i < dotsArr.length; i++){
            let dotsItem = document.createElement('div');
            dotsDiv.append(dotsItem)
            dotsItem.classList.add('dots')
        };
            let dotsActive = dotsDiv.querySelector('div.dots');
            dotsActive.classList.add('active');
    }
  
});

function buildSlider(slider, slidesWidth, slidesHeight, slides, navs, margin) {
    slides.forEach(item => {
        item.classList.add('one_slide');
        item.style.width = `${slidesWidth}px`;
        item.style.height = `${slidesHeight}px`;
        item.style.marginRight = `${margin}px`;
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
    };
};
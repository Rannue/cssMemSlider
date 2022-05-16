const imgs = document.querySelectorAll('.img');
const sliderLine = document.querySelector('.mem-slider');
let count = 0;
let width;

function init() {
    width = document.querySelector('.mem-img').offsetWidth;
    sliderLine.style.width = (width / 16) * imgs.length + 'rem';
    imgs.forEach(item => {
        item.style.width = (width / 16) + 'rem'
        item.style.height = 'auto';
    });
};

window.addEventListener('resize', init);
init();

let inp = document.getElementsByName('radio-btn');

function check() {
    let inp = document.getElementsByName('radio-btn');
    for (let i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
        }
    }
}

const text = document.querySelector('p')

const radioBtnOne = document.querySelector('#label-radio1')
const radioBtnTwo = document.querySelector('#label-radio2')
const radioBtnThree = document.querySelector('#label-radio3')
const radioBtnFour = document.querySelector('#label-radio4')

const BTNactiveOne = document.querySelector('#div-radio1')
const BTNactiveTwo = document.querySelector('#div-radio2')
const BTNactiveThree = document.querySelector('#div-radio3')
const BTNactiveFour = document.querySelector('#div-radio4')

function initMaginLeft(i) {
    sliderLine.style.marginLeft = '-' + (width / 16) * i + 'rem'
};

radioBtnOne.addEventListener('click', function () {
    let i = 0
    BTNactiveTwo.classList.remove('active');
    BTNactiveThree.classList.remove('active');
    BTNactiveFour.classList.remove('active');
    initMaginLeft(i);
    sliderLine.style.transition = '1s'
    text.classList.add('active');
    text.innerText = 'не мем'
    setTimeout(function () {
        text.classList.remove('active');
    }, 500);

    BTNactiveOne.classList.add('active');
});

radioBtnTwo.addEventListener('click', function () {
    i = 1
    BTNactiveOne.classList.remove('active');
    BTNactiveThree.classList.remove('active');
    BTNactiveFour.classList.remove('active');
    initMaginLeft(i);
    sliderLine.style.transition = '1s'
    text.classList.add('active');
    text.innerText = 'безопасный мем'
    setTimeout(function () {
        text.classList.remove('active');
    }, 500);
    BTNactiveTwo.classList.add('active');

});

radioBtnThree.addEventListener('click', function () {
    i = 2
    BTNactiveOne.classList.remove('active');
    BTNactiveTwo.classList.remove('active');
    BTNactiveFour.classList.remove('active');
    initMaginLeft(i);
    sliderLine.style.transition = '1s'
    text.classList.add('active');
    text.innerText = 'грустный мем'
    setTimeout(function () {
        text.classList.remove('active');
    }, 500);
    BTNactiveThree.classList.add('active');
});

radioBtnFour.addEventListener('click', function () {
    i = 3
    BTNactiveOne.classList.remove('active');
    BTNactiveTwo.classList.remove('active');
    BTNactiveThree.classList.remove('active');
    initMaginLeft(i);
    sliderLine.style.transition = '1s'
    text.classList.add('active');
    text.innerText = 'самый лучший мем - мой Жорик'
    setTimeout(function () {
        text.classList.remove('active');
    }, 500);
    BTNactiveFour.classList.add('active');
});

window.addEventListener('resize', function () {
    if (BTNactiveOne.classList.contains('active')) {
        sliderLine.style.marginLeft = '0'
    }
    else if (BTNactiveTwo.classList.contains('active')) {
        sliderLine.style.marginLeft = '-' + (width / 16) + 'rem'
    }
    else if (BTNactiveThree.classList.contains('active')) {
        sliderLine.style.marginLeft = '-' + (width / 16) * 2 + 'rem'
    }
    else if (BTNactiveFour.classList.contains('active')) {
        sliderLine.style.marginLeft = '-' + (width / 16) * 3 + 'rem'
    }

});



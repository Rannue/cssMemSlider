const imgs = document.querySelectorAll('.img');
const sliderLine = document.querySelector('.mem-slider');
// let sliderWindow = document.querySelector('.mem-img');
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

const radioOne = document.querySelector('#radio1')
const radioTwo = document.querySelector('#radio2')
const radioThree = document.querySelector('#radio3')
const radioFour = document.querySelector('#radio4')

const text = document.querySelector('p')

const radioBtnOne = document.querySelector('#label-radio1')
const radioBtnTwo = document.querySelector('#label-radio2')
const radioBtnThree = document.querySelector('#label-radio3')
const radioBtnFour = document.querySelector('#label-radio4')

function removeClass() {
    if (text.classList.contains('active')) {
        text.classList.remove('active');
    }
}

radioOne.addEventListener('click', function () {
    radioBtnTwo.classList.remove('active');
    radioBtnThree.classList.remove('active');
    radioBtnFour.classList.remove('active');

    sliderLine.style.marginLeft = '0'
    sliderLine.style.transition = '1s'
    text.classList.add('active');
    text.innerText = 'не мем'
    setTimeout(function () {
        text.classList.remove('active');
    }, 1000);

    radioBtnOne.classList.add('active');
});

radioTwo.addEventListener('click', function () {
    radioBtnOne.classList.remove('active');
    radioBtnThree.classList.remove('active');
    radioBtnFour.classList.remove('active');

    sliderLine.style.marginLeft = '-102%'
    sliderLine.style.transition = '1s'
    text.classList.add('active');
    text.innerText = 'мем любящий шрифты'
    setTimeout(function () {
        text.classList.remove('active');
    }, 1000);

    radioBtnTwo.classList.add('active');

});


radioThree.addEventListener('click', function () {
    radioBtnOne.classList.remove('active');
    radioBtnTwo.classList.remove('active');
    radioBtnFour.classList.remove('active');

    sliderLine.style.marginLeft = '-204%'
    sliderLine.style.transition = '1s'
    text.classList.add('active');
    text.innerText = 'грустный мем'
    setTimeout(function () {
        text.classList.remove('active');
    }, 1000);

    radioBtnThree.classList.add('active');
});

radioFour.addEventListener('click', function () {
    radioBtnOne.classList.remove('active');
    radioBtnTwo.classList.remove('active');
    radioBtnThree.classList.remove('active');

    sliderLine.style.marginLeft = '-306%'
    sliderLine.style.transition = '1s'
    text.classList.add('active');
    text.innerText = 'самый лучший мем - мой Жорик'
    setTimeout(function () {
        text.classList.remove('active');
    }, 1000);

    radioBtnFour.classList.add('active');
});








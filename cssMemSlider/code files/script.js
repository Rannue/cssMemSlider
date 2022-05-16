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

function removeClass() {
    if (text.classList.contains('active')) {
        text.classList.remove('active');
    }
}

radioOne.addEventListener('click', function () {
    sliderLine.style.marginLeft = '0'
    sliderLine.style.transition = '1s'
    text.classList.add('active');
    text.innerText = 'не мем'
    setTimeout(function () {
        text.classList.remove('active');
    }, 1000);
});

radioTwo.addEventListener('click', function () {
    sliderLine.style.marginLeft = '-102%'
    sliderLine.style.transition = '1s'
    text.classList.add('active');
    text.innerText = 'мем любящий шрифты'
    setTimeout(function () {
        text.classList.remove('active');
    }, 1000);
});


radioThree.addEventListener('click', function () {
    sliderLine.style.marginLeft = '-204%'
    sliderLine.style.transition = '1s'
    text.classList.add('active');
    text.innerText = 'грустный мем'
    setTimeout(function () {
        text.classList.remove('active');
    }, 1000);
});

radioFour.addEventListener('click', function () {
    sliderLine.style.marginLeft = '-306%'
    sliderLine.style.transition = '1s'
    text.classList.add('active');
    text.innerText = 'самый лучший мем - мой Жорик'
    setTimeout(function () {
        text.classList.remove('active');
    }, 1000);
});








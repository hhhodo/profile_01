'use strict';

const header = document.querySelector('.header');
const headerRect = header.getBoundingClientRect();
const headerHeight = headerRect.height;

document.addEventListener('scroll', function() {
    console.log(window.scrollY);
    if(window.scrollY > headerHeight) {
        header.classList.add('header-dark');
    } else {
        header.classList.remove('header-dark');
    }
})

const aboutBox = document.querySelector('.about_box');
const aboutBoxRect = aboutBox.getBoundingClientRect();
const aboutBoxHeight = aboutBoxRect.height;

document.addEventListener('scroll', function() {
        console.log(window.scrollY);
        if (window.scrollY > aboutBoxHeight) {
            aboutBox.classList.add('box-yellow');
        } else {
            aboutBox.classList.remove('box-yellow');
        }
    })

const footer_01 = document.querySelector('.footer_text_01');
const footer_02 = document.querySelector('.footer_text_02');




footer_01.addEventListener('click', function() {
    footer_02.style.color = "#f00";
})



//이미지클릭시 변경//
const testimonialImg = document.querySelector('.testimonial_img');
const testimonialBubble = document.querySelector('.testimonial_bubble');

testimonialImg.addEventListener('click', function() {
    testimonialBubble.style.color = '#f90';
})

//테스티모니얼 글자//
const testimonialTitle = document.querySelector('.testi_text');
const testimonialDescription = document.querySelector('.testi_text_02');

testimonialTitle.addEventListener('click', function() {
    testimonialDescription.style.color = '#f90';
})
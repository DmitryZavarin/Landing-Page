let counter = 0;
let len = $('.slider-item').length;
let isPositive = true;

$(".bullets-item").click(function(){
   
    let num = $(".bullets-item").index( $(this) );

    $(".bullets-item").removeClass('active');
    $(".bullets-item").eq(num).addClass('active');
    
    counter = num;

    let left = (counter * -100) + '%';
    $('.slider').css('left', left);
    
    id = setInterval(function(){
        $('.slider-item').eq(0).click();   
    }, 3000);
});

// $(window).scroll(function() {
//     let el = $('.pic-intro img');

// })

window.addEventListener('scroll', function() {

    let el = document.querySelectorAll('.left-animate');
    let windowHeight = window.innerHeight - 200;

    el.forEach(function(value, index) {
        let topDistance = value.getBoundingClientRect().top;
    
        if (topDistance < windowHeight) {
            value.classList.add('left-animate-active');
            // value.style.animationDelay = '0.3s';
        } 
    })     
})

window.addEventListener('scroll', function() {

    let el = document.querySelectorAll('.right-animate');
    let windowHeight = window.innerHeight - 200;

    el.forEach(function(value, index) {
        let topDistance = value.getBoundingClientRect().top;
    
        if (topDistance < windowHeight) {
            value.classList.add('right-animate-active');
            // value.style.animationDelay = '0.3s';
        } 
    })     
})

 window.addEventListener('DOMContentLoaded', function() {
  
    
         let el = document.querySelectorAll('.bottom-form-animate');
     let windowHeight = window.innerHeight - 200;

     el.forEach(function(value, index) {
         let topDistance = value.getBoundingClientRect().top;
    
         if (topDistance < windowHeight) {
                value.classList.add('bottom-form-animate-active');
              value.style.animationDelay = '0.3s';
                console.log(el);
        } 
     })     
    
    
 })

 window.addEventListener('DOMContentLoaded', function() {
  
    
    let el = document.querySelectorAll('.left-animate');
let windowHeight = window.innerHeight - 200;

el.forEach(function(value, index) {
    let topDistance = value.getBoundingClientRect().top;

    if (topDistance < windowHeight) {
           value.classList.add('left-animate-active');
         value.style.animationDelay = '0.3s';
           console.log(el);
   } 
})     


})

window.addEventListener('DOMContentLoaded', function() {
  
    
    let el = document.querySelectorAll('.top-animate');
let windowHeight = window.innerHeight - 200;

el.forEach(function(value, index) {
    let topDistance = value.getBoundingClientRect().top;

    if (topDistance < windowHeight) {
           value.classList.add('top-animate-active');
         value.style.animationDelay = '0.3s';
           console.log(el);
   } 
})     


})

window.addEventListener('scroll', function() {

    let el = document.querySelectorAll('.bottom-animate');
    let windowHeight = window.innerHeight - 200;

    el.forEach(function(value, index) {
        let topDistance = value.getBoundingClientRect().top;
    
        if (topDistance < windowHeight) {
            value.classList.add('bottom-animate-active');
            // value.style.animationDelay = '0.3s';
        } 
    })     
})

window.addEventListener('scroll', function() {

    let el = document.querySelectorAll('.bottom-col-animate');
    let windowHeight = window.innerHeight - 200;
    //let i = 0;

    el.forEach(function(value, index) {
        let topDistance = value.getBoundingClientRect().top;
        
        if (topDistance < windowHeight) {
            value.classList.add('bottom-col-animate-active');
            value.style.animationDelay = index/3 + 's';
            //i++;
            console.log(value.style.animationDelay);
        } 
    })     
})
const btnHamburger = document.getElementById('btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay')
const fade = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){
    if(header.classList.contains('open')){
        body.classList.remove('noscroll')
        header.classList.remove('open')
        fade.forEach(function(e){
            e.classList.remove('fade-in')
            e.classList.add('fade-out')
        })
       
    } else {
        header.classList.add('open')
        body.classList.add('noscroll')
        fade.forEach(function(e){
            e.classList.remove('fade-out')
            e.classList.add('fade-in')
        })
    }

})

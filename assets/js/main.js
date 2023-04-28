const hamburger = document.getElementById('toggle-button');
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const nav = document.getElementById('site-nav');
const contactBtn = document.getElementById('contact');
const modal = document.getElementById('simpleModal');
const closeBtn = document.getElementsByClassName('closeBtn')[0];






console.log(hamburger.addEventListener('click', () => {
    if(hamburger.classList.contains('open')){
        hamburger.classList.add('open');
        hamburger.removeAttribute('aria-expanded', false);
        hamburger.classList.remove('open');
        close.style.display = 'none';
        hamburger.classList.add('close');
    } else {
        hamburger.classList.remove('close');
        close.style.display = 'block';
        hamburger.setAttribute('aria-expanded', true);
        hamburger.classList.add('open');
    }
    
}));


contactBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);


window.addEventListener('click', clickOutSide);

function openModal(){
    modal.style.display = 'block';
}


function closeModal(){
    modal.style.display = 'none';
}

function clickOutSide(e){
    if(e.target === modal){
        modal.style.display = 'none';
    }
}

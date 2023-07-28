const hamburger = document.getElementById('toggle-button');
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const nav = document.getElementById('site-nav');
const contactBtn = document.getElementById('contact');
const modal = document.getElementById('simpleModal');
const closeBtn = document.getElementsByClassName('closeBtn')[0];
// The event listener is attached to the hambuger icon to initiate the toggle event.
hamburger.addEventListener('click', () => {
    if(hamburger.classList.contains('open')){
        // The hamburger is assigned a class to interact with the aria attribute set on the element.
        hamburger.classList.add('open');
        // aria-expanded is toggled to true when the class attribute of open is added.
        hamburger.removeAttribute('aria-expanded', false);
        hamburger.classList.remove('open');
        close.style.display = 'none';
        // aria-expanded is toggled back to false when the class of closed is added to the element.
        hamburger.classList.add('close');
    } else {
        hamburger.classList.remove('close');
        close.style.display = 'block';
        hamburger.setAttribute('aria-expanded', true);
        hamburger.classList.add('open');
    }
});

// EventListeners are assigned to each function to open and close the modal and when you click outside the modal it will register the event and call the function to close the modal.
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

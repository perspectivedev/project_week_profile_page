// This are all the variables that I set to preform the functionality for my site.
const body = document.getElementById('body');
const btnDarkMode = document.getElementById('btn-toggle-dark');
const hamburger = document.getElementById('toggle-button');
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const nav = document.getElementById('site-nav');
const contactBtn = document.getElementById('contact');
const modal = document.getElementById('simpleModal');
const closeBtn = document.getElementsByClassName('closeBtn')[0];
const btnPanel = document.querySelector('.btn-learn-panel');
const desc = document.querySelector('.project-desc');

// The event listener is attached to the hambuger icon to initiate the toggle event.
hamburger.addEventListener('click', () => {
    if(hamburger.classList.contains('open')){
        // The hamburger is assigned a class to interact with the aria attribute set on the element.
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

// function toggleLearnPanel(element){
//     let btnPanel = document.querySelector('.btn-learn-panel');
//     btnPanel ? btnPanel.classList.toggle('animateChevron') : btnPanel.classList.remove('animateChevron');
//     element = btnPanel;
//     element ? desc.classList.toggle('desc') : desc.classList.remove('desc');
// }

btnPanel.addEventListener('change', toggleChevron);

// EventListeners are assigned to each function to open and close the modal and when you click outside the modal it will register the event and call the function to close the modal.
contactBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

// btnPanel.addEventListener('click', () => {
//         btnPanel ? btnPanel.classList.toggle('animateChevron') : btnPanel.classList.remove('animateChevron');
// });

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

// This function toggles the light and dark mode functionality.
function toggleDarkLight(){
    const body = document.getElementById('body');
    const currentClass = body.className;
    body.className = currentClass == 'dark-mode' ?  'light-mode' : 'dark-mode';
}

function togglePageContentLightDark(){
    const body = document.getElementById('body');
    const currentClass = body.className;
    const newClass = currentClass == 'dark-mode' ?  'light-mode' : 'dark-mode';
    body.className = newClass;

    const endDate = new Date();
    endDate.setFullYear(endDate.getFullYear() + 10);
    document.cookie = 'theme' + (newClass == 'light-mode' ?  'light' : 'dark') + '; Expires=' + endDate + ';';
    console.log('Cookies are now:' + document.cookie);
}

function isDarkThemeSelected(){
    return document.cookie.match(/theme=dark/i) != null;
}

function setThemeFromCookie(){
    const body = document.getElementById('body');
    body.className = isDarkThemeSelected() ? 'dark-mode' : 'light-mode';
}

(function(){
    setThemeFromCookie()
})();

// ToggleLearnPanel
function toggleLearnPanel(element){
        let btnPanel = document.querySelector('.btn-learn-panel');
        btnPanel ? btnPanel.classList.toggle('animateChevron') : btnPanel.classList.remove('animateChevron');
        element = btnPanel;
    element ? desc.classList.toggle('desc') : desc.classList.remove('desc');
}

function toggleChevron(){
    let btnPanel = document.querySelector('.btn-learn-panel');
    btnPanel ? btnPanel.classList.toggle('animateChevron') : btnPanel.classList.remove('animateChevron');
    console.log(btnPanel);
}

function toggleLearnPanel(element) {
    element = element.parentElement.parentElement.lastElementChild;
    // element = element.lastElementChild;
    // element = document.querySelector('.learn-section-1').lastElementChild;
    console.log(element);
    element ? element.classList.toggle('desc') : element.classList.remove('desc');
    toggleChevron();
    console.log(element);
}


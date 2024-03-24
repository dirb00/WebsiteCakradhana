const hamburger = document.getElementById('hamburger');
const childList = hamburger.children;

const hiddenMenu = document.getElementById('hidden-menu');
const dimensions = hiddenMenu.getBoundingClientRect();

hamburger.addEventListener('click', () => {
    // Rotate first line down 45deg
    childList[0].classList.toggle('rotate-45');
    childList[0].classList.toggle('-translate-x-[1px]');
    childList[0].classList.toggle('-translate-y-[2px]');
    
    // Vanish second line
    childList[1].classList.toggle('opacity-0')
    
    // Rotate third line up 45deg
    childList[2].classList.toggle('-rotate-45');
    childList[2].classList.toggle('-translate-x-[1px]');
    childList[2].classList.toggle('translate-y-[1px]');

    setTimeout(() => {
        hiddenMenu.classList.toggle('hidden');
    }, 125);
})

let currentIndex = -1;
let elements = document.querySelectorAll('.sliderImg');
next();
function next(){
    currentIndex = currentIndex + 1;
    
    
    if(currentIndex >= elements.length) currentIndex = 0;

    let el = elements[currentIndex];

    let activeElement = document.querySelector('.sliderImg.active');

    if(activeElement){
        activeElement.classList.add('start-out');
        setTimeout(moveActive,500,activeElement)
    }
    el.classList.add('active');
    setTimeout(next,5000)
} 
function moveActive(activeElement){
    activeElement.classList.remove('active');
    activeElement.classList.remove('start-out');
}


function addClassToBody(class_name) {
    let element = document.querySelector('body');
    let classNames = element.className.split(" ");
    if (classNames.indexOf(class_name) == -1) {
        element.className += " " + class_name;
    }
}

function removeClassFromBody(class_name) {
    let element = document.querySelector('body');
    element.classList.remove(class_name);
}

let button = document.querySelector('.btn');
button.addEventListener('click', function() {
    addClassToBody('modal__open');
});


let closeButton = document.querySelector('.modal__button__header');
closeButton.addEventListener('click', function(){
    removeClassFromBody('modal__open');
});


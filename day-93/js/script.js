const body = document.querySelector('body');
const box = document.querySelector('.box');
const container = document.querySelector('.container');

// box.addEventListener('dragstart', (e) => {
//     console.log('Drag start');
// });

// box.addEventListener('dragend', (e) => {
//     console.log('Drag end');
// });

// box.addEventListener('drag', (e) => {
//     console.log('Drag');
// });

container.addEventListener('dragenter', (e) => {
    console.log('Drag enter');
});

container.addEventListener('dragover', (e) => {
    e.preventDefault();
    console.log('Drag over');
});

container.addEventListener('dragleave', (e) => {
    console.log('Drag leave');
});

container.addEventListener('drop', (e) => {
    e.stopPropagation();
    console.log('Drop');
    container.appendChild(box);
});

body.addEventListener('dragover', (e) => {
    e.preventDefault();
});

body.addEventListener('drop', (e) => {
    e.stopPropagation();
    body.insertAdjacentElement("afterbegin", box);
});
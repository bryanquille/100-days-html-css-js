const puzzle = document.querySelector('#puzzle');
const pieces = document.querySelector('#pieces');
const message = document.querySelector('#message');

const images = [
    'image-0', 'image-1', 'image-2',
    'image-3', 'image-4', 'image-5',
    'image-6', 'image-7', 'image-8'
];

let finished = images.length;

while (images.length) {
    const index = Math.floor(Math.random() * images.length);
    const div = document.createElement('div');
    div.className = 'piece';
    div.id = images[index];
    div.draggable = true;
    div.style.backgroundImage = `url("assets/images/${images[index]}.jpg")`;
    pieces.appendChild(div);
    images.splice(index, 1);
}

for (let i = 0; i < finished; i++) {
    const div = document.createElement('div');
    div.className = 'placeholder';
    div.dataset.id = i;
    puzzle.appendChild(div);
}

pieces.addEventListener('dragstart', e => {
    e.dataTransfer.setData('id', e.target.id);
});

puzzle.addEventListener('dragover', e => {
    e.preventDefault();
    e.target.classList.add('hover');
});

puzzle.addEventListener('dragleave', e => {
    e.target.classList.remove('hover');
});

puzzle.addEventListener('drop', e => {
    e.target.classList.remove('hover');

    const id = e.dataTransfer.getData('id');
    const number = id.split('-')[1];

    if (e.target.dataset.id === number) {
        e.target.appendChild(document.getElementById(id));

        finished--;

        if (finished === 0) {
            document.body.classList.add('win');
        }
    }
});

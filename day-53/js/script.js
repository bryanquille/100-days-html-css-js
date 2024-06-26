const container = document.querySelector('#container');
const btn = document.querySelector('#btn');
isExpand = false;

btn.addEventListener('click', () => {
    if (isExpand) {
        isExpand = false;
        container.style = 'width: 3rem;';
    } else {
        isExpand = true;
        container.style = 'width: 17rem;';
    }
});
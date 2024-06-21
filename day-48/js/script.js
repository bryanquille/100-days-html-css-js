const button = document.querySelector('#btn');

button.addEventListener('mousemove', (e) => {
    const x = e.pageX - button.offsetLeft;
    const y = e.pageY - button.offsetTop;

    button.style.setProperty('--x', x + 'px');
    button.style.setProperty('--y', y + 'px');
});
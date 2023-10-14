const container = document.querySelector('div');
const btn = document.querySelector('#one');
let side = 16;
let x = (400 / side) - 2;
let homePage = function () {
    for (let i = 0; i < side * side; i++) {
        const divb = document.createElement('div');
        divb.setAttribute('class', 'divb');
        divb.addEventListener('mouseover', () => {
            divb.style.backgroundColor = 'black';
        })
        divb.style.width = `${x}px`;
        divb.style.height = `${x}px`;
        container.appendChild(divb);
    }
};
homePage();
function getSqr () {
    const input = prompt('How many squares should there be on the side of the grid?', );
    side = input;
    x = (400 / side) - 2;
    for (let i = 0; i < side * side; i++) {
        const divb = document.createElement('div');
        divb.setAttribute('class', 'divb');
        divb.addEventListener('mouseover', () => {
            divb.style.backgroundColor = 'black';
        })
        divb.style.width = `${x}px`;
        divb.style.height = `${x}px`;
        container.appendChild(divb);
    }
}
btn.addEventListener('click', (event) => {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
    getSqr();
});

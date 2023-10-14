const container = document.querySelector('div');
const btn = document.querySelector('#one');
let side = 16;
function getSqr () {
    let x = (400 / side) - 2;
    for (let i = 0; i < side * side; i++) {
        const divb = document.createElement('div');
        divb.setAttribute('class', 'divb');
        divb.addEventListener('mouseover', () => {
            let color = () => {
                if (Math.random() < 0.25) return 'green';
                else if (Math.random() < 0.5) return 'yellow';
                else if (Math.random() < 0.75) return 'red';
                else return 'blue';
            }
            divb.style.backgroundColor = color();
        })
        divb.style.width = `${x}px`;
        divb.style.height = `${x}px`;
        container.appendChild(divb);
    }
}
getSqr();
btn.addEventListener('click', (event) => {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
    const input = prompt('How many squares should there be on the side of the grid?', );
    side = input;
    getSqr();
});

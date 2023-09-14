const decrementButton = document.getElementById('decrement') as HTMLButtonElement;
const incrementButton = document.getElementById('increment') as HTMLButtonElement;
const countElement = document.getElementById('count') as HTMLSpanElement;

let count = 0;

decrementButton.addEventListener('click', () => {
    count--;
    updateCount();
});

incrementButton.addEventListener('click', () => {
    count++;
    updateCount();
});

function updateCount() {
    countElement.innerText = count.toString();
}

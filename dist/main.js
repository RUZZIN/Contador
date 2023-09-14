var decrementButton = document.getElementById('decrement');
var incrementButton = document.getElementById('increment');
var countElement = document.getElementById('count');
var count = 0;
decrementButton.addEventListener('click', function () {
    count--;
    updateCount();
});
incrementButton.addEventListener('click', function () {
    count++;
    updateCount();
});
function updateCount() {
    countElement.innerText = count.toString();
}

let counter = 0;
let savedEntries = '';
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');

// fetches the saved entries if any exists
const previousSavedEntries = localStorage.getItem('savedEntries');
if (previousSavedEntries) {
  document.getElementById('displayEl').innerHTML = `Today Entries: ${previousSavedEntries}`;
  savedEntries = previousSavedEntries;
}
// Incremental function
function increment() {
  counter++;
  document.getElementById('counterElement').innerHTML = counter;
}
// Decremental function
function decrement() {
  if (counter > 0) {
    counter--;
    document.getElementById('counterElement').innerHTML = counter;
  }
}
// returns the value of the counter to zero anytime save button is clicked
function resetCounter() {
  counter = 0;
  document.getElementById('counterElement').innerHTML = counter;
}
// clears the saved entries in the browser's local storage
function resetEntries() {
  localStorage.clear('savedEntries');
  savedEntries = '';
  document.getElementById('displayEl').innerHTML = `Today Entries: ${savedEntries}`;
}
// Returns the value of counter
function save() {
  savedEntries = `${savedEntries} - ${counter}`;
  if (savedEntries.charAt(1) === '-') {
    savedEntries = savedEntries.slice(2);
  }
  document.getElementById('displayEl').innerHTML = `Today Entries: ${savedEntries}`;
  localStorage.setItem('savedEntries', `${savedEntries}`); // stores in the browser's local storage
  return resetCounter();
}
// greetings the user with the corresponding time of the day
function greeting() {
  const cTime = new Date();
  const hour = cTime.getHours();
  const userName = prompt('Please enter your name', 'Anonymous');
  const timeOfTheDay = hour < 12 ? 'Morning' : hour < 17 ? 'Afternoon' : 'Evening';
  document.getElementById('user-info').innerHTML = `Good${timeOfTheDay} ${userName}!`;
}
setInterval(() => {
  const timeOfTheDay = new Date();
  document.getElementById('clock').innerHTML = timeOfTheDay.toLocaleString();
}, 1000);
// EventListeners
btn1.addEventListener('click', increment);
btn2.addEventListener('click', decrement);
btn3.addEventListener('click', save);
btn4.addEventListener('click', resetEntries);
window.addEventListener('load', greeting);

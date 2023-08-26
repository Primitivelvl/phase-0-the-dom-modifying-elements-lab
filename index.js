// Your JavaScript code (index.js)
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
const yourName = 'John'; // Replace 'John' with your actual name
newHeader.textContent = `${yourName} is the champion`;

const mainElement = document.querySelector('main#main');
if (mainElement) {
  mainElement.replaceWith(newHeader);
}

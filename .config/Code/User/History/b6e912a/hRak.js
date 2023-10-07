const container = document.querySelector('#container');

const redPar = document.createElement('p');
redPar.classList.add('redPar');
redPar.textContent = "Hey, I'm red!";

container.appendChild(redPar);

const header = document.createElement('h3');
header.classList.add('blueh3');
header.textContent = "I'm a blue h3!";

container.appendChild(header);

const blackDiv = document.createElement('div');
blackDiv.classList.add('blackDiv');

const anotherH1 = document.createElement('h1');
anotherH1.textContent = "I'm in a div!";

const anotherP = document.createElement('p');
anotherP.textContent = "ME TOO!";

blackDiv.appendChild(anotherH1);
blackDiv.appendChild(anotherP);
container.appendChild(blackDiv);


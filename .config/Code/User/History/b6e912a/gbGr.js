const container = document.querySelector('#container');

const redPar = document.createElement('p');
redPar.classList.add('redPar');
redPar.textContent = "Hey, I'm red!";

container.appendChild(redPar);

const header = document.createElement('h3');
header.classList.add('blueh3');
header.textContent = "I'm a blue h3!";

container.appendChild(header);
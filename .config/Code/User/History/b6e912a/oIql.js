const container = document.querySelector('#container');

const redPar = document.createElement('p');
redPar.classList.add('redPar');
redPar.textContent = "Hey, I'm red!";

container.appendChild(redPar);
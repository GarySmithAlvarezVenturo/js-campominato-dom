// GENERARE UNA GRIGLIA
function createGrid(numCells, eleContainer) {
    eleContainer.innerHTML = "";
	for (let i = 1; i < numCells + 1; i++) {
		eleContainer.innerHTML += `<div class="cell">${i}</div>`;
	}
}


function getRandom (min, max, numbers) {
	while (numbers.length < 16) {
  	let randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
  	if (!numbers.includes(randomNumber)) {
    numbers.push(randomNumber);
  }
}
console.log(numbers);
}


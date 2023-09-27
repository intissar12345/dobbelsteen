console.log("main.js loaded...");

// Generates a random integer number between min and inclusive max
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// Get button from html
const btn = document.querySelector(".btn-dice");
// Get image element for the dice from html
const diceImg = document.querySelector(".dice-img");

// Add click event handler
btn.addEventListener("click", function () {
	const imgNumber = getRandomIntInclusive(1, 6);

	// Set img's src attribute to the right dice image
	diceImg.src = "./images/dice-" + imgNumber + ".png";
});

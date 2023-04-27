let computerNumber;
let userNumbers = [];
let attempts = 0;
let maxGuesses = 10;

function reload() {
  window.location.reload(true)
}

function init() {
  computerNumber = Math.floor(Math.random() * 101);
}

function compareNumbers() {
  const userNumber = Number(document.getElementById("inputBox").value);
  userNumbers.push(` ${userNumber}`);
  document.getElementById("guesses").innerHTML = userNumbers;

  if (attempts < maxGuesses) {
    if (userNumber < computerNumber && userNumber <= 100) {
      document.getElementById("textOutput").innerHTML = "Too low";
      document.getElementById("inputBox").value = "";
      attempts++;
      document.getElementById("attempts").innerHTML = attempts;
    } else if (userNumber > computerNumber && userNumber <= 100) {
      document.getElementById("textOutput").innerHTML = "Too high";
      document.getElementById("inputBox").value = "";
      attempts++;
      document.getElementById("attempts").innerHTML = attempts;
    } else if (userNumber === computerNumber && userNumber <= 100) {
      document.getElementById("textOutput").innerHTML =
        "Congratulations you right!";
      attempts++;
      document.getElementById("attempts").innerHTML = attempts;
    } else {
      document.getElementById("textOutput").innerHTML = "Invalid number! You can write only until 100.";
    }
  } else {
    document.getElementById(
      "textOutput"
    ).innerHTML = `You lose! The number was ${computerNumber}`;
  }
}

let remaining = document.getElementById("remaining-chars");
let txtBox = document.getElementById("product-name");
let possibleLength = txtBox.maxLength;

function updateRemainingChars(event) {
  let enteredTxt = event.target.value;
  let enteredTxtLength = enteredTxt.length;
  let remainingCharsCharacters = possibleLength - enteredTxtLength;
  remaining.textContent = remainingCharsCharacters;

  if (remainingCharsCharacters === 0) {
    txtBox.classList.add("error");
    remaining.classList.add("error");
  } else if (remainingCharsCharacters < 10) {
    txtBox.classList.remove("error");
    remaining.classList.remove("error");
    txtBox.classList.add("warning");
    remaining.classList.add("warning");
  } else {
    txtBox.classList.remove("warning");
    remaining.classList.remove("warning");
  }
}

txtBox.addEventListener("input", updateRemainingChars);

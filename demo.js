let remaining = document.getElementById('remaining-chars');
let txtBox = document.getElementById('product-name');
let possibleLength = txtBox.maxLength

function updateRemainingChars(event) {
    let enteredTxt = event.target.value;
    let enteredTxtLength = enteredTxt.length;
    
    let remainingCharsCharacters = possibleLength - enteredTxtLength;
    return remaining.textContent = remainingCharsCharacters;
}

txtBox.addEventListener('input', updateRemainingChars);
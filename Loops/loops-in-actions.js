// 계산 버튼 기능 추가
let sumBtn = document.querySelector("#calculator button");

function sum() {
  const numInput = document.getElementById("user-number");
  const num = numInput.value;

  let result = 0;
  for (let i = 0; i <= num; i++) {
    result = result + i;
  }

  const resultOfSum = document.querySelector("#calculated-sum");
  resultOfSum.textContent = result;
  resultOfSum.style.display = "block";
}

sumBtn.addEventListener("click", sum);

// highlight 버튼 기능 추가
const highlightBtn = document.querySelector("#highlight-links button");

function highlight() {
  const anchors = document.querySelectorAll("#highlight-links a");

  for (const anchor of anchors) {
    anchor.classList.add("highlight");
  }
}

highlightBtn.addEventListener("click", highlight);

// display user data
const userData = {
  firstName: "Eunjeong",
  lastName: "Kim",
  age: 31,
};

const userDataBtn = document.querySelector("#user-data button");

function addUserData() {
  const ulElement = document.getElementById("output-user-data");
  ulElement.innerHTML = "";

  for (const key in userData) {
    const listItem = document.createElement("li");
    const outputTxt = key.toUpperCase() + ": " + userData[key];
    listItem.textContent = outputTxt;
    ulElement.append(listItem);
  }
}

userDataBtn.addEventListener("click", addUserData);


// 주사위로 특정 숫자를 얻을때 까지의 결과 반환
const diceBtn = document.querySelector("#statistics button");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function derivedNumberOfDiceRoll() {
  const targetNumber = document.getElementById("user-target-number");
  const ulElement = document.getElementById("dice-rolls");

  const enteredNumber = targetNumber.value; //string
  ulElement.innerHTML = "";

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();
    // if(rolledNumber == enteredNumber){
    //     hasRolledTargetNumber = true;
    // }
    numberOfRolls++;
    const newListItem = document.createElement("li");
    const outputTxt = "Roll " + numberOfRolls + ": " + rolledNumber;
    newListItem.textContent = outputTxt;
    ulElement.append(newListItem);

    hasRolledTargetNumber = rolledNumber == enteredNumber; //재할당
  }

  const totalRolls = document.getElementById("output-total-rolls");
  const outputTargetNumber = document.getElementById("output-target-number");

  totalRolls.textContent = numberOfRolls;
  outputTargetNumber.textContent = enteredNumber;
}

diceBtn.addEventListener("click", derivedNumberOfDiceRoll);

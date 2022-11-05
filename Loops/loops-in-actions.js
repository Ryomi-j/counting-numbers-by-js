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
  ulElement.innerHTML = ""; // 기존 항목 제거

  for (const key in userData) {
    const listItem = document.createElement("li");
    const outputTxt = key.toUpperCase() + ": " + userData[key];
    listItem.textContent = outputTxt;
    ulElement.append(listItem);
  }
}

userDataBtn.addEventListener("click", addUserData);

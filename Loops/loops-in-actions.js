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

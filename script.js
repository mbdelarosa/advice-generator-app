function generateAdvice() {
  const adviceIdField = document.getElementById("js-advice-id");
  const adviceTextField = document.getElementById("js-advice-text");
  const fetchAdvice = fetch('https://api.adviceslip.com/advice');

  fetchAdvice
    .then((response) => response.json())
    .then((advice) => {
      adviceIdField.textContent = advice["slip"]["id"];
      adviceTextField.textContent = advice["slip"]["advice"];
    });
}

const generateAdviceBtn = document.getElementById("js-generate-advice-btn");
generateAdviceBtn.addEventListener("click", generateAdvice);
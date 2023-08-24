async function fetchAdvice() {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    if (response.ok) {
      const advice = await response.json();
      return advice;
    }
  } catch (error) {
    console.log("Error fetching new advice", error);
    return null;
  }
}

function generateAdvice() {
  const adviceIdField = document.getElementById("js-advice-id");
  const adviceTextField = document.getElementById("js-advice-text");

  fetchAdvice()
    .then((advice) => {
      if (advice != null) {
        adviceIdField.textContent = advice["slip"]["id"];
        adviceTextField.textContent = advice["slip"]["advice"];
      }
    });
}

const generateAdviceBtn = document.getElementById("js-generate-advice-btn");
generateAdviceBtn.addEventListener("click", generateAdvice);
const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".calculator button");

    let currentInput = "";

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "=") {

            try {
            currentInput = eval(currentInput).toString();
          } catch {
            currentInput = "Error";
          }
          display.value = currentInput;
        } else if (value === "AC") {

            currentInput = "";
          display.value = "";
        } else {

            currentInput += value;
          display.value = currentInput;
        }
      });
    });
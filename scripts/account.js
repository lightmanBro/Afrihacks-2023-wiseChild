
function submitForm() {
    // Get all password input elements
    const passwordInputs = document.querySelectorAll(".password-input");
  
    // Create an empty array to store the values
    const enteredPassword = [];
  
    // Loop through each input element and extract the value
    passwordInputs.forEach(input => enteredPassword.push(input.value));
  
    // Combine the values into a single string
    const finalPassword = enteredPassword.join("");
  
    // Submit the form with the password value
    const form = document.querySelector("form");
    form.submit();
  }
  
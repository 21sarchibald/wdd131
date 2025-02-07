function validateNumber(number) {
    return number == "1234123412341234";
}

function displayErrorMessage(message) {
    document.querySelector("#errorMessage").textContent = message;
}

function submitHandler(event) {
    event.preventDefault();

    let errorMessage = "";
    displayErrorMessage(errorMessage);

    console.log(Number(this.cardNumber.value));

    if (isNaN(this.cardNumber.value)) {
        errorMessage = "Entered card number is not valid.";
    }

    else if (!validateNumber(this.cardNumber.value)) {
        errorMessage = "Entered card number is not valid.";
    }

    if (errorMessage != "") {
        displayErrorMessage(errorMessage);
        return false;
    }
    return true;
}

const form = document.querySelector("#cardForm");

form.addEventListener("submit", submitHandler);
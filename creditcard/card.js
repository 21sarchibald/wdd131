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

    const year = parseInt(this.expirationYear.value) + 2000;
    const month = parseInt(this.expirationMonth.value) - 1;
    let expirationDate = new Date(year, month);
    let currentDate = new Date();

    if (isNaN(this.cardNumber.value)) {
        errorMessage = "Entered card number is not valid.";
    }

    else if (!validateNumber(this.cardNumber.value)) {
        errorMessage = "Entered card number is not valid.";
    }

    else if (expirationDate <= currentDate) {
        errorMessage = "Card is expired.";
    }

    if (errorMessage != "") {
        displayErrorMessage(errorMessage);
        return false;
    }

    return true;
}

const form = document.querySelector("#cardForm");

form.addEventListener("submit", submitHandler);
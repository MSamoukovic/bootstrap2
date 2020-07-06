function checkCreditCardNumber() {
    var creditCardNumber = document.getElementById("creditCardNumber");
    // var inputLength = creditCardNumber.value.length;
    // if (inputLength == 4 || inputLength == 9 || inputLength == 14)
    // {
    //     creditCardNumber.value += " ";
    // }
    if (!creditCardNumber.checkValidity()) {
        document.getElementById("creditCardMessage").innerHTML = "Please enter the number of credit card";
        return false;
    }
    else if (isNaN(creditCardNumber.value)) {
        document.getElementById("creditCardMessage").innerHTML = "Must input numbers";
    }
    else if (creditCardNumber.value.length < 16 || creditCardNumber.value.length > 16) {
        document.getElementById("creditCardMessage").innerHTML = "Please enter exactly 16 numbers";
    }
    else {
        document.getElementById("creditCardMessage").innerHTML = "";
        return true;
    }
}

function checkDate() {
    var date = document.getElementById("date");

    if (!date.checkValidity()) {
        document.getElementById("dateMessage").innerHTML = "Enter the date";
        return false;
    }
    else {
        document.getElementById("dateMessage").innerHTML = "";
        return true;
    }
}

function checkCVV() {
    var cvv = document.getElementById("cvv");

    if (!cvv.checkValidity()) {
        document.getElementById("cvvMessage").innerHTML = "Enter the CVV";
        return false;
    }
    else if (isNaN(cvv.value)) {
        document.getElementById("cvvMessage").innerHTML = "Input numbers";
    }
    else if (cvv.value.length < 3 || cvv.value.length > 3) {
        document.getElementById("cvvMessage").innerHTML = "Please enter exactly 3 numbers";
    }
    else {
        document.getElementById("cvvMessage").innerHTML = "";
        return true;
    }
}

function checkCardHolderName() {
    var cardHolderName = document.getElementById("cardHolderName");

    if (!cardHolderName.checkValidity()) {
        document.getElementById("cardHolderNameMessage").innerHTML = "Please enter the card holder name";
        return false;
    }
    else {
        document.getElementById("cardHolderNameMessage").innerHTML = "";
        return true;
    }
}

function areAllPaymentOptionsValid() {
    var allInputs = checkCreditCardNumber() == true && checkDate() == true && checkCVV() == true && checkCardHolderName() == true;
    return allInputs;
}

function checkAllPaymentFields() {
    var fields = checkCreditCardNumber() == true || checkDate() == true || checkCVV() == true || checkCardHolderName() == true;
    return fields;
}

function arePaymentFieldsDisabled() {
    var creditCardNumber = document.getElementById("creditCardNumber");
    if (creditCardNumber.disabled == true)
        return true;
    else
        return false;
}
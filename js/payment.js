function PayNow() {
	if (checkAllPaymentFields()) {
		if (areAllPaymentOptionsValid()) {
			var creditCardNumber = document.getElementById("creditCardNumber")
			var date = document.getElementById("date").value;
			var cvv = document.getElementById("cvv").value;
			var cardHolderName = document.getElementById("cardHolderName").value;

			var elem = document.getElementsByName('radioBtn');

			for (i = 0; i < elem.length; i++) {
				if (elem[i].checked) {
					var type = elem[i].value;
					if (type == "creditCard") {
						var card = {
							paymentType: "creditCard",
							cvv: cvv,
							cardnumber: creditCardNumber,
							mmyy: date,
							name: cardHolderName
						};

						var creditCardPayment = JSON.stringify(card);
						console.log(creditCardPayment);
					}
					else {
						console.log("payPal");
					}
				}
			}
		}
	}
}
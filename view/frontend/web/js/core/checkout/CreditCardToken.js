var CreditCardToken = function (formObject) {
    this.formObject = formObject
};

CreditCardToken.prototype.getDataToGenerateToken = function () {
    return {
        type: "card",
        card : {
            holder_name: this.formObject.creditCardHolderName.val(),
            number: this.formObject.creditCardNumber.val(),
            exp_month: this.formObject.creditCardExpMonth.val(),
            exp_year: this.formObject.creditCardExpYear.val(),
            cvv: this.formObject.creditCardCvv.val()
        }
    };
}

CreditCardToken.prototype.getToken = function (pkKey) {
    var data = this.getDataToGenerateToken();
    return jQuery.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        url: 'https://api.mundipagg.com/core/v1/tokens?appId=' + pkKey,
        async: false,
        cache: true,
        data: JSON.stringify(data)
    });
}
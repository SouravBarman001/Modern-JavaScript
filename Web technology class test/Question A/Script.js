function convertCurrency() {
    let amount = parseInt(document.getElementById("amountInput").value);

    var usdRadio = document.getElementById("usd");
    var rupeeRadio = document.getElementById("rupee");
    var yenRadio = document.getElementById("yen");
    var euroRadio = document.getElementById("euro");

    if (usdRadio.checked) {
        alert((amount / 92).toFixed(2) +" Dollar");
    } else if (rupeeRadio.checked) {
        alert((amount * 0.84).toFixed(2) +" Rupee");
    } else if (yenRadio.checked) {
        alert((amount * 1.44).toFixed(2) +" Yen");
    } else if (euroRadio.checked) {
        alert((amount / 96.48).toFixed(2) +" Euro");
    }
}
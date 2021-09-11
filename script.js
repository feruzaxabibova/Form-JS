var firstName = document.querySelector(".name-js");
var money = document.querySelector(".money");
var send = document.querySelector(".send");
var resultText = document.querySelector(".result-js");
var minAmount = 5000000;


send.onclick = function() {
    var money = document.querySelector(".money").value;
     
    if (money <= minAmount) {
        resultText.style.backgroundColor = 'green';
        document.querySelector(".result-js").innerHTML = "The survey was accepted!";
    } else {
        resultText.style.backgroundColor = 'red';
        document.querySelector(".result-js").innerHTML = `Sorry our company to you ${minAmount}$ can not pay more than!`;
    }
}
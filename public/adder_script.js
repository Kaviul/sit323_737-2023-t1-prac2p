function add() {
    var num1 = parseInt(document.getElementById("firstNumber").value);
    var num2 = parseInt(document.getElementById("secondNumber").value);
    var sum = num1 + num2;
    document.getElementById("answer").value = sum;
}

function reset() {
    var num1 = parseInt(document.getElementById("firstNumber"). value = 0);
    var num2 = parseInt(document.getElementById("secondNumber").value = 0);
    var sum = parseInt(document.getElementById("answer").value = 0)
}

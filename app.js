

var result = document.getElementById("result")

const calculator = () => {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var operators = document.getElementById("signs").value;
    var result = document.getElementById("result");

    (operators === "+") ? result.innerHTML = num1 + num2
        : (operators === "-") ? result.innerHTML = num1 - num2
            : (operators === "*") ? result.innerHTML = num1 * num2
                : (operators === "/") ? result.innerHTML = num1 / num2 : alert("enter valid operator");

}
function add(number1, number2) {
    return number1 + number2;
}
function subtract(number1, number2) {
    return number1 - number2;
}
function multiply(number1, number2) {
    return number1 * number2;
}
function divide(number1, number2) {
    if (number2 === 0 ) {
    return 'error';
    }
    return number1 / number2
}
document.getElementById('add').addEventListener('click', function() {
    const number1 = Parsefloat(getElementById('number1').value) || 0;
    const number2 = parseFloat(getElementById('number2').value) || 0;
    const result = add(number1,number2);
    document.getElementById('result').textContent = result;
})

let input_ahrenheit = document.querySelector('#input_ahrenheit');
let calculate = document.querySelector('#calculate');
let celsius_output = document.querySelector('#celsius_output');
calculate = addEventListener('click', function () {
    celsius_output.innerHTML = (input_ahrenheit.value - 32) / (9 / 5) + '°' + ' Celsius '
    if (input_ahrenheit.value <= 0 || isNaN(input_ahrenheit.value)) {
        celsius_output.innerHTML = 'Please Input Valid Fahrenheit !'
    }
})

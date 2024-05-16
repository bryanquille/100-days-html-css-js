const celcius = document.querySelector('#celcius')
const fahrenheit = document.querySelector('#fahrenheit')
const kelvin = document.querySelector('#kelvin')

const convertFromCelcius = (value, element1, element2) => {
    // Fahrenheit
    element1.value = ((1.8 * Number(value)) + 32).toFixed(2)
    // Kelvin
    element2.value = (Number(value) + 273.15).toFixed(2)
}

const convertFromFahrenheit = (value, element1, element2) => {
    // Celcius
    element1.value = ((Number(value) - 32) * (5 / 9)).toFixed(2)
    // Kelvin
    element2.value = (((Number(value) - 32) * (5 / 9)) + 273.15).toFixed(2)
}

const convertFromKelvin = (value, element1, element2) => {
    // Celcius
    element1.value = (Number(value) - 273.15).toFixed(2)
    // Fahrenheit
    element2.value = ((1.8 * (Number(value) - 273.15)) + 32).toFixed(2)
}

celcius.addEventListener('change', () => {
    const value = celcius.value
    convertFromCelcius(value, fahrenheit, kelvin)
})

fahrenheit.addEventListener('change', () => {
    const value = fahrenheit.value
    convertFromFahrenheit(value, celcius, kelvin)
})

kelvin.addEventListener('change', () => {
    const value = kelvin.value
    convertFromKelvin(value,celcius, fahrenheit)
})
document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const convertButton = document.getElementById("convert");
    const resultParagraph = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;

        if (unit === "celsius") {
            const fahrenheit = (temperature * 9 / 5) + 32;
            resultParagraph.textContent = `${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F`;
        } else {
            const celsius = (temperature - 32) * 5 / 9;
            resultParagraph.textContent = `${temperature}°F is equal to ${celsius.toFixed(2)}°C`;
        }
    });
});
 
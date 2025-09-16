const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const output = document.getElementById("calculated-output"); 

function calculateBmi(height, weight) {
    if (!height || !weight) return "";
    return (weight / (height ** 2)).toFixed(2);
}

document.querySelector('.calculate-your-bmi').addEventListener('click', function(event) {
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
    const result = calculateBmi(height, weight);
    output.textContent = result ? `Your BMI is ${result}` : "Please enter valid values.";
});
// Get references to the height, weight input fields and the output area
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const output = document.getElementById("calculated-output");

// Set default units for height and weight
let heightUnit = 'm';
let weightUnit = 'kg';

// Get references to the dropdown buttons and their option containers for height and weight units
const revealHeightBtn = document.getElementById('reveal-height');
const optionsHeight = document.getElementById('options-height');
const revealWeightBtn = document.getElementById('reveal-weight');
const optionsWeight = document.getElementById('options-weight');

// When the height unit button is clicked, show or hide the height unit options
revealHeightBtn.addEventListener('click', () => {
    revealHeightBtn.style.display = 'none';
    optionsHeight.style.display = 'block';
});

// When a height unit option is clicked, set the selected unit and update the button text
optionsHeight.querySelectorAll('p').forEach(option => {
    option.addEventListener('click', () => {
        heightUnit = option.getAttribute('data-unit'); // Get the unit (e.g., 'cm', 'm')
        revealHeightBtn.textContent = option.textContent; // Show selected unit on button
        optionsHeight.style.display = 'none'; // Hide options after selection
        revealHeightBtn.style.display = 'inline-block'; // Show the button again
    });
});

// When the weight unit button is clicked, show or hide the weight unit options
revealWeightBtn.addEventListener('click', () => {
    revealWeightBtn.style.display = 'none';
    optionsWeight.style.display = 'block';
});

// When a weight unit option is clicked, set the selected unit and update the button text
optionsWeight.querySelectorAll('p').forEach(option => {
    option.addEventListener('click', () => {
        weightUnit = option.getAttribute('data-unit'); // Get the unit (e.g., 'kg', 'lbs')
        revealWeightBtn.textContent = option.textContent; // Show selected unit on button
        optionsWeight.style.display = 'none'; // Hide options after selection
        revealWeightBtn.style.display = 'inline-block'; // Show the button again
    });
});

// Convert height to meters based on the selected unit
function convertHeight(value, unit) {
    switch (unit) {
        case 'cm': return value / 100; // centimeters to meters
        case 'in': return value * 0.0254; // inches to meters
        case 'ft': return value * 0.3048; // feet to meters
        default: return value; // already in meters
    }
}

// Convert weight to kilograms based on the selected unit
function convertWeight(value, unit) {
    switch (unit) {
        case 'lbs': return value * 0.453592; // pounds to kilograms
        default: return value; // already in kilograms
    }
}

// Calculate BMI using the formula: weight (kg) / (height (m) * height (m))
function calculateBmi(height, weight) {
    if (!height || !weight) return ""; // If inputs are missing, return empty string
    return (weight / (height ** 2)).toFixed(2); // Round to 2 decimal places
}

// When the "Calculate your BMI" button is clicked, get the input values, convert units, calculate BMI, and display the result
document.querySelector('.calculate-your-bmi').addEventListener('click', function () {
    let height = parseFloat(heightInput.value); // Get height as a number
    let weight = parseFloat(weightInput.value); // Get weight as a number

    height = convertHeight(height, heightUnit); // Convert height to meters
    weight = convertWeight(weight, weightUnit); // Convert weight to kilograms

    const result = calculateBmi(height, weight); // Calculate BMI
    output.textContent = result ? `Your BMI is ${result}` : "Invalid input."; // Show result or error
});

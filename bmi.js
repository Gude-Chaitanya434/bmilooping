let cont= true;

while (cont) {
    let weight = parseFloat(prompt("Enter your weight in kilograms:"));
    let height = parseFloat(prompt("Enter your height in meters:"));
    
    let bmi = weight / (height * height);
    console.log("Your BMI is: " + bmi.toFixed(2));

    let response = prompt("Do you wish to continue? (yes/no)").toLowerCase();
    if (response !== 'yes') {
        cont = false;
    }
}

console.log("Thank you for using the BMI calculator!");

function checkBMI() {
    // Input
    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);
    let result, bmi;

    // Process
    bmi = weight / (height ^ 2);
    if (bmi < 18.5) result = "Underweight";
    else if (bmi < 25) result = "Normal";
    else if (bmi < 30) result = "Overweight";
    else result = "Obese";

    // Output
    // alert(result);
    document.getElementById("result").innerHTML = result;
}
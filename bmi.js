function calculateBMI(){

  let weight = document.getElementById("weight").value;
  let feet = document.getElementById("feet").value;
  let inches = document.getElementById("inches").value;

  if(!weight || !feet){
    alert("Please fill all fields");
    return;
  }

  // total inches
  let totalHeight = (feet * 12) + Number(inches);

  // BMI formula
  let bmi = (weight * 703) / (totalHeight * totalHeight);

  bmi = bmi.toFixed(2);

  let status = "";

  if(bmi < 18.5){
    status = "Underweight";
  }
  else if(bmi < 25){
    status = "Normal";
  }
  else if(bmi < 30){
    status = "Overweight";
  }
  else{
    status = "Obese";
  }

  document.getElementById("bmiResult").innerText =
    "BMI: " + bmi;

  document.getElementById("status").innerText =
    "Status: " + status;

}
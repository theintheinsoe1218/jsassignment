function calculateTip(){

  let bill = document.getElementById("bill").value;
  let tip = document.getElementById("tip").value;
  let people = document.getElementById("people").value;

  if(!bill || !tip || !people){
    alert("Please fill all fields");
    return;
  }

  bill = Number(bill);
  tip = Number(tip);
  people = Number(people);

  // tip calculation
  let tipAmount = (bill * tip) / 100;

  let total = bill + tipAmount;

  let perPerson = total / people;

  document.getElementById("tipAmount").innerText =
    "Tip: $" + tipAmount.toFixed(2);

  document.getElementById("totalAmount").innerText =
    "Total: $" + total.toFixed(2);

  document.getElementById("perPerson").innerText =
    "Per Person: $" + perPerson.toFixed(2);

}
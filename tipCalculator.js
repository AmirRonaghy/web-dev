

function calculateTip() {
  var billAmount = document.getElementById("bill").value;
  var rating = document.getElementById("serviceQuality").value;
  var numPeople = document.getElementById("people").value;
  var perPersonTip = (billAmount * rating) / numPeople;
  var perPersonTip = perPersonTip.toFixed(2);

  if (billAmount == "") {
    alert("Please enter the total bill amount");
  }
  else if (rating == 0) {
    alert("Please rate the service");
  }
  else if (numPeople == "") {
    alert("Please enter the number of people");
  }
  else {
    document.getElementById("tipAmount").innerHTML="Tip Amount: $"+perPersonTip+" each";
  }

  //alert("Bill amount: "+billAmount+" Rating: "+rating+" People: "+numPeople);
}

var x = 0;
var colors = ["red","purple","orange","pink","blue","green","yellow","aqua","silver","gold"]

function addOne() {
  x++;
  document.getElementById("num").innerHTML="Count: "+x;
  document.body.style.backgroundColor=colors[Math.abs(x) % 10];
}

function subtractOne() {
  x--;
  document.getElementById("num").innerHTML="Count: "+x;
  document.body.style.backgroundColor=colors[Math.abs(x) % 10];
}

var hour = new Date().getHours();

if (hour < 12) {
  document.getElementById("greeting").innerHTML="Good morning";
  document.getElementById("image").src="morning.jpg";
  document.body.style.backgroundColor="#ffff99";
}
else if (hour >= 18) {
  document.getElementById("greeting").innerHTML="Good evening";
  document.getElementById("image").src="night.jpg";
  document.body.style.backgroundColor="MidnightBlue";
  document.body.style.color="White";
}
else {
  document.getElementById("greeting").innerHTML="Good afternoon";
  document.getElementById("image").src="afternoon.jpg";
  document.body.style.backgroundColor="SkyBlue";
}

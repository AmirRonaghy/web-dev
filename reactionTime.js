/*
Part 1:
1) Show box on screen
2) When box is clicked, it disappears
3) Box reappears after 3 seconds
4) Track time between box appearing and being clicked
5) Display time

Part 2:
1) Random location
2) Random shape
3) Random color

*/

window.onload = appear();

//Need to define these variables before functions for them to work
var clicked;
var start;

function disappear() {
  document.getElementById('box').style.display='none';
  clicked = Date.now();
  var reaction = (clicked-start)/1000;
  document.getElementById('time').innerHTML="Your reaction time is: "+reaction+" seconds";
  var randomDelay = ((Math.random()*2)+3)*1000;
  setTimeout(appear,randomDelay);
}

function appear() {
  var randomTop = Math.random()*400;
  var randomLeft = Math.random()*400;
  var randomHeight = (Math.random()*200)+100;
  var randomWidth = (Math.random()*200)+100;
  var randomRadius = Math.random();
  var randomColor = "#"+((1<<24)*Math.random()|0).toString(16);

  if (randomRadius >= 0.5)  {
    randomRadius*=100;
  }
  else {
    randomRadius = 0;
  }
  
  document.getElementById('box').style.display='block';
  document.getElementById('box').style.top=randomTop+'px';
  document.getElementById('box').style.left=randomLeft+'px';
  document.getElementById('box').style.height=randomHeight+'px';
  document.getElementById('box').style.width=randomWidth+'px';
  document.getElementById('box').style.borderRadius=randomRadius+'px';
  document.getElementById('box').style.backgroundColor=randomColor;
  start = Date.now();
}

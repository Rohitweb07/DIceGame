
var randomNumebr1=Math.floor(Math.random()*6)+1;

var randomDiceImage="dice" + randomNumebr1 + ".png";

var randomImageSource="images/" + randomDiceImage;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomNumebr2=Math.floor(Math.random()*6)+1;

var randomDiceImage="dice" + randomNumebr2 + ".png";

var randomImageSource="images/" + randomDiceImage;

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource);

if(randomNumebr1>randomNumebr2)
{

  document.querySelector("h1").innerHTML="Player1 Win the game😍";
}
else if (randomNumebr2>randomNumebr1) {
  document.querySelector("h1").innerHTML="Player2 Win the game😄";
}
else{
  document.querySelector("h1").innerHTML="Match Draw";
}

function roll(){
  var roll1 = (Math.floor(Math.random()*6))+1;
  if(roll1 == 6){
    console.log("6");
    document.querySelector(".dice .img1").setAttribute("src","images/dice6.png");
  }else if(roll1 == 5){
    console.log("5");
    document.querySelector(".dice .img1").setAttribute("src","images/dice5.png");
  }else if(roll1 == 4){
    console.log("4");
    document.querySelector(".dice .img1").setAttribute("src","images/dice4.png");
  }else if(roll1 == 3){
    console.log("3");
    document.querySelector(".dice .img1").setAttribute("src","images/dice3.png");
  }else if(roll1 == 2){
    console.log("2");
    document.querySelector(".dice .img1").setAttribute("src","images/dice2.png");
  }else{
    console.log("1");
    document.querySelector(".dice .img1").setAttribute("src","images/dice1.png");
  }
  var roll2 = (Math.floor(Math.random()*6))+1;
  if(roll2 == 6){
    console.log("6");
    document.querySelector(".dice .img2").setAttribute("src","images/dice6.png");
  }else if(roll2 == 5){
    console.log("5");
    document.querySelector(".dice .img2").setAttribute("src","images/dice5.png");
  }else if(roll2 == 4){
    console.log("4");
    document.querySelector(".dice .img2").setAttribute("src","images/dice4.png");
  }else if(roll2 == 3){
    console.log("3");
    document.querySelector(".dice .img2").setAttribute("src","images/dice3.png");
  }else if(roll2 == 2){
    console.log("2");
    document.querySelector(".dice .img2").setAttribute("src","images/dice2.png");
  }else{
    console.log("1");
    document.querySelector(".dice .img2").setAttribute("src","images/dice1.png");
  }
  if(roll1 > roll2){
    console.log("Player 1 Win!")
    document.querySelector(".container h1").innerHTML = "🚩 Player 1 Win! ";
  }else if(roll2 > roll1){
    console.log("Player 2 Win!")
    document.querySelector(".container h1").innerHTML = " Player 2 Win! 🚩";
  }else{
    console.log("Draw!")
    document.querySelector(".container h1").innerHTML = "🏳️ Draw! 🏳️";
  }
}

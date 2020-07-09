let q1 = document.getElementById("container1");
let q2 = document.getElementById("container2");
let q3 = document.getElementById("container3");
let q4 = document.getElementById("container4");
let q5 = document.getElementById("container5");
let q6 = document.getElementById("container6");
let q7 = document.getElementById("container7");
let q8 = document.getElementById("container8");
let q9 = document.getElementById("container9");
let q10 = document.getElementById("container10");
     
let time = 180;
let timeLeft;

function Start() {
    const q1 = document.getElementById("container1"); //1
    const st = document.getElementById("Start"); //2

    if (q1.style.display === "none") {
        q1.style.display = "block";
    } else {
        q1.style.display = "none";
    }
    if (q1.style.display === "block") {
    
        st.style.display = "none";
    }
    
    if (st.style.display = "none") {
 const name = prompt("would you like to take this test?", "name");
  if (name != "") {
      document.getElementById("info").innerHTML = 
    "name:" + name;
    console.log(name);
  }};
  
  timeLeft = setInterval(timer, 1000);

// timer(); // go execute the timmer function defined below

};

function timer() {

    document.getElementById("timer").innerHTML = 
    "Time Left =" + time--;

   //console.log( time--);
  if(time < 0) {
    clearInterval(timeLeft);
    console.log("Times Up!" , name , score);
    document.getElementById("timer").innerHTML = 
    "TIMES UP!";
  }
};

const rt = document.getElementById("rightAnswer");
 
 
let counterC = 0;
let counterW = 0;
//let score1 = "Right:" + counterC + " " + "Wrong:" + counterW;

  function rightAnswer() {

    counterC++;

    
  

    const scr = document.getElementById("score").innerHTML =
    "Right:" + counterC + "Wrong:" + counterW;

   
    console.log("right!" + " " + counterC); 

  }

  
  function wrongAnswer() {

    counterW++;

    time--;

    const wg = document.getElementById("score").innerHTML =
    "Right:" + counterC + "Wrong:" + counterW;

    console.log("wrong" + " " + counterW); 

  };
  


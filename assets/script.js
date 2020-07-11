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

let counterC = 0;
let counterW = 0;

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
     time--;

   //console.log( time--);
  if(time < 0) {
    clearInterval(timeLeft);
    console.log("Times Up!" , info , score);
    document.getElementById("timer").innerHTML = 
    "TIMES UP!";
  }
};

//question 1
  function rightAnswer() {

    let q1 = document.getElementById("container1");
    let q2 = document.getElementById("container2");

    if (q1.style.display === "block") {
        q1.style.display = "none"      
    } 
    if (q2.style.display === "none") {
        q2.style.display = "block"
    }
    counterC++;

    time++;time++;time++;time++;time++;
    time++;time++;time++;time++;time++;
   
    const scr = document.getElementById("score").innerHTML =
    "Right:" + counterC + "Wrong:" + counterW;

    console.log("right!" + " " + counterC); 

  } function wrongAnswer() {

    let q1 = document.getElementById("container1");
    let q2 = document.getElementById("container2");
    
    if (q1.style.display === "block") {
        q1.style.display = "none"      
    } 
    if (q2.style.display === "none") {
        q2.style.display = "block"
    }
    counterW++;

    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;

    const wg = document.getElementById("score").innerHTML =
    "Right:" + counterC + "Wrong:" + counterW;

    console.log("wrong" + " " + counterW); 
  };

//question 2

  function rightAnswer2() {

    let q2 = document.getElementById("container2");
    let q3 = document.getElementById("container3");

    if (q2.style.display === "block") {
        q2.style.display = "none"      
    } 
    if (q3.style.display === "none") {
        q3.style.display = "block"
    }
    counterC++;

    time++;time++;time++;time++;time++;
    time++;time++;time++;time++;time++;
   
    const scr = document.getElementById("score").innerHTML =
    "Right:" + counterC + "Wrong:" + counterW;

    console.log("right!" + " " + counterC); 


  } function wrongAnswer2() {

    let q2 = document.getElementById("container2");
    let q3 = document.getElementById("container3");

    if (q2.style.display === "block") {
        q2.style.display = "none"      
    } 
    if (q3.style.display === "none") {
        q3.style.display = "block"
    }
    counterW++;

    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;

    const wg = document.getElementById("score").innerHTML =
    "Right:" + counterC + "Wrong:" + counterW;

    console.log("wrong" + " " + counterW); 
  };

  //question 3
  function rightAnswer3() {

    let q3 = document.getElementById("container3");
    let q4 = document.getElementById("container4");

    if (q3.style.display === "block") {
        q3.style.display = "none"      
    } 
    if (q4.style.display === "none") {
        q4.style.display = "block"
    }
    counterC++;

    time++;time++;time++;time++;time++;
    time++;time++;time++;time++;time++;
   
    const scr = document.getElementById("score").innerHTML =
    "Right:" + counterC + "Wrong:" + counterW;

    console.log("right!" + " " + counterC); 


  } function wrongAnswer3() {

    let q3 = document.getElementById("container3");
    let q4 = document.getElementById("container4");

    if (q3.style.display === "block") {
        q3.style.display = "none"      
    } 
    if (q4.style.display === "none") {
        q4.style.display = "block"
    }
    counterW++;

    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;

    const wg = document.getElementById("score").innerHTML =
    "Right:" + counterC + "Wrong:" + counterW;

    console.log("wrong" + " " + counterW); 
  };
 
  //question 4
  function rightAnswer4() {

    let q4 = document.getElementById("container4");
    let q5 = document.getElementById("container5");

    if (q4.style.display === "block") {
        q4.style.display = "none"      
    } 
    if (q5.style.display === "none") {
        q5.style.display = "block"
    }
    counterC++;

    time++;time++;time++;time++;time++;
    time++;time++;time++;time++;time++;
   
    const scr = document.getElementById("score").innerHTML =
    "Right:" + counterC + "Wrong:" + counterW;

    console.log("right!" + " " + counterC); 


  } function wrongAnswer4() {

    let q4 = document.getElementById("container4");
    let q5 = document.getElementById("container5");

    if (q4.style.display === "block") {
        q4.style.display = "none"      
    } 
    if (q5.style.display === "none") {
        q5.style.display = "block"
    }
    counterW++;

    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;

    const wg = document.getElementById("score").innerHTML =
    "Right:" + counterC + "Wrong:" + counterW;

    console.log("wrong" + " " + counterW); 
  };
 
  //question 5   
  function rightAnswer5() {

    let q5 = document.getElementById("container5");
    let q6 = document.getElementById("container6");

    if (q5.style.display === "block") {
        q5.style.display = "none"      
    } 
    if (q6.style.display === "none") {
        q6.style.display = "block"
    }
    counterC++;

    time++;time++;time++;time++;time++;
    time++;time++;time++;time++;time++;
   
    const scr = document.getElementById("score").innerHTML =
    "Right:" + counterC + "Wrong:" + counterW;

    console.log("right!" + " " + counterC); 


  } function wrongAnswer5() {

    let q5 = document.getElementById("container5");
    let q6 = document.getElementById("container6");

    if (q5.style.display === "block") {
        q5.style.display = "none"      
    } 
    if (q6.style.display === "none") {
        q6.style.display = "block"
    }
    counterW++;

    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;

    const wg = document.getElementById("score").innerHTML =
    "Right:" + counterC + "Wrong:" + counterW;

    console.log("wrong" + " " + counterW); 
  };

  //question 6   
  function rightAnswer6() {

    let q6 = document.getElementById("container6");
    let q7 = document.getElementById("container7");

    if (q6.style.display === "block") {
        q6.style.display = "none"      
    } 
    if (q7.style.display === "none") {
        q7.style.display = "block"
    }
    counterC++;

    time++;time++;time++;time++;time++;
    time++;time++;time++;time++;time++;
   
    const scr = document.getElementById("score").innerHTML =
    "Right:" + counterC + "Wrong:" + counterW;

    console.log("right!" + " " + counterC); 


  } function wrongAnswer6() {

    let q6 = document.getElementById("container6");
    let q7 = document.getElementById("container7");

    if (q6.style.display === "block") {
        q6.style.display = "none"      
    } 
    if (q7.style.display === "none") {
        q7.style.display = "block"
    }
    counterW++;

    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;

    const wg = document.getElementById("score").innerHTML =
    "Right:" + counterC + "Wrong:" + counterW;

    console.log("wrong" + " " + counterW); 
  };

  //question 7   
  function rightAnswer7() {

    let q7 = document.getElementById("container7");
    let q8 = document.getElementById("container8");

    if (q7.style.display === "block") {
        q7.style.display = "none"      
    } 
    if (q8.style.display === "none") {
        q8.style.display = "block"
    }
    counterC++;

    time++;time++;time++;time++;time++;
    time++;time++;time++;time++;time++;
   
    const scr = document.getElementById("score").innerHTML =
    "Right:" + counterC + "Wrong:" + counterW;

    console.log("right!" + " " + counterC); 


  } function wrongAnswer7() {

    let q7 = document.getElementById("container7");
    let q8 = document.getElementById("container8");

    if (q7.style.display === "block") {
        q7.style.display = "none"      
    } 
    if (q8.style.display === "none") {
        q8.style.display = "block"
    }
    counterW++;

    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;

    const wg = document.getElementById("score").innerHTML =
    "Right:" + counterC + "Wrong:" + counterW;

    console.log("wrong" + " " + counterW); 
  };

  //question 8 (final question)   
  function rightAnswer8() {

    let q8 = document.getElementById("container8");
    const st = document.getElementById("Start");

    if (q8.style.display === "block") {
        q8.style.display = "none"      
    } 
    if (st.style.display === "none") {
        st.style.display = "block"
    }
    counterC++;

    time++;time++;time++;time++;time++;
    time++;time++;time++;time++;time++;
   
    const scr = document.getElementById("score").innerHTML =
    "Right:" + counterC + " " + "Wrong:" + counterW;

    console.log("right!" + " " + counterC); 
    console.log( info, score, time, "Good Job!" );
    
   clearInterval(timeLeft);

  } function wrongAnswer8() {

    let q8 = document.getElementById("container8");
    const st = document.getElementById("Start");


    if (q8.style.display === "block") {
        q8.style.display = "none"      
    }
     if (st.style.display === "none") {
          st.style.display = "block"
    }
    counterW++;

    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;
    time--;time--;time--;time--;time--;

    const wg = document.getElementById("score").innerHTML =
    "Right:" + counterC + " " + "Wrong:" + counterW;

    console.log("wrong" + " " + counterW); 
    console.log( info, score, time, "Good Job!" );
   
    clearInterval(timeLeft);
  };

     
     
  



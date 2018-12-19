document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var option1= document.getElementById('option1')
    console.log(option1);

    var option2= document.getElementById('option2')
    console.log(option2);

    option2.style.visibility = "visible"

    option1.addEventListener("click", scenerioChecker);
    option2.addEventListener("click", scenerioChecker);

    function scenerioChecker(){

    if (this == option1){
    alert("you lose! you sent an innocent woman to jail")
  }
    else if (this == option2){
      alert("you win!")
    }

    }



    }) ;

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

var answer = ["Wh-what kind of question is that? <br> You know where I was! I saw him... I saw him..."
]

var question = ["Where were you whe your husband died?", "Admit it. You murdered him","How did you think you'd get away with poisoning the food he made?"]
console.log(question);

var option1= document.getElementById('option1')
console.log(option1);

var option2= document.getElementById('option2')
console.log(option2);

var option3= document.getElementById('option3')
console.log(option1);

var option4= document.getElementById('option4')
console.log(option2);

var speaker = document.getElementById('speaker').innerHTML
console.log(speaker);

var dialogue = document.getElementById('dialogue')
console.log(dialogue);

function scenerioChecker(){
  for (var i = 0; i < question.length; i++) {
    question[i]
  if (this.innerHTML == question[i]){
    console.log("true");
    switch(i){
      case 0 : this.innerHTML = question[1]
              dialogue.innerHTML = answer[0]
              console.log(dialogue);
      break;
      case 1 : this.innerHTML
    }
  }
    else {console.log("false")}
}
}

option1.addEventListener("click", scenerioChecker);
option2.addEventListener("click", scenerioChecker);
option3.addEventListener("click", scenerioChecker);
option4.addEventListener("click", scenerioChecker);











}) ;

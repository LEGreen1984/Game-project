document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


var question = ["Where were you whe your husband died?", "Admit it. You murdered him","How did you think you'd get away with poisoning the food he made?"]

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

var dialogue = document.getElementById('dialogue').innerHTML
console.log(dialogue);

function scenerioChecker() {
  if (this.innerHTML == question[0])
  var route = question[0]
  console.log(route);
}















});

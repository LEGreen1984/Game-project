document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
function changedialogue (){
  caseTitle[0].innerHTML = "Kiyoko Fujiwara"
  caseSynopsis[0].innerHTML = "The first suspect is Kiyoko Fujiwara, the young wife of the victim. She was the one who made the cyanide-laced soup."
  caseSynopsis[1].innerHTML = "she first met Kenji when she was <strong>working at a maid cafe</strong> and a year later, they married and had their son. It is well documented that Kenji's father had arranged for him to marry the daughter of a wealthy business partner. Kenji's marriage enraged his father and damaged relations with the business partner immensely."
  caseSynopsis[2].innerHTML = "The household staff have been extremely tight lipped about the internal affairs of their marriage, but they all say that they were 'just like any normal couple'. Police have been unable to uncover a clear motive for the murder,"
  option2.style.visibility = "visible"
};
var option1= document.getElementById('option1')
console.log(option1);

var option2= document.getElementById('option2')
console.log(option2);

//these define the variable
var caseSynopsis = document.getElementById('caseSynopsis').getElementsByClassName('col-m-12')[0].getElementsByTagName('p');
var caseTitle = document.getElementById('caseSynopsis').getElementsByClassName('col-m-12')[0].getElementsByTagName('h2');
console.log(caseTitle);

console.log(caseSynopsis[1]);
// option1.addEventListener("click", )

option1.addEventListener("click", changedialogue);











});

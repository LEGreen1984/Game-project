document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

var answer = ["Wh-what kind of question is that? <br> You know where I was! I saw him... I saw him...<br><br><p> <strong>Commissioner:</strong> Detective!<strong>The information was in the police report!</strong> Pay goddamned attention and stop asking stupid questions!</p>",
//0

"No...no....I didn't I swear it!",
//1
"I only made the food, I didn't put any poison it it!",
//2
"I can't... I did not.... please, you gotta believe me",
//3
"No!",
//4
"I... I don't know. It was in the fridge for a couple of days. Maybe...someone else dropped the poison in? That's right! Maybe someone broke in and dropped the poison in.",
//5
"Thank God that's not possible. My husband really loves hot wasabi. He's been obsessed with it since he was a child, but no-one else I know can stand it. Especially not my son.",
//6
"Hmmm... I don't really let other people into my house. Apart from the household staff and my husband, the only person who comes to visit is <strong> my sister in law Michuru,but I haven't seen her in weeks</strong>.The <strong>chairman</strong> came round a couple of days ago, but he didn't go anywhere near the kitchen."
//7
]

var question = ["Where were you when your husband died?",
//o

"Admit it. You murdered him",
//1
"How did you think you'd get away with poisoning the food <strong>you</strong> made?",
//2
 "*Read her mind*",
//3
 "Don't even TRY to lie to me",
//4
  "Then who could have done it?",
//5
   "Ever thought about what would happen if your son ate the soup?",
//6
    "Who else could have had access to the house?"
//7
]


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
  if (this.innerHTML == question[0]){
    option1.innerHTML = question[1]
    option2.innerHTML = question[2]
    option3.style.visibility = "hidden"
    dialogue.innerHTML = answer[0]
    option4.style.visibility = "hidden"
    console.log("turn1");
    }
  else if (this.innerHTML == question[1]){
    option1.innerHTML = question[4]
    dialogue.innerHTML = answer[1]
    option2.style.visibility = "hidden"
    option3.style.visibility = "hidden"
    console.log("turn2");
  }
  else if (this.innerHTML == question[2]){
    option1.innerHTML = question[5]
    option2.innerHTML = question[7]
    option3.style.visibility = "hidden"
    dialogue.innerHTML = answer[2]
    console.log("turn3");
  }
  else if (this.innerHTML == question[4]){
    option1.innerHTML = question[2]
    option2.innerHTML = "hidden"
    option3.innerHTML = "hidden"
    dialogue.innerHTML = answer[3]
    console.log("turn4");
  }
  else if (this.innerHTML == question[5]){
    option1.innerHTML = question[6]
    option2.innerHTML = question[7]
    dialogue.innerHTML = answer[5]
    console.log("turn5");
  }
  else if (this.innerHTML == question[6]){
    dialogue.innerHTML = answer[6]
    option4.style.visibility = "visible"
    option1.style.visibility = "hidden"
    option2.style.visibility = "hidden"
    option3.style.visibility = "hidden"
    console.log("turn6");
  }
  else if (this.innerHTML == question[7]){
    dialogue.innerHTML = answer[7]
    option1.innerHTML = question[6]
    option2.style.visibility = "hidden"
    option3.style.visibility = "hidden"
    console.log(this.innerHTML);
    console.log("turn7");
  }
  else (console.log("no"))
}


option1.addEventListener("click", scenerioChecker);
option2.addEventListener("click", scenerioChecker);
option3.addEventListener("click", scenerioChecker);
option4.addEventListener("click", scenerioChecker);











}) ;

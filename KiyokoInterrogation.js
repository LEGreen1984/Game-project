document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

var answer = ["Wh-what kind of question is that? <br> You know where I was! I saw him... I saw him...<br><br><p> <strong>Commissioner:</strong> Detective!<strong>The information was in the police report!</strong> Pay goddamned attention and stop asking stupid questions!</p>",


"No...no....I didn't I swear it!",

"I only made the food, I didn't put any poison it it!",

"I can't... I did not.... please, you gotta believe me",

"No!",

"I... I don't know. It was in the fridge for a couple of days. Maybe...someone else dropped the poison in? That's right! Maybe someone broke in and dropped the poison in.",

"Thank God that's not possible. My husband really loves hot wasabi. He's been obsessed with it since he was a child, but no-one else I know can stand it. Especially not my son.",

"Hmmm... I don't really let other people into my house. Apart from the household staff and my husband, the only person who comes to visit is <strong> my sister in law Michuru,but I haven't seen her in weeks</strong>.The <strong>chairman</strong> came round a couple of days ago, but he didn't go anywhere near the kitchen."

]

var question = ["Where were you when your husband died?",


"Admit it. You murdered him",

"How did you think you'd get away with poisoning the food <strong>you</strong> made?",

 "*Read her mind*",

 "Don't even TRY to lie to me",

  "Then who could have done it?",

   "Ever thought about what would happen if your son ate the soup?",

    "Who else could have had access to the house?"

]


var option1= document.getElementById('option1')


var option2= document.getElementById('option2')


var option3= document.getElementById('option3')


var option4= document.getElementById('option4')


var speaker = document.getElementById('speaker').innerHTML


var dialogue = document.getElementById('dialogue')


function scenerioChecker(){
  if (this.innerHTML == question[0]){
    option1.innerHTML = question[1]
    option2.innerHTML = question[2]
    option3.style.visibility = "hidden"
    dialogue.innerHTML = answer[0]
    option4.style.visibility = "hidden";

    }
  else if (this.innerHTML == question[1]){
    option1.innerHTML = question[4]
    dialogue.innerHTML = answer[1]
    option2.style.visibility = "hidden"
    option3.style.visibility = "hidden";

  }
  else if (this.innerHTML == question[2]){
    option1.innerHTML = question[5]
    option2.innerHTML = question[7]
    option3.style.visibility = "hidden"
    option1.style.visibility = "visible"
    option2.style.visibility = "visible"
    dialogue.innerHTML = answer[2];

  }
  else if (this.innerHTML == question[4]){
    option3.innerHTML = question[2]
    option2.style.visibility = "hidden"
    option1.style.visibility = "hidden"
    option3.style.visibility = "visible"
    dialogue.innerHTML = answer[3];

  }
  else if (this.innerHTML == question[5]){
    option1.innerHTML = question[6]
    option2.innerHTML = question[7]
    dialogue.innerHTML = answer[5];

  }
  else if (this.innerHTML == question[6]){
    dialogue.innerHTML = answer[6]
    option4.style.visibility = "visible"
    option1.style.visibility = "hidden"
    option2.style.visibility = "hidden"
    option3.style.visibility = "hidden";

  }
  else if (this.innerHTML == question[7]){
    dialogue.innerHTML = answer[7]
    option1.innerHTML = question[6]
    option2.style.visibility = "hidden"
    option3.style.visibility = "hidden";

  }
}


option1.addEventListener("click", scenerioChecker);
option2.addEventListener("click", scenerioChecker);
option3.addEventListener("click", scenerioChecker);
option4.addEventListener("click", scenerioChecker);











}) ;

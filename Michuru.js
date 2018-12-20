document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

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

var question = [

  "Where were you the evening of the murder?",

  "Where were you in the weeks leading up to the war?",

  "Did you see much of your brother in that time?",

  "What were you doing?",

  "Humor me",

  "How did you get on with your sister in law?",

  "What was your relationship like with your brother?",

  "I think you poisoned him.",

  "Tell me about the last time you saw her.",

  "Instead of a brother?",

  "Why did no one like her except you?",

  "I can see it in your eyes",

  "You really don't seem upset that your brother's gone.",

]

var answer = [

"You really don't trust the police, do you?<br>I was at a karaoke bar with some work colleagues. You know... creating good work relationships. Like a good Fujiwara SHOULD do.",

"I was either working late or ",

"Tch. You wouldn't understand even if I told you.",

"I was doing some experiments on fruits commonly found in herbal remedies"


]

    option1.addEventListener("click", scenerioChecker);
    option2.addEventListener("click", scenerioChecker);
    option3.addEventListener("click", scenerioChecker);
    option4.addEventListener("click", scenerioChecker);











  }) ;

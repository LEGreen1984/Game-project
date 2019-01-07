document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

var question = [
//question 0
"Where were you on the night of the murder?",
//question 1
"Search memories",
//question 2
"How did you kill him?",
//question 3
"So you acknowledge they weren't real?",
//question 4
"What poison did you use?",
//question 5
"You don't seem that convicted",
//question 6
"Have you been diagnosed before now?",
//question 7
"I'm asking YOU",
//question 8
"Memory Deep Drive",
//question 9
"Read his mind",
//question 10
"Read Memory",
//question 11
"next",
//question 12
"You are obviously lying",
//question 13
"What REALLY happened?",
//question 14
"Is this for attention?",
//question 15
"Someone put you up to this",
//Question 16
"You're taking the fall for someone",
//question 17
"Your kid is dying?",
//question 18
"Search his mind",
//question 19
"What REALLY happened?",
//question 20
"Then why put them through that?",
//question 21
"End interrogation",
//question 22
"Answer the goddamned question!",
// question 23
"How did you get past their security cameras?",
//question 24
"continue",
//question 25
"keep pushing"
];

var answer = [
  //answer 0
  "Just as I told the police. I was wandering around in a haze, confused by the voices in my head. Then I found myself outside of Fujiwara-san's house. Then the voices told me that if I killed him, everyone would be saved...so I had to do it.There was no other choice.",
  //answer 1
  "I don't know. My mind... was just so hazy. I honestly have trouble holding onto all the details. All I see are images. I knew he had to die, and the next day he was dead.",
  //answer 2
  "It was the voices. They told me to break in. So I broke in and poisoned his food.",
  //answer 3
  "That's not what I said at all! They were from God! God was telling me to do this, because it would save the world.",
  //answer 4
  "You've got the forensic reports! You figure it out!",
  //answer 5
  "Why would I make this up? To shame my whole family? Of course I was convicted!",
  //answer 6
  "It began when I was 13. It was mild at first. It seemed like... the worst things I thought about myself- I sometimes heard them as voices. It stopped after a month but it started happening again when I was an adult.<p>Usually it was just... I could hear lots of people talking when no one was there- and sometimes I would talk at 100 miles an hour and when I tried to get the words out- they just wouldn't form properly in my head.",
  //answer 7
  "I...ummm.... I'm not entirely sure. I know I bought it off some Yakuza guy In a loud shirt I met at a karaoke bar.",
  //answer 8
  "*I search his mind, but the only images of Yakuza I find are from memories of movies he's seen. Is he confusing reality with fiction, or is he making this up?*",
  //answer 9
  "It was cyanide! Cyanide.",
  //answer 10
"*I look into his mind. I see images of a parade of different psychiatrists over the years. He's... surprisingly self aware of his condition. He's telling the truth about this. And yet...*",
//answer 11
"He struggles to come up with an answer.",
//answer 12
"I'm not... this really happened okay?I'm a murderer! I killed him. I have no reason to lie!<p>*He seems desperate... but why? Unless...*",
//answer 13
"What? So I can same my family? So my kid can spend his last day on earth wondering why his foster dad decided to murder someone? DO YOU THINK I'D LIE ABOUT ANY OF THIS?",
//answer 14
"His eyes are wide and panicked. I don't need to his mind to know that I'm on to something.",
//answer 15
"*He tries to answer, but he doesn't get far before his face starts to crumple.",
//answer 16
"I'm crazy! I told you I'm crazy! I'm mad and that's why I'm doing all this. Please... Let me go. Just... put me back in my prison cell- give me the death sentence, whatever.I don't know how... but you're making me... you're making me THINK things. If you don't stop- I swear... I swear I'll kill myself!",
//answer 17
"Before I can do anything, the police chief comes into the room.<p>'I think you've had enough time now.' He says. When I try to argue he says 'You've got six other cases to wrap up today. You're here to wrap up this up- and if he hurts himself in police custody we'll have a scandal on out hands."
]
var memory = [
  //memory 0
"This is bizarre. As I flit through his memories all I'm seeing are memories of a young man and a kid. Sometimes they're at a park, or baking food- and sometimes they're at a hospital, the young boy surrounded by tubes. This is clearly who the man sees as family... but what does it all mean?",
//memory 1
"*I'm in an interrogation room. The prosecutor stands in front of me. He screams at me : 'Tell me! How did you get hold of the anthrax?'"
]

var option1= document.getElementById('option1')
console.log(option1);

var option2= document.getElementById('option2')
console.log(option2);

var option3= document.getElementById('option3')
console.log(option3);

var option4= document.getElementById('option4')
console.log(option4);

var dialogue = document.getElementById('dialogue')
console.log(dialogue);

function scenerioChecker(){
  if (this.innerHTML == question[0]){
    option1.innerHTML = question[1]
    option2.innerHTML = question[23]
    option3.style.visibility = "hidden"
    dialogue.innerHTML = answer[0]
    option4.style.visibility = "hidden";
    console.log('turn 1');
    }
    else if (this.innerHTML == question[23]){
      dialogue.innerHTML = answer[1]
      option1.innerHTML = question[1]
      option2.innerHTML = question[2]
      option3.style.visibility = "hidden";
      option4.style.visibility = "hidden";
      console.log('turn2');
}
    else if (this.innerHTML == question[1]){
      dialogue.innerHTML = memory[0]
      option1.innerHTML = question[23]
      option2.innerHTML = question[2]
      option3.style.visibility = "hidden";
      option4.style.visibility = "hidden";
      console.log('turn3');
}
else if (this.innerHTML == question[2]){
  dialogue.innerHTML = answer[2]
  option1.innerHTML = question[3]
  option2.innerHTML = question[4]
  option3.style.visibility = "hidden";
  option4.style.visibility = "hidden";
  console.log('turn4');
}
else if (this.innerHTML == question[3]){
  dialogue.innerHTML = answer[3]
  option1.innerHTML = question[5]
  option2.innerHTML = question[6]
  option3.style.visibility = "hidden";
  option4.style.visibility = "hidden";
  console.log('turn5');
}
else if (this.innerHTML == question[5]){
  dialogue.innerHTML = answer[5]
  option1.innerHTML = question[4]
  option2.innerHTML = question[6]
  option3.style.visibility = "hidden";
  option4.style.visibility = "hidden";
  console.log('turn6');
}
else if (this.innerHTML == question[8]){
  dialogue.innerHTML = answer[10]
  option1.innerHTML = question[4]
  option2.style.visibility = "hidden";
  option3.style.visibility = "hidden";
  option4.style.visibility = "hidden";
  console.log('turn7');
}
else if (this.innerHTML == question[6]){
  dialogue.innerHTML = answer[6]
  option1.innerHTML = question[8]
  option2.style.visibility = "hidden";
  option3.style.visibility = "hidden";
  option4.style.visibility = "hidden";
  console.log('turn8');
}
else if (this.innerHTML == question[4]){
  dialogue.innerHTML = answer[4]
  option1.innerHTML = question[22]
  option2.innerHTML = question[7]
  option3.style.visibility = "hidden";
  option4.style.visibility = "hidden";
  console.log('turn9');
}
else if (this.innerHTML == question[7]){
  dialogue.innerHTML = answer[7]
  option1.innerHTML = question[9]
  option2.style.visibility = "hidden";
  option3.style.visibility = "hidden";
  option4.style.visibility = "hidden";
  console.log('turn10');
}
else if (this.innerHTML == question[22]){
  dialogue.innerHTML = answer[7]
  option1.innerHTML = question[9]
  option2.style.visibility = "hidden";
  option3.style.visibility = "hidden";
  option4.style.visibility = "hidden";
  console.log('turn11');
}
else if (this.innerHTML == question[9]){
  dialogue.innerHTML = answer[8]
  option1.innerHTML = question[24]
  option2.style.visibility = "hidden";
  option3.style.visibility = "hidden";
  option4.style.visibility = "hidden";
  console.log('turn12');
}
else if (this.innerHTML == question[24]){
  dialogue.innerHTML = answer[11]
  option1.innerHTML = question[10]
  option2.style.visibility = "hidden";
  option3.style.visibility = "hidden";
  option4.style.visibility = "hidden";
  console.log('turn13');
}
else if (this.innerHTML == question[10]){
  dialogue.innerHTML = memory[1]
  option1.innerHTML = question[11]
  option2.style.visibility = "hidden";
  option3.style.visibility = "hidden";
  option4.style.visibility = "hidden";
  console.log('turn14');
}
else if (this.innerHTML == question[11]){
  dialogue.innerHTML = answer[9]
  option1.innerHTML = question[12]
  option2.innerHTML = question[13];
  option3.style.visibility = "hidden";
  option4.style.visibility = "hidden";
  console.log('turn15');
}
else if (this.innerHTML == question[12]){
  dialogue.innerHTML = answer[12]
  option1.innerHTML = question[14]
  option2.innerHTML = question[15];
  option3.innerHTML = question[16];
  option3.style.visibility = "visible";
  option4.style.visibility = "hidden";
  console.log('turn16');
}
else if (this.innerHTML == question[13]){
  dialogue.innerHTML = answer[12]
  option1.innerHTML = question[14]
  option2.innerHTML = question[15];
  option3.innerHTML = question[16];
  option3.style.visibility = "visible";
  option4.style.visibility = "hidden";
  console.log('turn17');
}
else if (this.innerHTML == question[14]){
  dialogue.innerHTML = answer[13]
  option1.innerHTML = question[20]
  option2.innerHTML = question[17];
  option3.style.visibility = "visible";
  option4.style.visibility = "hidden";
  console.log('turn18');
}
else if (this.innerHTML == question[15]){
  dialogue.innerHTML = answer[14]
  option1.innerHTML = question[19]
  option2.innerHTML = question[18];
  option3.style.visibility = "visible";
  option4.style.visibility = "hidden";
  console.log('turn19');
}
else if (this.innerHTML == question[16]){
  dialogue.innerHTML = answer[14]
  option1.innerHTML = question[19]
  option2.innerHTML = question[18];
  option3.style.visibility = "visible";
  option4.style.visibility = "hidden";
  console.log('turn20');
}
else if (this.innerHTML == question[19]){
  dialogue.innerHTML = answer[16]
  option1.innerHTML = question[25]
  option2.style.visibility = "hidden";
  option3.style.visibility = "hidden";
  option4.style.visibility = "visible";
  console.log('turn21');
}
else if (this.innerHTML == question[18]){
  dialogue.innerHTML = answer[16]
  option1.innerHTML = question[25]
  option2.style.visibility = "hidden";
  option3.style.visibility = "hidden";
  option4.style.visibility = "visible";
  console.log('turn22');
}
else if (this.innerHTML == question[20]){
  dialogue.innerHTML = answer[16]
  option1.innerHTML = question[25]
  option2.style.visibility = "hidden";
  option3.style.visibility = "hidden";
  option4.style.visibility = "visible";
  console.log('turn23');
}
else if (this.innerHTML == question[25]){
  dialogue.innerHTML = answer[17]
  option1.style.visibility = "hidden"
  option2.style.visibility = "hidden";
  option3.style.visibility = "hidden";
  option4.style.visibility = "visible";
  console.log('turn24');
}
}




option1.addEventListener("click", scenerioChecker);
option2.addEventListener("click", scenerioChecker);
option3.addEventListener("click", scenerioChecker);
option4.addEventListener("click", scenerioChecker);




    }) ;

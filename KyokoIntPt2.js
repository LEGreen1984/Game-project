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


    option1.addEventListener("click", scenerioChecker);
    option2.addEventListener("click", scenerioChecker);
    option3.addEventListener("click", scenerioChecker);
    option4.addEventListener("click", scenerioChecker);

var question = [
"Tell me about your relationship with the victim",
"Really?",
"Don't lie to me! I can see through deception",
"Did you ever get life insurance on him?",
"When did you make him get that out?",
"Surely his family wouldn't let that happen",
"Was your marriage... a happy one?",
"Were you and the deceased on good terms?",
"See memory",
"You hated him. I can see that. You hated him and wanted him dead.",
"continue"
]

var answer = [
  "*she smiles*It was... it was...<br><br><p>*Kiyoko is chewing on her bottom lip. She looks down at her lip, searching for the words. She doesn't speak. The silence is filled by the soft ticking of the clock on the wall. I can see , she doesn't answer. Finally she looks up. Her face is lit by a warm smile.But her voice is hollow as she says her answer*.<br><p>'We...my husband takes care of me. He gives my son all he could ever ask for. He's a good husband.''",
  "Our marriage has our ups and downs. What marriage doesn't",
  "*Kiyoko narrows her eyes, her voice on edge*<br>Look. I'm just an ordinary housewife, okay? I don't have a job or any money of my own. If...*sighs* Now... that Kenji's... Kenji...is gone, I don't have any support. The house belongs to Kenji's father, and without that money I won't have anywhere to live.",
  "Four years ago... A year after I gave birth to my son.<br>*She laughs. The sound is bitter*I thought... I thought after I gave Kenji a male heir they'd finally acknowledge me. But I was a fool.",
  "His parents never liked me. I guess if you've read my profile you'll realise I worked in a maid cafe, and that Kenji chose to marry me instead of a wealthy heiress that his father picked out for him. His father won't acknowledge me. His mother only speaks to me to criticise how I'm raising my son.<p>In fact, the only one who's kind to me is his sister Michuru",
  "Please... Please... Please I didn't kill him. I didn't kill him. I didn't kill him. I didn't kill him.I swear. I admit it- I was scared of him. I was scared that he'd take my son away if I left, but I'd never murder him. Even if I didn't go to jail, his parents would find away to take my son away."
]
var memory = ["Kyoko: Please! Please no more!<br><br><p>*She's beginning to tremble. The world around me fades away, and I find myself standing in a Japanese style mansion. The victim, Kenji Fujiwara, stands in front of me. His clothes are dishevelled and his face is red with the flush from drinking too much alcohol.<p>Kyoko's voice: The chairman's been round again. He said you haven't been showing up for work, and you've been spending company money.</p>Kenji ignores her and flops on the couch.<br>Kyoko's voice:Kenji- that's a crime. Did you ever think about our son?!<br>Kenji slowwly grumbles a reply. Kenji: It's none of your buisiness.<br>Kyoko's voice: I'm leaving, Kenji. And this time I mean it.<br>Kenji laughs. When he looks at her there's a flash of cruelty in his eyes. Kenji: Really? Then you better say goodbye to little boy.",
"You'll never see him again.<br><br>Kyoko's voice: Wh-wh-you can't do that. I don't believe you. <br><br>Kenji: But you know I can. My father has wanted nothing more than to kick you out of the family since day one. You leave, his lawyers will make sure I get full custody.And when you go to court?Suddenly like magic there'll be a dozen witnesses telling the court how drunk you are and how one time you beat him so bad he ended up in hospital.*Kenji laughs as Kiyoko begins to sob. The memory fades awayand the real Kiyoko is trembling in front of me. I call her a liar and she breaks down and cry."]

function scenerioChecker(){
  console.log("I've been clicked");
  if (this.innerHTML == question[0]){
    option1.innerHTML = question[1]
    option2.innerHTML = question[2]
    option3.innerHTML = question[3]
    dialogue.innerHTML = answer[0]
    console.log('turn1');
  }
  else if (this.innerHTML == question[3]){
    dialogue.innerHTML = answer[2]
    option1.innerHTML = question[4]
    option2.innerHTML = question[5]
    option3.style.visibility = "hidden"
    console.log('turn2');
  }
  else if (this.innerHTML == question[4]){
    dialogue.innerHTML = answer[4]
    option1.innerHTML = question[5]
    option2.innerHTML = question[6]
    option3.style.visibility = "hidden"
    console.log('turn3');
  }
  else if (this.innerHTML == question[5]){
    dialogue.innerHTML = answer[3]
    option1.innerHTML = question[7]
    option2.style.visibility = "hidden"
    option3.style.visibility = "hidden"
    option4.style.visibility = "visible"
    console.log('turn4');
  }
  else if (this.innerHTML == question[6]){
    option1.innerHTML = question[1]
    option2.innerHTML = question[2]
    option3.innerHTML = question[3]
    dialogue.innerHTML = answer[0]
    console.log('turn5');
  }
  else if (this.innerHTML == question[7]){
    option1.innerHTML = question[1]
    option2.innerHTML = question[2]
    option3.innerHTML = question[3]
    dialogue.innerHTML = answer[0]
    console.log('turn6');
  }
  else if (this.innerHTML == question[1]){
    option1.innerHTML = question[8]
    option2.innerHTML = question[3]
    option3.style.visibility = "hidden"
    dialogue.innerHTML = answer[1]
    console.log('turn7');
  }
  else if (this.innerHTML == question[2]){
    option1.innerHTML = question[8]
    option2.innerHTML = question[3]
    option3.style.visibility = "hidden"
    dialogue.innerHTML = answer[1]
    console.log('turn8');
  }
  else if (this.innerHTML == question[8]){
    option1.innerHTML = question[10]
    option2.style.visibility = "hidden"
    option3.style.visibility = "hidden"
    dialogue.innerHTML = memory[0]
    console.log('turn9');
  }
  else if (this.innerHTML == question[9]){
    option4.style.visibility = "visible"
    option1.innerHTML = question[3]
    option2.style.visibility = "hidden"
    option3.style.visibility = "hidden"
    dialogue.innerHTML = answer[5]
    console.log('turn10');
  }
  else if (this.innerHTML == question[10]){
  dialogue.innerHTML = memory[1]
  option1.innerHTML = question[9]
  option2.style.visibility = "hidden"
  option3.style.visibility = "hidden"
  console.log('turn11');
  document.getElementsByTagName('body').style.backgroundImage = url('Kiyoko fight.jpg');
}
else if (this.innerHTML == question[9]){
dialogue.innerHTML = answer[5]
option4.style.visibility = "visible"
option1.innerHTML = question[3]
}
}

























    }) ;

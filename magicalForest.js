function introText() {
  console.log("Welcome to Magical Forest ✨🌳🪄");
  console.log("This is an interactive story 📘");
  console.log("Each of your choice will alter the story‼️");
  const willPlay = confirm("Want to play? 🎮");

  return willPlay;
}

function name() {
  const name = prompt("\nBefore we start, Please Enter your Name : ");
  return name;
}

function startOrQuit(willPlay) {
  if (willPlay) {
    console.log("\n\n🧚Come along, you Traveller🧚,\n☀️ When the sun is gone to sleep🌌,\n👯Come and sing🎶, and feel the joy✨,\n🌳Where the forest too deep.🌳\n");
    return gamePlay();
  }

  console.log("\nThe Forest is calling you. Your Friends will miss YOU‼️");
}

function prologue(name) {
  console.clear();
  console.log("\n\n                   🌲✨ Prologue ✨🌲");

  console.log("\n(One morning in Goodharts, 👤(you) hear strange whispers from the forest. Only \nyou can hear them.)");

  console.log("\n👤 : What is that... Who's calling me?");

  console.log("\n(Later that day, you meet 👴🏻(William) at the village center. He's old wise man in the \nvillage and close to your family. And you explain your situation to him");

  console.log("\n👴🏻: The forest has been calling you since the day you were born. You are tied to it.");

  console.log("\n👤: What do you mean?");

  console.log("\n👴🏻: You are the only one who can stop the catastrophe. The forest is\n    in danger, and only you can prevent it. There is an ancient artifact hidden, and \n    it must not fall into the wrong hands.");

  console.log("\n👤 : I don’t understand...");

  console.log("\n👴🏻: You will. The Fox will guide you. Take this.");
  console.log("\n(He hands you a glowing pendant.)");
  console.log("\n👤: Why me? What do I have to do?");

  console.log("\n👴🏻: You will find the answers inside. The Fox will guide you. Take this pendant, \n    It will protect you from dark magic.");

  console.log("\n(As you step into the forest, the whispers grow louder.)\n");

  console.log("Whisper 🗣️: " + name + "... Are you Coming?\n");
  moveToChapter1();
}

function foxEncounter(name) {
  console.log("As you walk deeper into the forest, you suddenly hear a rustling sound behind you. Turning\n around, you see a mysterious fox with glowing golden eyes. 🦊");

  console.log("\n🦊: Ah, there you are, " + name + ". I've been waiting for you.");

  console.log("\n👤: What is this place? And who are you?");

  console.log("\n🦊: I am a guardian of this forest. You are here because the forest has\n    called you. It’s in your blood, " + name + ".");

  console.log("\n👤: The forest called me? I don’t understand. What do you mean? Why me?");

  console.log("\n🦊: You don’t remember, do you? You are marked by the forest, chosen from\n    birth to either protect or destroy its power. This forest is part of\n   you, and you are part of it.");

  console.log("\n👤: Marked? I don't remember any of this. How can I be connected to\n    something I don't even know about?");

  console.log("\n🦊: The forest kept those memories hidden for a reason. It protected you\n    from the burden of knowing too soon. But now, the time has come for you to face the truth.");

  console.log("\n👤: The artifact? What artifact? What is it, and why is it important?");

  console.log("\n🦊: The artifact lies deep within this forest, its power capable of\n    either saving or destroying all that lives. It has been hidden for centuries\n,    waiting for the one destined to wield or destroy it. You, " + name + ", are that one.");

  console.log("\n👤: So, I have to make a choice? To use it or destroy it?");

  console.log("\n🦊: Yes, but be warned: the artifact corrupts those who wield it. You must decide\n    carefully, for the forest and your very soul will be at stake.");

  console.log("\n👤: I understand now. There's no turning back, is there?");

  console.log("\n🦊: Indeed, " + name + ". The forest will guide you, but you must face the\n    choices ahead with strength and wisdom. Go now, and let your journey begin.");

  console.log("\n🦊: Go now, and let your journey begin.");
}


function lakePath() {
  console.log("\n(You walk towards the shimmering lake, the mist slowly lifts off with each step.)");
  console.log("\n(As you approach the edge, a figure emerges from the mist: the 🧙🏻‍♀️(Witch).)");
  console.log("\n🧙🏻‍♀️: What grows but never moves?");
  console.log("\n👤: What? I don’t understand.");

  let riddleAnswer = prompt("🧙🏻‍♀️: Answer the riddle:\n1. A tree\n2. A cloud\n3. A mountain \n👤: ");

  if (riddleAnswer === "1") {
    console.clear();
    correctAnswer();
    cavePath();
  } else {
    console.clear();
    wrongAnswer();
    cavePath();
  }
}

function correctAnswer() {
  console.log("\n🧙🏻‍♀️: Correct.");
  console.log("\n(She nods, pleased, and hands you a glowing amulet.)");
  console.log("\n👤: What is this?");
  console.log("\n🧙🏻‍♀️: This amulet will protect you on your journey. Use it wisely.");
  console.log("🧙🏻‍♀️: And also seek The Sage. He who can enlighten you with his wisdom YOU SHALL SEEK KNOWLEDGE")
  console.log("\nThe Witch disappears into the mist, leaving you alone by the lake.");
}

function wrongAnswer() {
  console.log("\n🧙🏻‍♀️: Incorrect. You must seek guidance.");
  console.log("\n(You feel a cold, dark energy creeping around you.)");
  console.log("\n🧙🏻‍♀️: The Sage can help you. Seek him in the cave.");
  console.log("\n(With a wave of her hand, she vanishes into the mist.)");
}

function cavePath() {
  console.log("\n(You venture deep into the cave. The air is thick with an ancient presence.)");
  console.log("\n(As you enter, a figure appears in the shadows: a wise 🧝🏼‍♂️(Sage).)");
  console.log("\n🧝🏼‍♂️: I knew you would come. The forest is calling to you.");
  console.log("\n👤: The forest? What do you mean?");
  console.log("\n🧝🏼‍♂️: The forest has been calling you since the day you were born.");
  console.log("\n(He steps forward, his face illuminated by the glow of his staff.)");
  console.log("\n🧝🏼‍♂️: The artifact you seek holds power, but beware, it can corrupt.");
  console.log("\n👤: I don’t understand... Why me?");
  console.log("\n🧝🏼‍♂️: You are the chosen one. The forest has bound you to its fate.");
  console.log("\n🧝🏼‍♂️: You must make a choice: You can choose the knowledge of the forest or seek guidance on your journey.");

  let sageChoice = prompt("🧝🏼‍♂️: What do you seek?\n1. Knowledge of the forest\n2. Guidance on your journey \n👤: ");

  if (sageChoice === "1") {
    console.clear();
    knowledgeResponse();
  } else if (sageChoice === "2") {
    console.clear();
    guidanceResponse();
  } else {
    console.log("❓ Sage: You must choose wisely. The future is shaped by your decisions.");
    cavePath();
  }
}

function knowledgeResponse() {
  console.log("\n🧝🏼‍♂️: I will share with you the knowledge of the forest.");
  console.log("\n(He touches the ground, and visions flood your mind.)");
  console.log("\n🧝🏼‍♂️: The forest is ancient, and you are connected to it by blood.");
  console.log("\n🧝🏼‍♂️: There is an artifact hidden deep within the forest, and it must not fall into the wrong hands.");
  console.log("\n🧝🏼‍♂️: The Fox will guide you. Trust it, and you will find your way.");
}

function guidanceResponse() {
  console.log("\n🧝🏼‍♂️: Guidance you seek, guidance you shall have.");
  console.log("\n(He raises his staff, and a warm glow surrounds you.)");
  console.log("\n🧝🏼‍♂️: I lift the curse that haunts you. You are now protected from dark magic.");
  console.log("\n🧝🏼‍♂️: Take this 🛡️(shield). It will defend you from physical harm.");
  console.log("\n(He hands you a glowing shield🛡️, and you feel stronger, more prepared for what's ahead.)");
}

function choosePath() {
  const next = prompt(" Press 1 to continue: ");
  if (next === '1') {
    console.clear();
  }

  else {
    console.log("Invalid choice Enter again");
    choosePath();
  }

  const pathChoice = prompt("Choose a path:\n1. Go to the Lake\n2. Go to the Cave\n👤: ");

  if (pathChoice === "1") {
    console.clear();
    lakePath();
  } else if (pathChoice === "2") {
    console.clear();
    cavePath();
  } else {
    console.log("❌ Invalid choice. Please select 1 or 2.");
    chapterOne();
  }
}

function chapterOne(name) {
  console.clear();
  console.log("\n                   🌲✨ Chapter 1: Enterence ✨🌲");
  foxEncounter(name);
  choosePath();
  moveToChapter2();
}

function moveToChapter1() {
  const goForward = confirm("Want to go forward? press y.\nWant to play prologue again? press N");
  if (goForward){
    console.clear();
    return chapterOne();
  }
  console.clear();
  return prologue();
}

function moveToChapter2() {
  const goForward = confirm("Want to go forward? press y.\nWant to play chapter 1 again? press N");
  if (goForward){
    return chapterTwo();
  }
  return chapterOne();
}

function chapterTwo() {
  console.log("\n                   🌲✨ Chapter 2: Ally and Information ✨🌲");
  console.log("\nComing Soon...")
}

function gamePlay() {
  const userName = name();
  prologue(userName);
  chapterOne(userName);
}

function magicalForest() {
  const willPlay = introText();
  startOrQuit(willPlay);
}

magicalForest();
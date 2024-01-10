// AI always rock
const aiPick = "rock";

// Human picks rock paper or scissors
let humanPick = prompt(
  "Attention, human challenger! Brace yourselves, for the AI has mastered the art of unwavering determination. Its choice will always be as solid as a rock! Prepare for an unyielding battle of wits in this game of rock, paper, scissors! 💪🗿 #ChallengeAccepted    Choose: rock, paper, or scissors!"
);

if (humanPick === "rock") {
  alert(
    "Looks like we're both stuck between a rock and a hard place – the battle of wits continues! 🪨🤖🤝🧔"
  );
} 
else if (humanPick === "paper") {
  alert(
    "Well, I guess even the smartest AI can't resist the power of a well-folded sheet of paper! 🤖✋📄 #RockPaperScissorsAIFail"
  );
} 
else if (humanPick === "scissors") {
  alert(
    "Looks like I brought a 'rock' to a 'scissors' fight and still came out on top! I must have some 'rock-solid' luck today! 🤘✂️😄"
  );
} 

// If you click Ok or Cancel
else {
  alert(
    "Canceling the game of Rock, Paper, Scissors? Or Did you forget to type a command? Must be trying to dodge a paper cut or a rock slide! 🪨📄✂️"
  );
}

// Display the choices
console.log(`Human chose: ${humanPick}`);
console.log(`AI chose: ${aiPick}`);

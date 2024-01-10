// List of words
let word1 = 'javascript'
let word2 = 'object'
let word3 = 'boolean'
let word4 = 'variable'
let word5 = 'waffles'

while (true) {
  // Select random word
  let randomWord = Math.floor(Math.random() * 5) + 1
  let word

  if (randomWord === 1) word = word1
  else if (randomWord === 2) word = word2
  else if (randomWord === 3) word = word3
  else if (randomWord === 4) word = word4
  else if (randomWord === 5) word = word5

  // Start the game
  // Player's guess
  let censored = censorLetters(word)
  let wrongGuess = 0

  while (censored.includes('❓')) {
    let guess = prompt(
      "I'm thinking of a word. 🤔" +
        '\n\nWord to Guess: ' + censored +
        '\n\nWould you like to guess a letter?'
    )

    // Check if guess of the full word is correct or not
    if (guess === word) {
      censored = word
      break
    }

    // Check if the letter is in word and Reveal guessed letter
    if (word.includes(guess)) {
  
      for (let i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          censored = censored.substr(0, i) + guess + censored.substr(i + 1)
        }
      }
    } else {
      wrongGuess++
      if (wrongGuess === 3) {
        alert('"Hangman!” 𖨆⅂ \n\nThe word was: ' + word)
        break
      } else {
        alert(
          'Wrong guess! ☹⅂ You have ' + (3 - wrongGuess) + ' attempts left.'
        )
      }
    }
  }

  if (!censored.includes('❓')) {
    alert('🎊 Congratulations! 🎊 \n\nYou guessed the word: ' + word)
  }

  // The following characters are automatically populated in the chosen random word: 'r', 's', 't', 'l', 'n', 'e'.
  function censorLetters (str) {
    let censorSTR = ''

    for (let i = 0; i < str.length; i++) {
      if (
        str[i] === 'r' ||
        str[i] === 's' ||
        str[i] === 't' ||
        str[i] === 'l' ||
        str[i] === 'n' ||
        str[i] === 'e'
      ) {
        censorSTR += str[i]
      } else {
        censorSTR += '❓'
      }
    }
    return censorSTR
  }

  // Ask player if they want to play again
  let playAgain = prompt('Do you want to play again? (yes/no)')
  if (playAgain !== 'yes') {
    break
  }
}

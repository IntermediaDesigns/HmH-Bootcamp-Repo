const response = prompt(
  'What program would you like to run? (length, yell, binary, or numSum?)'
)

if (response === 'length') {
  const enterAnswer = prompt(
    'Enter your word to calculate the number of characters:'
  )

  let count = 0
  let index = 0

  while (enterAnswer[index]) {
    count = count + 1
    index = index + 1
  }

  alert(`${enterAnswer} has ${count} characters.`)
} else if (response === 'yell') {
  const enterAnswer = prompt('Enter your word to yell:')
  let output = ''
  for (let i = 0; i < enterAnswer.length; i++) {
    output = output + enterAnswer[i].toUpperCase()
  }
  alert(output)
} else if (response === 'binary') {
  const enterAnswer = prompt('Enter string to filter for binary:')
  let output = ''
  for (let i = 0; i < enterAnswer.length; i++) {
    if (userInput[i] == 0 || enterAnswer[i] == 1) output += enterAnswer[i]
  }
  alert(output)
} else if (response === 'numSum') {
  const enterAnswer = prompt(
    'Enter number to calculate the sum of all the numbers it contains:'
  )
  let num = 0
  for (let i = 0; i <= enterAnswer; i++) {
    num = num + i
  }
  alert(num)
} else {
  alert("I don't recognize that command.")
}

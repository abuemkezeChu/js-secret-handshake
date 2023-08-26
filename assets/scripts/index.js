'use strict'

// selecting elements from the DOM

const input = document.getElementById('input')
const output = document.getElementById('secret-message')
const button = document.getElementById('btn-shake-hands')

// create an array containing each secret message object

const secretMessages = [
  { number: 1, message: 'wink' },
  { number: 10, message: 'double blink' },
  { number: 100, message: 'close your eyes' },
  { number: 1000, message: 'jump' }
]

// convert the number to binary

const convertToBinary = (number) => {
  let binary = ''
  while (number > 0) {
    binary = (number % 2) + binary
    number = parseInt(number / 2)
  }
  return binary
}

// update the output with the secret message

const display = () => {
  const binaryNumber = convertToBinary(input.value)
  const arrBin = binaryNumber.split('') // split the binary string into an array
  const reverseArrBin = arrBin.reverse()
  const message = []

  // loop through the array containing binary and push the secret message to the message array

  for (let i = 0; i < reverseArrBin.length; i++) {
    if (i < secretMessages.length && reverseArrBin[i] === '1') {
      message.push(secretMessages[i].message)
    }
  }

  // check if the binary number contains '10000' and reverse the message
  if (binaryNumber.length >= 5 && binaryNumber[binaryNumber.length - 5] === '1') {
    message.reverse()
  }

  // join the message array and display it in the output

  output.innerHTML = message.join(',')
}

button.addEventListener('click', display)

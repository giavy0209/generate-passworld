const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const SYMBOLS = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];


const result = document.getElementById('result')
const textLength = document.getElementById('length')
const inputLength = document.getElementById('input-length');

const copy = document.getElementById('copy')
const tooltip = copy.querySelector('.tooltip')
const checkNumber = document.getElementById('checkbox-numbers');
const checkLetter = document.getElementById('checkbox-letters');
const checkSymbol = document.getElementById('checkbox-symbols');

let isCheckNumber = checkNumber.checked
let isCheckLetter = checkLetter.checked
let isCheckSymbol = checkSymbol.checked
let length = inputLength.value

copy.addEventListener('click', function () {
  navigator.clipboard.writeText(result.innerText);
  tooltip.innerText = `Copied ${result.innerText}`
  tooltip.classList.add('show')
  setTimeout(function () {
    tooltip.classList.remove('show')
  }, 1000)
})

inputLength.addEventListener('input', function () {
  length = this.value;
  textLength.innerText = length
});

checkNumber.addEventListener('change', function () {
  isCheckNumber = this.checked
})

checkLetter.addEventListener('change', function () {
  isCheckLetter = this.checked
})

checkSymbol.addEventListener('change', function () {
  isCheckSymbol = this.checked
})


const button = document.querySelector('.btn-generate')
button.addEventListener('click', function () {
  let letter = ''
  const MIXED = []
  if (isCheckNumber) {
    MIXED.push(NUMBERS)
  }
  if (isCheckLetter) {
    MIXED.push(LETTERS)
  }
  if (isCheckSymbol) {
    MIXED.push(SYMBOLS)
  }
  if (MIXED.length === 0) {
    result.innerText = 'Please choose patten to generate password'
    return
  }
  for (let index = 0; index < length; index++) {
    const mixedIndex = Math.round(Math.random() * (MIXED.length - 1))
    const patten = MIXED[mixedIndex]

    const pattenIndex = Math.round(Math.random() * (patten.length - 1))
    const newLetter = patten[pattenIndex]
    letter += newLetter
  }
  result.innerText = letter

})
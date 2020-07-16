const answerOne = document.getElementById('answerOne')
const answerTwo = document.getElementById('answerTwo')
const answerThree = document.getElementById('answerThree')
const answerFour = document.getElementById('answerFour')
const answerFive = document.getElementById('answerFive')
const answerSix = document.getElementById('answerSix')
const answerSeven = document.getElementById('answerSeven')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (answerOne.value === '' || answerOne.value == null) {
    messages.push('Answer is required')
  }

  if (answerOne.value === 'B') {
    messages.push('correct')
  } else {
      messages.push('error')
    }

  if (answerTwo.value === 'A') {
    messages.push('correct')
  } else {
      messages.push('error')
    }

  if (answerThree.value === 'B') {
    messages.push('correct')
  } else {
      messages.push('error')
    }

  if (answerFour.value === 'B') {
    messages.push('correct')
  } else {
      messages.push('error')
    }

  if (answerFive.value === 'A') {
    messages.push('correct')
  } else {
      messages.push('error')
    }

  if (answerSix.value === 'G') {
    messages.push('correct')
  } else {
      messages.push('error')
    }

  if (answerSeven.value === 'E') {
    messages.push('correct')
  } else {
      messages.push('error')
    }


  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})

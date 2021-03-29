let odometerDiv = document.getElementById('odometer')
odometerDiv.innerHTML = ''

let firstNum = document.createElement('div')
firstNum.classList.add('first-num')


for (let i = 1; i < 10; i++) {
  let tempDiv = document.createElement('div')
  tempDiv.innerHTML = i
  firstNum.appendChild(tempDiv)
}

odometerDiv.appendChild(firstNum)






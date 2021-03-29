let odometerDiv = document.getElementById('odometer')
odometerDiv.innerHTML = ''

let inputDiv = document.getElementById('input')
inputDiv.innerHTML = ''

let inputComponent = document.createElement('input')
inputDiv.appendChild(inputComponent)
inputComponent.type = 'number'


let odometerWidth = 210; // pixels
let odometerHeight = 40; // pixels
let odometerFontSize = 30; // pixels
let odometerLength = Math.floor(odometerWidth / odometerFontSize) * 2
let odometerArray = Array(odometerLength).fill(0)




odometerDiv.style.width = `${odometerWidth}px`
odometerDiv.style.height = `${odometerHeight}px`
odometerDiv.style.fontSize = `${odometerFontSize}px`



for (let idx = 0; idx < odometerLength; idx++) {
  let el = document.createElement('div')
  el.classList.add('num')
  

  for (let num = 0; num < 10; num++) {  
    let tempEl = document.createElement('div')
    tempEl.innerHTML = num
    el.appendChild(tempEl)
  }
  // console.log(el)
  
  odometerDiv.appendChild(el)
}








inputComponent.addEventListener('change', e => {
  let number = e.target.value.split('')
  let numLength = e.target.value.length
  let numDivs = document.getElementsByClassName('num');
  
  Array.from(numDivs).forEach((numDiv, idx) => {
    if (idx < odometerLength - numLength) {
      numDiv.style.marginTop = `${0}%`
    } else {
      numDiv.style.marginTop = `${-16.1556 * parseInt(number[numLength - (odometerLength - idx)])}%`
    }
  })
})














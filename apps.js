const inputValue = document.getElementById("value")
const reference = document.getElementById("reference")
const result = document.getElementById("result")

function add(){
    let calc = Number(result.innerText) + Number(inputValue.value)
    result.innerText = calc
    let message = 'added' + " " + inputValue.value
    reference.innerText = message
}

function subtract(){
    let calc = Number(result.innerText) - Number(inputValue.value)
    result.innerText = calc
    let message = 'subtracted' + " " + inputValue.value
    reference.innerText = message
}

function multiplied(){
    let calc = Number(result.innerText) * Number(inputValue.value)
    result.innerText = calc
    let message = 'multiplied by' + " " + inputValue.value
    reference.innerText = message
}

function divide(){
    let calc = Number(result.innerText) / Number(inputValue.value)
    result.innerText = calc
    let message = 'divided with' + " " + inputValue.value
    reference.innerText = message
}

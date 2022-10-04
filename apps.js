var form = document.getElementById('calculator')


form.addEventListener('submit', function(event){
    event.preventDefault()
    let value = document.getElementById('value').value
})

let result = document.getElementById("result").innerHTML


form.addEventListener("click",Add)
 function Add(){
    let final= result + value
    console.log(final)
}



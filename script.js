//your code here
let input = document.getElementById("evaluatedText")
let h3 = document.getElementById("letterCount")

function countChar(){
	h3.innerText = input.value.length
}
input.addEventListener("keyup", countChar)
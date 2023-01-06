//your code here
let input = document.querySelector("#input");
let h3 = document.querySelector("#heading");
let lcount = 0;

function count() {
    lcount++;
    h3.innerText = lcount;
    if(input.value=="") {
        h3.innerText = 0;
    }
}

function back() {
    input.addEventListener('keydown', function(event) {
        const key = event.key;
        if (key === "Backspace") {
            lcount = input.value.length-2;
        }
    });
}
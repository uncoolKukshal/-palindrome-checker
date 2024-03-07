let input = document.getElementById("input");
let btn = document.getElementById("btn");
let output = document.querySelector(".output");
btn.addEventListener("click",()=>{
    let value = input.value.toLowerCase().replace(/[^a-z0-9]/g,'');
    console.log(value);
    if (value === "") {
        output.innerHTML = `Type something first`;
    }
    else if(palindrome(value)==true) {
        output.innerHTML = `Yes,<strong>'${value}'</strong> is a palindrome`;
    } else {
        output.innerHTML = `No,<strong>'${value}'</strong> is not a palindrome`;
    }
})
// logic of palindrome
function palindrome(string) {
   return string === string.split('').reverse().join('')
}
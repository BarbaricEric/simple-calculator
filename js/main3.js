const number = document.form.textview;

/* Input Values */
function insert(num) {
 if (number) {
 return number.value += '' + num;
 }
}

/* Equal Behavior */
function equal() {
 if(number.value) {
  eval(`number.value = ${number.value}`);
 }
}

/* Clear Behavior */
function clearForm() {
 number.value = ''; 
}

/* Delete Behavior */
document.getElementById("backbutton").addEventListener("click", () => { 
  number.value = number.value.slice(0, number.value.length -1);
})


/* Testing Behavior
function back() {
  return number.value = number.toString().substring(0, number.length - 1); 
}

document.getElementById("backbutton").addEventListener("click", () => { 
  number.value = number.toString().substring(0, number.length - 1);
})*/


let textBox = document.getElementById("textbox");
let button = document.getElementById("submitButton");
let textChange = document.getElementById("textChange");

button.addEventListener('click', function(){
  let text = textBox.value;

  console.log(text);
  textChange.textContent = text;
})

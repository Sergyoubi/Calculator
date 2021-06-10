
let sum = document.querySelector('.add-btn');
let sub = document.querySelector('.sub-btn');
let mult = document.querySelector('.mult-btn');
let div = document.querySelector('.div-btn');
let reload = document.querySelector('.refresh-btn');

sum.addEventListener('click', function(){
  let value1 = parseInt(document.querySelector('.input1').value)
  let value2 = parseInt(document.querySelector('.input2').value)
  let result = document.querySelector('.result p');
  result.textContent = value1 + value2;

})

sub.addEventListener('click', function(){
  let value1 = parseInt(document.querySelector('.input1').value)
  let value2 = parseInt(document.querySelector('.input2').value)
  let result = document.querySelector('.result p');
  result.textContent = value1 - value2;

})

mult.addEventListener('click', function(){
  let value1 = parseInt(document.querySelector('.input1').value)
  let value2 = parseInt(document.querySelector('.input2').value)
  let result = document.querySelector('.result p');
  result.textContent = value1*value2;

})

div.addEventListener('click', function(){
  let value1 = parseInt(document.querySelector('.input1').value)
  let value2 = parseInt(document.querySelector('.input2').value)
  let result = document.querySelector('.result p');
  result.textContent = value1/value2;

})

reload.addEventListener('click', ()=>{
  location.reload();
})
function add(){
  let a=parseInt(document.getElementById('num1').value);
  let b=parseInt(document.getElementById('num2').value);
  let res=a+b;
  document.getElementById('res').value=res;
}
function sub(){
  let a=parseInt(document.getElementById('num1').value);
  let b=parseInt(document.getElementById('num2').value);
  let res=a-b;
  document.getElementById('res').value=res;
}
function mul(){
  let a=parseInt(document.getElementById('num1').value);
  let b=parseInt(document.getElementById('num2').value);
  let res=a*b;
  document.getElementById('res').value=res;
}
function div(){
  let a=parseInt(document.getElementById('num1').value);
  let b=parseInt(document.getElementById('num2').value);
  if(b==0)
{
  alert('Divide by zero is error!');
}
else{
  let res=a/b;
  document.getElementById('res').value=res;
}
}
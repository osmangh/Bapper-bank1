document.getElementById('deposit-button').addEventListener('click',function (){
  const depositInput=document.getElementById('deposit-input');
 const depositInputTotal=depositInput.value;
 //for addition purpose
 const depositInputAdd =parseFloat(depositInputTotal)

 const depositTotal=document.getElementById('deposit-total');
 const depositTotalText=depositTotal.innerText;

 //for addition purpose
 const Add=parseFloat(depositTotalText);
 
//total Input sum
 depositTotal.innerText=Add+depositInputAdd
 //final balance addition
 const balanceTotal=document.getElementById('balance-total');
 const balanceTotalText=balanceTotal.innerText;
 const balanecTotalAmount=parseFloat(balanceTotalText);
 balanceTotal.innerText=balanecTotalAmount+depositInputAdd;
 //clear input value

 depositInput.value='';
})
//withdraw system handle 
document.getElementById('withdraw-button').addEventListener('click',function(){
  const withdrawInput=document.getElementById('withdraw-input');
  const withdrawInputText=withdrawInput.value;
  const withdrawAmout=parseFloat(withdrawInputText);
  const withdrawTotal=document.getElementById('withdraw-total');
  const withdrawAmount=withdrawTotal.innerText;
  const withdrawTotalAmount=parseFloat(withdrawAmount);
  withdrawTotal.innerText=withdrawAmout+withdrawTotalAmount;
  withdrawInput.value='';
  //final task
  const withdrawBalaceTotal=document.getElementById('balance-total');
  const withdrawBalane= withdrawBalaceTotal.innerText;
  const withdraTotal=parseFloat(withdrawBalane);
  withdrawBalaceTotal.innerText=withdraTotal-withdrawAmout;
})
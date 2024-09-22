
// const balance = document.getElementById('balance').innerText;
// const firstCoinShow = document.getElementById('first-coin-show').innerText;
// const firstInputField = document.getElementById('first-input-field').innerText;
// const firstDonateBtn = document.getElementById('first-donate-btn').innerText;


document.getElementById('first-donate-btn').addEventListener('click', function(){

  const firstInputField = Number(document.getElementById('first-input-field').value);
  console.log( firstInputField);

  if(isNaN(firstInputField) || firstInputField <=0){
    alert("Give only number degit");
    return;
  }

  const firstCoinShow = Number(document.getElementById('first-coin-show').innerText);
  const balance = Number(document.getElementById('balance').innerText);


  const firstTotalCoin = firstCoinShow + firstInputField;
  const firstBalance = balance - firstInputField;

  console.log(firstTotalCoin);

  const firstCoinElement = document.getElementById('first-coin-show');
  firstCoinElement.innerText = firstTotalCoin;

  const firstBalanceElement =document.getElementById('balance');
  firstBalanceElement.innerText = firstBalance;

  const welcome = document.getElementById('congrates');
  welcome.classList.remove('hidden');



})

document.getElementById('congrates').addEventListener('click', function(){
  const welcome = document.getElementById('congrates');
  welcome.classList.add('hidden');
})

// 2nd Donate

document.getElementById('sec-donate-btn').addEventListener('click', function(){

  const secInputField = Number(document.getElementById('sec-input-field').value);
  console.log( secInputField);

  if(isNaN(secInputField) || secInputField <=0){
    alert("Give only number degit");
    return;
  }

  const secCoinShow = Number(document.getElementById('sec-coin-show').innerText);
  const balance = Number(document.getElementById('balance').innerText);


  const secTotalCoin = secCoinShow + secInputField;
  const secBalance = balance - secInputField;

  console.log(secTotalCoin);

  const secCoinElement = document.getElementById('sec-coin-show');
  secCoinElement.innerText = secTotalCoin;

  const secBalanceElement =document.getElementById('balance');
  secBalanceElement.innerText = secBalance;

  const welcome = document.getElementById('congrates');
  welcome.classList.remove('hidden');
  // input Zero
  const zero = document.getElementById('sec-input-field');
  zero.value = '';

})

// 3rd Donate

document.getElementById('last-donate-btn').addEventListener('click', function(){

  const lastInputField = Number(document.getElementById('last-input-field').value);
  console.log( lastInputField);

  if(isNaN(lastInputField) || lastInputField <= 0){
    alert("Give only number degit");
    return;
  }

  const lastCoinShow = Number(document.getElementById('last-coin-show').innerText);
  const balance = Number(document.getElementById('balance').innerText);


  const lastTotalCoin = lastCoinShow + lastInputField;
  const lastBalance = balance - lastInputField;

  console.log(lastTotalCoin);

  const lastCoinElement = document.getElementById('last-coin-show');
  lastCoinElement.innerText = lastTotalCoin;

  const lastBalanceElement =document.getElementById('balance');
  lastBalanceElement.innerText = lastBalance;

  const welcome = document.getElementById('congrates');
  welcome.classList.remove('hidden');

  // input Zero
  const zero = document.getElementById('last-input-field');
  zero.value = '';
  
})

// Blog Page 

document.getElementById('blog').addEventListener('click', function(){
   window.location.href='./blog.html'
})

// const balance = document.getElementById('balance').innerText;
// const firstCoinShow = document.getElementById('first-coin-show').innerText;
// const firstInputField = document.getElementById('first-input-field').innerText;
// const firstDonateBtn = document.getElementById('first-donate-btn').innerText;

// Call Function for Value

function donateCall(id){
  const dvalue = Number(document.getElementById(id).value);
  return dvalue;
}

// Call Function for innerText
function dinnerTextCall(id){

  // const balance = Number(document.getElementById('balance').innerText);

  const dinnerText = Number(document.getElementById(id).innerText);
  return dinnerText;
}


// ------------------------[1st Donate]------------------------

document.getElementById('first-donate-btn').addEventListener('click', function(){

  const firstInputField = donateCall('first-input-field')
  console.log( firstInputField);
  const balance = dinnerTextCall('balance');

  if(isNaN(firstInputField) || firstInputField <=0 || firstInputField > balance){
    alert("Give only number degit");
    return;
  }

  const firstCoinShow = dinnerTextCall('first-coin-show');
  // const balance = Number(document.getElementById('balance').innerText);


  const firstTotalCoin = firstCoinShow + firstInputField;
  const firstBalance = balance - firstInputField;

  console.log(firstTotalCoin);

  const firstCoinElement = document.getElementById('first-coin-show');
  firstCoinElement.innerText = firstTotalCoin.toFixed(2);

  const firstBalanceElement =document.getElementById('balance');
  firstBalanceElement.innerText = firstBalance.toFixed(2);

  const welcome = document.getElementById('congrates');
  welcome.classList.remove('hidden');
  welcome.classList.add('flex');



   //  history form
const lasthistory = document.getElementById('history-list')
const p = document.createElement('p');

p.classList.add(
  
  'p-5',
  'rounded-xl',
  'mb-2',
  'mx-fit',
  'border-2',
  'border-gray-200'
)

p.innerHTML = `
   <p class='mb-1 text-xl font-bold'>${firstInputField.toFixed(2)} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
   <p>${new Date()}</p>
`
lasthistory.appendChild(p);


})

document.getElementById('congrates').addEventListener('click', function(){
  const welcome = document.getElementById('congrates');
  welcome.classList.add('hidden');
})



// ------------------------[2nd Donate]------------------------

document.getElementById('sec-donate-btn').addEventListener('click', function(){

  const secInputField = donateCall('sec-input-field');
  console.log( secInputField);
  // const balance = Number(document.getElementById('balance').innerText);
  const balance = dinnerTextCall('balance')


  if(isNaN(secInputField) || secInputField <=0 || secInputField > balance){
    alert("Give only number degit");
    return;
  }

  const secCoinShow = dinnerTextCall('sec-coin-show');


  const secTotalCoin = secCoinShow + secInputField;
  const secBalance = balance - secInputField;

  console.log(secTotalCoin);

  const secCoinElement = document.getElementById('sec-coin-show');
  secCoinElement.innerText = secTotalCoin.toFixed(2);

  const secBalanceElement =document.getElementById('balance');
  secBalanceElement.innerText = secBalance.toFixed(2);

  const welcome = document.getElementById('congrates');
  welcome.classList.remove('hidden');
  welcome.classList.add('flex');



  //  history form
const lasthistory = document.getElementById('history-list')
const p = document.createElement('p');

p.classList.add(
  
  'p-5',
  'rounded-xl',
  'mb-2',
  'mx-fit',
  'border-2',
  'border-gray-200'
)

p.innerHTML = `
   <p class='mb-1 text-xl font-bold'>${secInputField.toFixed(2)} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
   <p>${new Date()}</p>
`
lasthistory.appendChild(p);
  
})

// ------------------------[3rd Donate]------------------------

document.getElementById('last-donate-btn').addEventListener('click', function(){

  const lastInputField = donateCall('last-input-field');
  console.log( lastInputField);
  const balance = dinnerTextCall('balance');
  // const balance = Number(document.getElementById('balance').innerText);


  if(isNaN(lastInputField) || lastInputField <= 0 || lastInputField > balance){
    alert("Give only number degit");
    return;
  }

  const lastCoinShow = dinnerTextCall('last-coin-show');


  const lastTotalCoin = lastCoinShow + lastInputField;
  const lastBalance = balance - lastInputField;

  console.log(lastTotalCoin);

  const lastCoinElement = document.getElementById('last-coin-show');
  lastCoinElement.innerText = lastTotalCoin.toFixed(2);

  const lastBalanceElement =document.getElementById('balance');
  lastBalanceElement.innerText = lastBalance.toFixed(2);

  const welcome = document.getElementById('congrates');
  welcome.classList.remove('hidden');
  welcome.classList.add('flex');



//  history form
const lasthistory = document.getElementById('history-list')
const p = document.createElement('p');

p.classList.add(
  
  'p-5',
  'rounded-xl',
  'mb-2',
  'mx-fit',
  'border-2',
  'border-gray-200'
)

p.innerHTML = `
   <p class='mb-1 text-xl font-bold'>${lastInputField.toFixed(2)} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
   <p>${new Date()}</p>
`
lasthistory.appendChild(p);


  // // input Zero
  const zero = document.getElementById('last-input-field');
  zero.value = '';
  
})

// Blog Button Clicked and Go to the Page name called 'Blog'

document.getElementById('blog').addEventListener('click', function(){
   window.location.href='./blog.html'

})




// History Button Clicked and Show the ---history section 

document.getElementById('History-btn').addEventListener('click', function(){

  const DonationShow = document.getElementById('Donation-show');
  const HistoryShow = document.getElementById('History-show');
  const footerShow = document.getElementById('footer')
  
  document.getElementById('History-btn').classList.add('bg-lime-300');
  document.getElementById('History-btn').classList.remove('border-solid', 'border-2');
  document.getElementById('Donation-btn').classList.add('border-solid', 'border-2');
  document.getElementById('Donation-btn').classList.remove('bg-lime-300');

  DonationShow.classList.add('hidden');
  HistoryShow.classList.remove('hidden');
  footerShow.classList.add('hidden')

  console.log("click History Button");

})

document.getElementById('Donation-btn').addEventListener('click', function(){

  const DonationShow = document.getElementById('Donation-show');
  const HistoryShow = document.getElementById('History-show');
  const footerShow = document.getElementById('footer')


  document.getElementById('Donation-btn').classList.add('border-solid', 'border-2', 'bg-lime-300');
  document.getElementById('Donation-btn').classList.remove('border-solid', 'border-2');
  document.getElementById('History-btn').classList.remove('bg-lime-300');
  document.getElementById('History-btn').classList.add('border-solid', 'border-2');


  DonationShow.classList.remove('hidden');
  HistoryShow.classList.add('hidden');
  footerShow.classList.remove('hidden')


})
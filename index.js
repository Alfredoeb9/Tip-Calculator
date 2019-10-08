const calcBtn = document.querySelector('#calculate')


calcBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  let billAmt = document.getElementById('bill').value
  console.log(billAmt);
  
})

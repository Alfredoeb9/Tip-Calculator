const calcBtn = document.querySelector('#calculate')


calcBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  let billAmt = document.getElementById('bill').value
  let serviceOpt = document.getElementById('serviceOpt').value
  let tipPlaceholder = document.getElementById('tip')

  let total = billAmt * serviceOpt

  tipPlaceholder.style.display = 'block'

  tipPlaceholder.innerText = total
  console.log(billAmt * serviceOpt);
  console.log(serviceOpt);
  
})

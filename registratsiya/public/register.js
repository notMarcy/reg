const register = document.querySelector('.register');

register.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const username = document.querySelector('.register>#username').value
  const password = document.querySelector('.register>#password').value
  const age = document.querySelector('.register>#age').value
  const country = document.querySelector('.register>#country').value
  const data = { username, password, age, country}

  const response = await fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  const result = await response.text();
  console.log(result);
  document.querySelector('.register>#username').value = ''
  document.querySelector('.register>#password').value = ''
  document.querySelector('.register>#age').value = ''
  document.querySelector('.register>#country').value = ''
})

const inputs = document.querySelectorAll('.register>input')
inputs[0].addEventListener('click', (e)=>{
  e.preventDefault();
  inputs[0].classList.toggle('hover');
})
inputs[1].addEventListener('click', (e)=>{
  e.preventDefault();
  inputs[1].classList.toggle('hover');
})
inputs[2].addEventListener('click', (e)=>{
  e.preventDefault();
  inputs[2].classList.toggle('hover');
})
inputs[3].addEventListener('click', (e)=>{
  e.preventDefault();
  inputs[3].classList.toggle('hover');
})
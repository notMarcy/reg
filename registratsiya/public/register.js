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
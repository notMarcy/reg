const login = document.querySelector('.login');

export default async function LoginFunc() {
   
    const username = document.querySelector('.login>#username').value
    const password = document.querySelector('.login>#password').value
    const data = { username, password }
  
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  
    const result = await response.text();
    console.log(result);
    document.querySelector('.login>#username').value = ''
    document.querySelector('.login>#password').value = ''

    return alert("Вы успешно вошли!")

}
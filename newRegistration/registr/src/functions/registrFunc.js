const register = document.querySelector('.register');

export default async function RegisterFunc() {
        
        const username = document.querySelector('.register>#username').value
        const password = document.querySelector('.register>#password').value
        const age = document.querySelector('.register>#age').value
        const country = document.querySelector('.register>#country').value
        console.log(username)
        const data = { username, password, age, country}
      
        const response = await fetch( 'http://localhost:3003', {
          method: 'POST',
          // mode: 'cors',
          // credentials: 'include',
          headers: {
            // 'Access-Control-Allow-Origin':'*',
            // 'Access-Control-Allow-Credentials': true,
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

    return alert("Вы успешно вошли!")

}
import RegistrFunc from './functions/registrFunc'
import './styles/reg.css'
export default function RegistrPage(){
    
    const handleSubmit = (event) => {
        RegistrFunc();
        event.preventDefault();
    };

    return(
        <div className='regForm'>
        <h1>Registration</h1>
        <form action="http://localhost:3003" method="POST" className="register" onSubmit={handleSubmit}>
            <input type="text" placeholder="username" name="username" id="username" required /><br />

            <input type="current-password" placeholder="password" name="password" id="password" required /><br />

            <input type="number" placeholder="age" name="age" id="age" required /><br />

            <input type="text" placeholder="country" name="country" id="country" required /><br />

            <input type="submit" id="submit" value="Register" className='button'/>
         </form>
    </div>
    )
}
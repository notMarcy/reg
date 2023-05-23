import RegistrFunc from './functions/registrFunc'

export default function RegistrPage(){
    
    const handleSubmit = (event) => {
        RegistrFunc();
        event.preventDefault();
    };

    return(
        <div>
        <h1>Registration</h1>
        <form action="http://localhost:3003" method="POST" className="register" onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" placeholder="username" name="username" id="username" required /><br />

            <label htmlFor="password">Password:</label>
            <input type="current-password" placeholder="password" name="password" id="password" required /><br />

            <label htmlFor="age">Age:</label>
            <input type="number" placeholder="age" name="age" id="age" required /><br />

            <label htmlFor="country">Country:</label>
            <input type="text" placeholder="country" name="country" id="country" required /><br />

            <input type="submit" id="submit" value="Register" />
         </form>
    </div>
    )
}
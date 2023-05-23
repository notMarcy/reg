import React from "react";
import LoginFunc from './functions/loginFunc';
import "./styles/login.css"
import "./pct/poker.png"
export default function LoginPage() {
    const handleSubmit = (event) => {
        LoginFunc();
        event.preventDefault();
    };
    

    return(
        <div className="loginForm">
            <h1>Login</h1>
            <form action="/login" method="POST" className="login" onSubmit={handleSubmit}>
                
                <input type="text" placeholder="Username" name="username" id="username" required /><br />

                
                <input type="password" placeholder="Password" name="password" id="password" required /><br />

                <input type="submit" value="Login"  className="button"/>
            </form>
        </div>
    )
    
}
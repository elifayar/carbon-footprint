import React, {useState} from "react"

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    const handleLogin = (e) => {
        e.preventDefault();
        // After authentication logic:
        props.onLogin();
      };

    return (
        <div className="auth-form-container">
            <h1>
                CARBON FOOTPRINT
            </h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail</label>
                <input value={email} onChange ={(e) => setEmail(e.target.value)}type="email" placeholder="your.email@gmail.com"/>
                <label htmlFor="password">Password</label>
                <input value={password} onChange ={(e) => setPassword(e.target.value)}type="password" placeholder="********" id="password" name="email"/>
                <button onClick={handleLogin}>Login</button>
            </form>
            <button className="link-button" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here!</button>
        </div>
    )
}   
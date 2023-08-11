import React, {useState} from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    
    return (
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input value={name} onChange = {(e) => setName(e.target.value)}type="name" placeholder="name" id="name" name="name"/>
                <label htmlFor="email">E-mail</label>
                <input value={email} onChange ={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com"/>
                <label htmlFor="password">Password</label>
                <input value={password} onChange ={(e) => setPassword(e.target.value)}type="password" placeholder="********" id="password" name="email"/>
                <button onClick={() => props.onFormSwitch('login')}>Register </button>
            </form>
        </div>
        )
    }
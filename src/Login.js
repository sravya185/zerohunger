import React from 'react';
import Contact from './Contact';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="Header">
                <p>Login</p>
                <div className="division">
                    <form className="ui form segment">
                        <div className="field">
                            <label>E-mail</label>
                            <input placeholder="E-mail" name="E-mail" type="text" />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input placeholder="password" name="password" type="password" />
                        </div>
                        <button className="ui primary submit button" onClick={()=>{navigate('/Volunteer')}}>Submit</button>
                    </form>
                </div>
            </div>
            <Contact />
        </div>
    );
};

export default Login;
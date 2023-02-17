import React from 'react';
import './App.css';
import Contact from './Contact';

const Register = () => {
    return (
        <div>
            <div className="Header" style={{marginBottom:'60px',}}>
                <p>Registration</p>
                <div className="division">
                    <form className="ui form segment">
                        <div className="two fields">
                            <div className="field">
                                <label>Name</label>
                                <input placeholder="First Name" name="name" type="text" />
                            </div>
                            <div className="field">
                                <label>Gender</label>
                                <div className="ui selection dropdown">
                                    <input name="gender" type="hidden" />
                                    <div className="default text">Gender</div>
                                    <i className="dropdown icon"></i>
                                    <div className="menu">
                                        <div className="item" data-value="male">Male</div>
                                        <div className="item" data-value="female">Female</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="two fields">
                            <div className="field">
                                <label>E-mail</label>
                                <input placeholder="E-mail" name="E-mail" type="text" />
                            </div>
                            <div className="field">
                                <label>Phone number</label>
                                <input placeholder="Phone number" name="phone number" type="text" />
                            </div></div>
                        <div className="two fields">
                            <div className="field">
                                <label>Password</label>
                                <input name="password" type="password" />
                            </div>
                            <div className="field">
                                <label>Confirm Password</label>
                                <input name=" Confirm password" type="password" />
                            </div>
                        </div>
                        <div className="inline field">
                            <div className="ui checkbox">
                                <input name="terms" type="checkbox" />
                                <label>I agree to the terms and conditions</label>
                            </div>
                        </div>
                        <div className="ui primary submit button">Submit</div>
                    </form>
                </div>
            </div>
            <Contact />
        </div>
    );
};

export default Register;
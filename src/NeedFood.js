import React from 'react';
import Contact from './Contact';
import NeedFoodposter from './Images/NeedFoodposter.jpeg';

const NeedFood = () => {
    return (
        <>
            <div className="display-section">
                <img src={NeedFoodposter} width="1550" height="450" /><br></br>
                <i class="chevron right icon"></i>
            </div>
            <div className="row">
                <div className="mno">
                    <p className='ptag'>Far too many people in the world are hungry. Hunger is an epidemic that can easily be solved with
                        resource distribution.<br></br><br></br>Some people can help to save lives during emergencies or give children
                        nutritious meals in school.So Don't Worry to ask food when you need.
                    </p>
                    <h3 className="h3tag"><a style={{color:'black'}}>Please Inform us.</a></h3><br></br>
                </div>
            </div><br></br>
            <div className="Header">
                <h3 className='h3tag-details'>Your Contact Details</h3><br></br>
                <form className="ui form">
                    <h4 className="ui dividing header">Personal Information</h4>
                    <div className="field">
                        <label>Name</label>
                        <div className="two fields">
                            <div className="field">
                                <input type="text" name="shipping[first-name]" placeholder="First Name" style={{ borderColor: 'black' }} />
                            </div>
                            <div className="field">
                                <input type="text" name="shipping[last-name]" placeholder="Last Name" style={{ borderColor: 'black' }} />
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label>Address</label>
                        <div className="fields">
                            <div className="twelve wide field">
                                <input type="text" name="shipping[address]" placeholder="Street Address" style={{ borderColor: 'black' }} />
                            </div>
                            <div className="four wide field">
                                <input type="text" name="shipping[address-2]" placeholder="City" style={{ borderColor: 'black' }} />
                            </div>
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>State</label>
                            <select className="ui fluid dropdown" style={{ borderColor: 'black' }}>
                                <option value="" >State</option>
                                <option value="AR">Arunachal Pradesh</option>
                                <option value="AP">Andhra Pradesh</option>
                                <option value="AS">Assam</option>
                                <option value="Bi">Bihar</option>
                                <option value="ch">Chattisgarh</option>
                                <option value="GO">Goa</option>
                                <option value="Gu">Gujarat</option>
                                <option value="ha">Haryana</option>
                                <option value="He">Himachal Pradesh</option>
                                <option value="Jh">Jharkhand</option>
                                <option value="Ma">Maharastra</option>
                                <option value="Na">Nagaland</option>
                                <option value="pu">Punjab</option>
                                <option value="Si">Sikkim</option>
                                <option value="Tm">Tamil Nadu</option>
                                <option value="Te">Telangana</option>
                                <option value="ut">Uttarakhand</option>
                                <option value="Wb">West Bengal</option>
                            </select>
                        </div>
                        <div className="field">
                            <label>Country</label>
                            <select className="ui fluid dropdown" style={{ borderColor: 'black' }}>
                                <option value="">Country</option>
                                <option value="af">Afghanistan</option>
                                <option value="Ax">Aland Islands</option>
                                <option value="Al">Albania</option>
                                <option value="Au">Australia</option>
                                <option value="As">Austria</option>
                                <option value="Ba">Bahamas</option>
                                <option value="be">Beligium</option>
                                <option value="bt">Bhutan</option>
                                <option value="bz">Brazil</option>
                                <option value="kh">Cambodia</option>
                                <option value="ca">Canada</option>
                                <option value="co">Congo</option>
                                <option value="cu">cuba</option>
                                <option value="dk">Denmark</option>
                                <option value="fr">France</option>
                                <option value="ge">Germany</option>
                                <option value="hk">Hong Kong</option>
                                <option value="hu">Hungary</option>
                                <option value="is">Iceland</option>
                                <option value="IND">India</option>
                                <option value="JAP">Japan</option>
                                <option value="ke">Kenya</option>
                                <option value="li">Libya</option>
                                <option value="My">Malaysia</option>
                                <option value="Mv">Maldhives</option>
                                <option value="za">South Africa</option>
                                <option value="kr">South Korea</option>
                                <option value="sz">Switzerland</option>
                                <option value="Tu">Turkey</option>
                                <option value="ua">Ukraine</option>
                                <option value="uae">United Arab Emirates</option>
                                <option value="USA">United States of America</option>
                                <option value="vn">Vietnam</option>
                                <option value="zw">Zimbabwe</option>
                            </select>
                        </div>
                    </div><br></br>
                    <div class="ui button" tabindex="0" style={{ color: 'white', marginBottom: '20px' ,backgroundColor:'#007dbc'}}>Submit</div><br></br>
                </form>
            </div>
            <Contact />
        </>
    )
};

export default NeedFood;
import React from 'react';

const Details = () => {
    return (
        <div>
            <div className="Header">
                <h3>Your contact details</h3><br></br>
                <div>
                    <form className="ui form">
                        <h4 className="ui dividing header">Personal Information</h4>
                        <div className="field">
                            <label>Name</label>
                            <div className="two fields">
                                <div className="field">
                                    <input type="text" name="shipping[first-name]" placeholder="First Name" />
                                </div>
                                <div className="field">
                                    <input type="text" name="shipping[last-name]" placeholder="Last Name" />
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label>Address</label>
                            <div className="fields">
                                <div className="twelve wide field">
                                    <input type="text" name="shipping[address]" placeholder="Street Address" />
                                </div>
                                <div className="four wide field">
                                    <input type="text" name="shipping[address-2]" placeholder="City" />
                                </div>
                            </div>
                        </div>
                        <div className="two fields">
                            <div className="field">
                                <label>State</label>
                                <select className="ui fluid dropdown">
                                    <option value="">State</option>
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
                                <select className="ui fluid dropdown">
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
                        </div>

                    </form>
                </div>
                <h4>Phone Number</h4>
                <div class="ui labeled input">
                    <div class="ui label">
                        +91
                    </div>
                    <input type="text" style={{ width: "280px" }} placeholder="Phone number" />
                </div>
                <h4>Food Sufficiency:</h4>
                <div class="ui right labeled input">
                    <input type="text" placeholder="Food sufficient for.." />
                    <div class="ui basic label">
                        in persons
                    </div>
                </div>
                <br></br><br></br>
                <div class="ui toggle checkbox">
                    <input type="checkbox" name="public" />
                    <label>We are happy with our donation</label>
                </div>
                <br></br><br></br>
                <button class="ui primary button">
                    Donate</button>
            </div>

        </div>
    );
};

export default Details;
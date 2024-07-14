// import './ContactForm.css'
import './GiveForm.css'
import React, { useState } from 'react';

import visaLogo from './visa_card_dropdown_logo.png';
import mastercardLogo from './mastercard_card_dropdown_logo.png';
import amexLogo from './amex_card_dropdown_logo.png';
import discoverLogo from './discover_card_dropdown_logo.png'

import PegasusComponent from '../../components/home-page/PegasusComponent/PegasusComponent'
// import PegasusComponent from './components/home-page/PegasusComponent/PegasusComponent';


const GiveComponent = () => {
  const [formState, setFormState] = useState({
    amount:``,
    creditCardNumber:``,
    cvv:``,
    mm:``,
    yyyy:``,

    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    zipCode:``,
    city:``,
    stateOrProvince:``,
    
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here, such as sending to an API
    // console.log(formState);
  };

  return (
    <>
      <PegasusComponent />
      <div className='contact-form'>
        
        <h2>Give</h2>
        {/* <h4>You can also Zelle to Rccgrestorationtemple@gmail.com</h4> */}
        <h3></h3>

        <form onSubmit={handleSubmit}>
          <label>
            Amount($):
            <input 
              type="tel"
              name="amount"
              value={formState.amount}
              onChange={handleInputChange}
            />
          </label>
          <label>
            CREDIT/DEBIT CARD INFORMATION
            <input
              type="tel"
              name="creditCardNumber"
              placeholder='Credit card number'
              value={formState.creditCardNumber}
              onChange={handleInputChange}
              autoComplete='cc-number'
            />
            <input 
              type="password"
              name="cvv"
              maxLength={3}
              placeholder="CVV"
              value={formState.cvv}
              onChange={handleInputChange}
            />

            <div class="give-logos-container">
              <div class="logos">
                <div>
                  <img src={visaLogo} alt="visaLogo" />
                </div>
                <div>
                  <img src={mastercardLogo} alt="mastercardLogo"/>
                </div>
                <div>
                  <img src={amexLogo} alt="amexLogo"/>
                </div>
                <div>
                  <img src={discoverLogo} alt="discoverLogo"/>
                </div>
              </div>
            </div>
            {/* <img src={}/> */}
            <div class="date-container">
              <input 
                type="number"
                name="mm"
                autoComplete='off'
                maxLength={2}
                placeholder='MM'
                value={formState.mm}
                onChange={handleInputChange}
              />
              <input 
                type="number"
                name="yyyy"
                autoComplete='off'
                maxLength={4}
                placeholder="YYYY"
                value={formState.yyyy}
                omChange={handleInputChange}
              />
            </div>
            
          </label>
          <label>
            BILLING ADDRESS
            <input
              type="text"
              name="firstName"
              placeholdeer="First Name"
              value={formState.firstName}
              onChange={handleInputChange}
            />
            <input 
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formState.lastName}
              onChange={handleInputChange}
            />

            <input 
              type="text"
              name="Address 1"
              placeholder="Address 1"
              autoComplete='address-line1'
              value={formState.address1}
              onChange={handleInputChange}
            />
            <input 
              type="text"
              name="Address 2"
              placeholder="Address 2"
              autoComplete="address-line2"
              value={formState.address2}
              onChange={handleInputChange}
            />
            <input 
              type="tel"
              name="zipCode"
              maxLength={5}
              placeholder="ZIP Code"
              autoComplete='postal-code'
              value={formState.zipCode}
              onChange={handleInputChange}
            />
            <input 
              type="text"
              name="city"
              placeholder="City"
              autoComplete='address-level2'
              value={formState.city}
              onChange={handleInputChange}
            />
            <input 
              type="text"
              name="stateOrProvince"
              autoComplete='off'
              placeholder="State/Province"
              value={formState.stateOrProvince}
              onChange={handleInputChange}
            />

          </label>
          
          <label>
            Message
            <textarea
              name="message"
              value={formState.message}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default GiveComponent;

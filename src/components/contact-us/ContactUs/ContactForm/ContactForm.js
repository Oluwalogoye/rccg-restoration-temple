import './ContactForm.css'
import React, { useState } from 'react';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    // companyName: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here, such as sending to an API
    console.log(formState);
  };

  return (
    <div className='contact-form'>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First name
          <input
            type="text"
            name="firstName"
            value={formState.firstName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last name
          <input
            type="text"
            name="lastName"
            value={formState.lastName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email*
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Phone number
          <input
            type="tel"
            name="phoneNumber"
            value={formState.phoneNumber}
            onChange={handleInputChange}
          />
        </label>
        {/* <label>
          Company name
          <input
            type="text"
            name="companyName"
            value={formState.companyName}
            onChange={handleInputChange}
          />
        </label> */}
        <label>
          Message
          <textarea
            name="message"
            value={formState.message}
            onChange={handleInputChange}
          />
        </label>
        <button  type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;

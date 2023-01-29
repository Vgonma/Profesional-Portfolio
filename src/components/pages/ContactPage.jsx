import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom';


  


function ContactPage() {
  const [state, handleSubmit] = useForm("mknaorkk");
  if (state.succeeded) {
      return (
        <div className="success-message">
          <h1 className="title--big">Thanks for contacting me!</h1>
          <p className="title--med"> I will respond as soon as possible.</p>
          <Link to="/contact" className="success-message-btn btn btn--outline">Return</Link>
        </div>

      );
  }
  return (
    <div className="contact-page-container">
      <div className="title-container">
        <h1 className="title title--big">Contact Me</h1>
      </div>
      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <label className="label" htmlFor="name">Name</label>
            <input className="input" type="text" name="name" placeholder="Name" required/>
            <ValidationError field="name" errors={state.errors} prefix="Name"/>
          </div>
          <div className="input-container">
            <label className="label" htmlFor="email">Email</label>
            <input className="input" type="text" name="email" placeholder="Email" required/>
            <ValidationError field="email" errors={state.errors} prefix="Email"/>
          </div>
          <div className="input-container">
            <label className="label" htmlFor="message">Message</label>
            <textarea className="text-area input" name="message" placeholder="Your message here..." cols="70" required></textarea>
            <ValidationError field="message" errors={state.errors} prefix="Message"/>
          </div>
          <button type="submit" className="contact-form-button btn btn--blue" disabled={state.submitting}>Send</button>
        </form>

      </div>
    </div>
  )
}

export default ContactPage;

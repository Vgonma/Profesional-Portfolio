import React from 'react'

function ContactPage() {
  return (
    <div className="contact-page-container">
      <div className="title-container">
        <h1 className="title title--big">Contact Me</h1>
      </div>
      <div className="contact-form-container">
        <form className="contact-form" action="mail.php">
          <div className="input-container">
            <label className="label" htmlFor="name">Name</label>
            <input className="input" type="text" name="name" placeholder="Name" required/>
          </div>
          <div className="input-container">
            <label className="label" htmlFor="email">Email</label>
            <input className="input" type="text" name="email" placeholder="Email" required/>
          </div>
          <div className="input-container">
            <label className="label" htmlFor="message">Message</label>
            <textarea className="text-area input" name="message" placeholder="Your message here..." required></textarea>
          </div>
          <button className="contact-form-button btn btn--blue">Send</button>
        </form>

      </div>
    </div>
  )
}

export default ContactPage;

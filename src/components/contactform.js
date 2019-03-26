import React from "react"
import Container from "./grid/container"
import "./contactform.sass"

const ContactForm = () => {
  return (
    <Container>
      <form
        className="contact-form"
        name="contact"
        action="/thanks"
        method="post"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input hidden name="bot-field" />
        <div className="field text-field fifty">
          <input type="text" name="name" placeholder="Your Name" />
        </div>
        <div className="field email-field fifty">
          <input type="email" name="email" placeholder="your@email.com" />
        </div>
        <div className="field select-field fifty">
          <select name="type">
            <option value="" defaultValue>
              My project is a..
            </option>
            <option value="New Website">New Website</option>
            <option value="New Web App">New Web App</option>
            <option value="WP to Static">WP to Static</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="field select-field fifty">
          <select name="budget">
            <option value="" defaultValue>
              My budget is...
            </option>
            <option value="$4000-8000">$4000-$8000</option>
            <option value="$8000-$20000">$8000-$20000</option>
            <option value="$20000+">$20000+</option>
          </select>
        </div>
        <div className="field textarea-field">
          <textarea
            name="message"
            placeholder="I am looking for someone to..."
          />
        </div>
        <div className="field submit-field">
          <button type="submit">I'm Ready</button>
        </div>
      </form>
    </Container>
  )
}

export default ContactForm

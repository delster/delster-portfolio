import React from "react"
import Container from "./container"
import styled from "styled-components"

const StyledForm = styled.form`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  :focus {
    outline: none;
  }
  input,
  select,
  textarea,
  button {
    background-color: #fff;
    margin-bottom: 2rem;
    padding: 2rem;
    width: 100%;
    border: none;
    border-radius: 1rem;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);
  }
  textarea {
    padding-bottom: 4rem;
  }
`
const StyledField = styled.div`
  padding: 0.5rem;
  flex: auto;
  flex-basis: ${props => (props.half ? "50%" : "100%")};
`
const StyledSubmitButton = styled.button`
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  background: linear-gradient(
    200deg,
    rgb(33, 212, 253) 0%,
    rgb(183, 33, 255) 100%
  );
  :focus {
    background: linear-gradient(
      20deg,
      rgb(33, 212, 253) 0%,
      rgb(183, 33, 255) 100%
    );
  }
`

const ContactForm = () => {
  return (
    <Container>
      <StyledForm
        className="contact-form"
        name="contact"
        action="/thanks"
        method="post"
        data-netlify="true"
        netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <input hidden name="bot-field" />
        <StyledField half>
          <input type="text" name="name" placeholder="Your Name" />
        </StyledField>
        <StyledField half>
          <input type="email" name="email" placeholder="your@email.com" />
        </StyledField>
        <StyledField half>
          <select name="type">
            <option value="" defaultValue>
              My project is a..
            </option>
            <option value="New Website">New Website</option>
            <option value="New Web App">New Web App</option>
            <option value="WP to Static">WP to Static</option>
            <option value="Other">Other</option>
          </select>
        </StyledField>
        <StyledField half>
          <select name="budget">
            <option value="" defaultValue>
              My budget is...
            </option>
            <option value="$4000-8000">$4000-$8000</option>
            <option value="$8000-$20000">$8000-$20000</option>
            <option value="$20000+">$20000+</option>
          </select>
        </StyledField>
        <StyledField>
          <textarea
            name="message"
            placeholder="I am looking for someone to..."
          />
        </StyledField>
        <StyledField>
          <StyledSubmitButton type="submit">I'm Ready</StyledSubmitButton>
        </StyledField>
      </StyledForm>
    </Container>
  )
}

export default ContactForm

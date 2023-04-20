import React from "react";
import "./ContactFormSection.css";

function ContactFormSection() {
  return (
    <div class="form-group">
     <div class="form-box">                     
    <div className="contact-form-section">
    <h2>Let's get connected!</h2>
    <p>It's our pleasure to have a chance to cooperate.</p>
      <form>
        
        <input type="text" id="name" name="name" placeholder= "Name *"/>
        <input type="email" id="email" name="email" placeholder= "Email *"/>

        <textarea id="message" name="message" placeholder= "Message *"></textarea>

        <input type="submit" value="Contact Us" />
      </form>
      <button className="lets-talk-button">Send Message</button>
    </div>
    </div>
    </div>
  );
}

export default ContactFormSection;

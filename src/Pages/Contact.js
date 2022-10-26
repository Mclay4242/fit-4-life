import React from "react";
import ContactCSS from "../assets/CSS/contact.module.css";
//import '../JS/index.js'

export default function Contact() {
  return (
    <>
      <div class={ContactCSS.contact__container}>
        <h1>Contact</h1>
        <form onsubmit="sendEmail(); reset(); return false">
          <h3>Get in touch</h3>
          <input type="text" id="name" placeholder="Your Name" required />
          <input type="email" id="email" placeholder="Email Adress" required />
          <textarea id="message" rows="4" placeholder="Your Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div class={ContactCSS.location}>
        <h1>Location</h1>
        <div class={ContactCSS.location__info}>
          <div class={ContactCSS.location__description}>
            <p>2635 North Main St</p>
            <p>Walnut Creek CA 94954</p>
            <p class={ContactCSS.mi}>Membership Info:</p>
            <p>(925) 280-8211</p>
            <p>wcinfo@21minutefitness.com</p>
          </div>
          <div class={ContactCSS.location__hoo}>
            <p class={ContactCSS.hoo}>Hours of Operation:</p>
            <p>Mon-Fri 6am – 8pm</p>
            <p>Sat 8am – 3pm</p>
            <p>Sun Closed</p>
          </div>
        </div>
      </div>
      <div class={ContactCSS.map__container}>
        <iframe
          title="myFrame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12590.491412949488!2d-122.07185566241779!3d37.915877204058944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808561eb7c444b0d%3A0xd27aad45faee6a57!2s21%20Minute%20Fitness!5e0!3m2!1sen!2sus!4v1665614795474!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

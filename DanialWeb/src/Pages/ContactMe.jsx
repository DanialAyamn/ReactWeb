import "../css/Contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
function ContactMe() {
  const form = useRef();
  const successMsg = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          successMsg.current.style.display = "block";
          form.current.reset();
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Error while sending the message. Please try again.");
        }
      );
  };

  return (
    <div className="ContactMe">
      <p>Contact Me page</p>
      <div className="contact-methods">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Your Name" name="name" required />
          <input type="email" placeholder="Your Email" name="email" required />
          <textarea placeholder="Your Message" name="message" required />
          <button type="submit">Send</button>
        </form>
        <div
          ref={successMsg}
          className="success-message"
          style={{ display: "none" }}
        >
          Message sent successfully!
        </div>
      </div>
    </div>
  );
}

export default ContactMe;

import React from "react";
import "../5-contact/Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import done2 from '../../animations/done2.json'
import contact from '../../animations/contact.json'
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
export default function Contact() {
  const [state, handleSubmit] = useForm("xovjooye");
  
  return (
    <section className="contact-us " >
      <h1 className="title">
        <span className="icon-mail"></span>
        Contact us
      </h1>
      <p className="subtitle">
        contact us for more information and Get notified when I publish something new 😎
      </p>
      <div className="flex" style={{justifyContent:"space-between"}}>
        <form className="" onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message:</label>
            <textarea
              required
              name="message"
              id="message"
              placeholder="message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            style={{ alignSelf: "center" }}
            className="submit"
          >
           {state.submitting?"Submitting...":"Submit"}
          </button>
        {
          state.succeeded && (

            <p className="flex" style={{  fontSize:"1.5rem",marginTop:"1.7rem"}}>
              <Lottie  animationData={done2} style={{width:"50px",height:"50px"}}/>
           Your message send successfully! 👌 </p>
           
          )
        }
        </form>
        <div className=" animation">
        <Lottie   animationData={contact} style={{width:"400px",height:"400px",translate:"10px -13px"}}/>
        
        </div>
      </div>
    </section>
  );
}

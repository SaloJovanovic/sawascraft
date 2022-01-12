import {React} from "react";
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = ({navbarLightMode}) => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_phxh3kf', 'template_8t7hrqh', e.target, 'user_PqT8TuecgcTTM4Vr6UM6R')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <>
      <div className={navbarLightMode ? 'contact-container lightMode' : 'contact-container'}>
        <h5>Contact Us</h5>
        <form onSubmit={sendEmail}>
          <input type={'text'} className={'name-input'} placeholder={'name'} name={'from_name'} />
          <input type={'email'} className={'email-input'} placeholder={'email'} name={'from_email'}/>
          <textarea rows="4" cols="50" className={'message-input'} name="message" placeholder={'Enter message here...'}></textarea>
          <input type={'submit'} className={'submit-button'} value={'SEND'} name={'message'}/>
        </form>
      </div>
    </>
  )
}

export default Contact;
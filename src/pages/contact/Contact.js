import React from "react";

import { Fade } from "react-reveal";
import Heading from "../../components/heading/Heading";
import Image from "../../components/image/Image";

import ContactImg from "../../assets/contact.svg";
import FacebookImg from "../../assets/facebook.svg";
import LinkedInImg from "../../assets/linkedin.svg";
import EmailImg from "../../assets/email.svg";

import "./contact-style.css";

export default function ContactPage(props) {
  // const [email, setEmail] = useState("");
  // const [emailInvalid, setEmailInvalid] = useState(false);

  // const [subject, setSubject] = useState("");
  // const [subjectInvalid, setSubjectInvalid] = useState(false);

  // const [message, setMessage] = useState("");
  // const [messageInvalid, setMessageInvalid] = useState(false);

  // const isEmpty = (str) => {
  //   return str.split(" ").join("").length === 0;
  // };

  // const checkEmail = (e) => {
  //   if (!isEmpty(e)) {
  //     if (e.includes("@")) {
  //       setEmailInvalid(false);
  //       return true;
  //     }
  //   }
  //   setEmailInvalid(true);
  //   return false;
  // };

  // const checkSubject = (e) => {
  //   if (!isEmpty(e)) {
  //     setSubjectInvalid(false);
  //     return true;
  //   }

  //   setSubjectInvalid(true);
  //   return false;
  // };

  // const checkMessage = (e) => {
  //   if (!isEmpty(e)) {
  //     setMessageInvalid(false);
  //     return true;
  //   }

  //   setMessageInvalid(true);
  //   return false;
  // };

  // const handleEmailChange = (e) => {
  //   checkEmail(e);
  //   setEmail(e);
  // };

  // const handleSubjectChange = (e) => {
  //   checkSubject(e);
  //   setSubject(e);
  // };

  // const handleMessageChange = (e) => {
  //   checkMessage(e);
  //   setMessage(e);
  // };

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   console.log(email, subject, message);
  // };

  const goToFacebook = () => {
    window.open("https://www.facebook.com/yonathan.cahyadi.73/");
  };

  const goToLinkedIn = () => {
    window.open("https://www.linkedin.com/in/yonathan-cahyadi/");
  };

  const sendEmail = () => {
    window.open("mailto:work.yonathancahyadi@gmail.com");
  };

  return (
    <div className="contact-page">
      <Heading className="heading">Contact</Heading>

      <div className="contact-img">
        <Image src={ContactImg} alt="contact-img.svg" />
      </div>

      <Fade cascade bottom>
        <div className="social-medias">
          <div className="facebook social-media" onClick={goToFacebook}>
            <Image src={FacebookImg} alt="facebook.svg" />
            <div className="social-media-text">Facebook</div>
          </div>

          <div className="email social-media" onClick={sendEmail}>
            <Image src={EmailImg} alt="email.svg" />
            <div className="social-media-text">
              work.yonathancahyadi@gmail.com
            </div>
          </div>

          <div className="linkedin social-media" onClick={goToLinkedIn}>
            <Image src={LinkedInImg} alt="linkedin.svg" />
            <div className="social-media-text">LinkedIn</div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

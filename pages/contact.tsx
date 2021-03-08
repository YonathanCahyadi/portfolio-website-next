import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Form from "../components/Form";
import React, { useState } from "react";
import axios from "axios";
import { ScaleBigger } from "../animations";
import { motion } from "framer-motion";
import { FadeInAndRight, FadeInAndUp } from '../animations';

const Contact: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [validEmail, setValidEmail] = useState(false);
  const [validSubject, setValidSubject] = useState(false);
  const [validMessage, setValidMessage] = useState(false);

  const [submitButtonDisable, setSubmitButtonDisable] = useState(false);

  const handleSubmitButton = async (
    evt: React.MouseEvent<HTMLButtonElement>
  ) => {
    evt.preventDefault();

    if (!validEmail || !validSubject || !validMessage) {
      alert("Please Check the Form again");
    } else {
      setSubmitButtonDisable(true);

      const { data, status } = await axios.post("/api/contact", {
        email,
        subject,
        message
      });

      if (status === 200) {
        alert("Email Sended");
        setSubmitButtonDisable(false);
      } else if (status === 500) {
        // error at server
        alert("There is some error in the Server");
        setSubmitButtonDisable(false);
      } else if (status === 400) {
        // invalid email
        alert(data.message);
        setSubmitButtonDisable(false);
      } else {
        // other error
        alert(data.message);
        setSubmitButtonDisable(false);
      }
    }
  };

  const handleEmailChange = (evt: React.FormEvent<HTMLInputElement>) => {
    const newValue = evt.currentTarget.value;

    // check if its a valid email
    setValidEmail(false);

    const validateEmail = (email: string) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };

    if (validateEmail(newValue)) setValidEmail(true);

    setEmail(newValue);
  };

  const isEmpty = (string: string) => {
    return string.length === 0 || !string.trim();
  };

  const handleSubjectChange = (evt: React.FormEvent<HTMLInputElement>) => {
    const newSubject = evt.currentTarget.value;

    setValidSubject(false);

    if (!isEmpty(newSubject)) setValidSubject(true);

    setSubject(newSubject);
  };

  const handleMessageChange = (evt: React.FormEvent<HTMLTextAreaElement>) => {
    const newMessage = evt.currentTarget.value;

    setValidMessage(false);

    if (!isEmpty(newMessage)) setValidMessage(true);

    setMessage(newMessage);
  };

  return (
    <div>
      <Navbar selected="Contact" />

      <Content>
        <div className="contact-container">
          <motion.h1 {...FadeInAndRight(0, 2, 1)}>Contact</motion.h1>
          <Form.Wrapper>

            <Form.Input
              name="email"
              placeholder="E-mail"
              value={email}
              invalid={!validEmail}
              invalidMessage="*invalid Email"
              onChange={handleEmailChange}
              animation={FadeInAndUp(0, 1, 1.3)}
            />

            <Form.Input
              name="subject"
              placeholder="Subject"
              value={subject}
              invalid={!validSubject}
              invalidMessage="*invalid Subject (cannot be empty)"
              onChange={handleSubjectChange}
              animation={FadeInAndUp(0, 1, 1.5)}
            />

            <Form.TextArea
              name="message"
              placeholder="Your Message"
              value={message}
              invalid={!validMessage}
              invalidMessage="*invalid Message (cannot be empty)"
              onChange={handleMessageChange}
              animation={FadeInAndUp(0, 1, 1.7)}
            />

            <Form.SubmitButton
              disabled={submitButtonDisable}
              name="Submit"
              onClick={handleSubmitButton}
              onHoverAnimation={ScaleBigger()}
              animation={FadeInAndUp(0, 1, 1.8)}
            />
            
          </Form.Wrapper>
        </div>
      </Content>
    </div>
  );
};

export default Contact;

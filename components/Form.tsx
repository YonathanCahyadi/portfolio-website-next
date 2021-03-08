import React from "react";
import { motion } from "framer-motion";
import { FadeInAndUp, DoNothing } from "../animations";

const Wrapper: React.FC = ({ children }) => {
  return <form className="forms">{children}</form>;
};

interface InputProps {
  invalid: boolean;
  invalidMessage: string;
  animation: object;
}

const Input: React.FC<React.HTMLProps<HTMLInputElement> & InputProps> = ({
  name,
  placeholder,
  onChange,
  value,
  invalid,
  invalidMessage,
  animation
}) => {
  return (
    <>
      {invalid && (
        <motion.sub {...FadeInAndUp(0, 0.5, 0)} className="invalid-message">
          {invalidMessage}
        </motion.sub>
      )}
      <motion.input
        {...animation}
        className="input-color"
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

const TextArea: React.FC<React.HTMLProps<HTMLTextAreaElement> & InputProps> = ({
  name,
  placeholder,
  onChange,
  value,
  invalid,
  invalidMessage,
  animation
}) => {
  return (
    <>
      {invalid && (
        <motion.sub {...FadeInAndUp(0, 0.5, 0)} className="invalid-message">
          {invalidMessage}
        </motion.sub>
      )}
      <motion.textarea
        {...animation}
        className="input-color"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

interface SubmitButtonProps {
  animation?: object;
  onHoverAnimation?: object;
}

const SubmitButton: React.FC<
  React.HTMLProps<HTMLButtonElement> & SubmitButtonProps
> = ({ name, onClick, animation, onHoverAnimation, disabled }) => {
  return (
    <motion.div {...animation}>
      <motion.button
        className="button"
        whileHover={disabled ? DoNothing : onHoverAnimation}
        onClick={onClick}
        disabled={disabled}
      >
        {name}
      </motion.button>
    </motion.div>
  );
};

export default { Wrapper, Input, TextArea, SubmitButton };

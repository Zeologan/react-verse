import React from "react";
import "./Form.css";
import ContactInfo from "../ContactInfo/ContactInfo";
import MsgForm from "../MsgForm/MsgForm";

const Form = () => {
  return (
    <div className="contact_section">
      <div className="contact_us">
        <ContactInfo/>
        <MsgForm/>
      </div>
    </div>
  );
};

export default Form;

import React, { useContext } from "react";
import "./ContactInfo.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ContactDataContext } from "../../App";

const ContactInfo = () => {
  const contactData = useContext(ContactDataContext)
  return (
    <div className="contact_info">
      <h3 style={{fontWeight:"500"}}>Contact Information</h3>
      <p style={{fontSize: "12px", lineHeight: "200%", color:"#ffffffa1"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        laboriosam!
      </p>
      <div className="contact_wrapper">
        <FaPhoneAlt className="size" />
        <ul>
          <li>{contactData.phone1}</li>
          <li>{contactData.phone2}</li>
        </ul>
      </div>
      <div className="contact_wrapper">
        <MdEmail className="size" />
        <p>{contactData.email}</p>
      </div>
      <div className="contact_wrapper">
        <FaLocationDot className="size" />
        <p>{contactData.location}</p>
      </div>
      <div className="clr"></div>
    </div>
  );
};

export default ContactInfo;

import React from "react";
import Card from "../../Components/Card";
import './index.css';

const Contact = () => {
  return (
    <div >
      <div className="cards-div">
      <Card
        title="Card Title"
        imageUrl="public/assets/images/svg/email-contact.svg"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sem non magna posuere accumsan in non felis. Nullam urna metus, aliquet fringilla aliquet luctus, imperdiet vitae dolor"
      />
      </div>
    </div>
  );
};

export default Contact;

import React from 'react';
import "../Button4/Button4.css";
import { BsArrowRight } from 'react-icons/bs';

const Button4 = () => {
  return (
    <div className="button4">
      <BsArrowRight className="right-arrow-icon" />
      <div className="button30">Save changes</div>
      <BsArrowRight className="right-arrow-icon" alt="" src="/right-arrow1.svg" />
    </div>
  );
}

export default Button4
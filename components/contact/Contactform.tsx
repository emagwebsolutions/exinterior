import React from 'react';

export const Contactform = () => {
  return (
    <div className="contactForm">
      <div className="form-group">
        <input type="text" placeholder=" " />
        <label htmlFor="">Name</label>
      </div>

      <div className="form-group">
        <input type="text" placeholder=" " />
        <label htmlFor="">Email</label>
      </div>

      <div className="form-group">
        <input type="text" placeholder=" " />
        <label htmlFor="">Subject</label>
      </div>

      <div className="form-group">
        <textarea placeholder="Message"></textarea>
      </div>

      <button>SEND</button>
    </div>
  );
};

export default Contactform;

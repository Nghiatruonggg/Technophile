import React from "react";

const ContactSection = () => {
  return (
    <>
      {/* Contact Section */}
      <div className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-8">
              <div className="wrap-contact-input">
                <div className="contact-title">
                  <h3>We would love to hear from you</h3>
                  <p className="sub-contact-title">
                    Please leave us a message or even a feedback that can make
                    us improve our services better for you guys!
                  </p>
                </div>
                <div className="contact-input">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">
                      Name<span>*</span>
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">
                      Email Address<span>*</span>
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">
                      Phone Number<span>*</span>
                    </label>
                  </div>
                </div>
                <div className="thought-input">
                  <textarea
                    className="form-control"
                    id="user-review"
                    placeholder="Your Thought"
                    rows={8}
                    defaultValue={""}
                  />
                  <label htmlFor="user-review" className="form-label" />
                </div>
                <div className="send-button">
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4">
              <div className="wrap-contact-info">
                <div className="contact-info">
                  <h3>Our Store</h3>
                  <p className="sub-contact-title">
                    Alley 53 Nguyen Ngoc Vu Street, Ha Noi
                  </p>
                  <p className="sub-contact-title">
                    Phone: 098 378 5848 <br />
                    Email: nghiatruong110700@gmail.com
                  </p>
                </div>
                <div className="contact-for-hire">
                  <h3>Contact for Hire</h3>
                  <p className="sub-contact-title">
                    We are currently available many positions and we are really
                    looking forward to have new staffs for our team!
                  </p>
                  <p className="sub-contact-title">
                    Email for Work: technophileHR@gmail.com <br />
                    Phone: 1900 2000
                  </p>
                </div>
                <div className="opening-hour">
                  <h3>Opening Hours</h3>
                  <p className="sub-contact-title">
                    Monday to Saturday: 9am - 10pm <br />
                    Sundays: 10am - 6pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;

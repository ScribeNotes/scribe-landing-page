import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const nameField = useRef();
  const emailField = useRef();
  const subjectField = useRef();
  const messageField = useRef();

  const clearFeilds = () => {
    nameField.current.value = "";
    emailField.current.value = "";
    subjectField.current.value = "";
    messageField.current.value = "";
  };

  const form = useRef();

  const handleSubmit = (e) => {
    console.log(form.current);
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERIVCE_ID,
        process.env.REACT_APP_CONTACT_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log("result", result.text);
          clearFeilds();
        },
        (error) => {
          console.log("error", error.text);
          alert("Unable to send your message, please try again later");
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              {/* <form ref={form} onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
              </form> */}
              <form
                ref={form}
                name="sentMessage"
                validate
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        ref={nameField}
                        type="text"
                        id="user_name"
                        name="user_name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        ref={emailField}
                        type="email"
                        id="user_email"
                        name="user_email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-14">
                  <div className="form-group">
                    <input
                      ref={subjectField}
                      // type="email"
                      id="subject"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                      required
                      onChange={handleChange}
                    />
                    {/* <p className="help-block text-danger"></p> */}
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    ref={messageField}
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            {/* <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div> */}
            {/* <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div> */}
            <div className="contact-item">
              <p>
                <span className="emailLabel">
                  <i className="fa fa-envelope-o"></i>{" "}
                  <p className="emailLabel">Email</p>
                </span>{" "}
                <a
                  className="emailLink"
                  href={"mailto:" + (props.data ? props.data.email : "")}
                >
                  {props.data ? props.data.email : "loading"}
                </a>
              </p>
            </div>
          </div>
          {/* <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 Issaaf Kattan React Land Page Template. Design by{" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a>
          </p>
        </div>
      </div> */}
    </div>
  );
};

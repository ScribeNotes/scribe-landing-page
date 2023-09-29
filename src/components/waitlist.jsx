import React, { useState } from "react";
import { submitGoogleForm } from "../gForm";
import emailjs from "emailjs-com";

const Waitlist = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (n) => {
    setName(n.target.value);
  };

  const handlePurposeChange = (p) => {
    setPurpose(p.target.value);
  };

  const handleJoinWaitlist = () => {
    submitGoogleForm(name, email, purpose);

    var templateParams = {
      name: name,
      email: email,
      purpose: purpose,
    };
    console.log(process.env.REACT_APP_USER_ID);
    emailjs
      .send(
        process.env.REACT_APP_SERIVCE_ID,
        process.env.REACT_APP_WAITLIST_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setEmail("");
          setName("");
          setPurpose("");
        },
        function (error) {
          alert("Unable to send your message, please try again later");
          console.log("FAILED...", error);
        }
      );

    console.log("Joined Waitlist");
  };

  return (
    <div
      id="waitlist"
      className="px-20 text-center"
      //   tab-index="-1"
      //   style="outline: none;"
    >
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2 className="about-text">Scribe is coming soon to IOS...</h2>
          <h3> Join the waitlist to for early access to our beta version</h3>
        </div>
        <div className="col-md-10 col-md-offset-1 section-title">
          <form>
            <div class="form-group">
              <label
                className="form-label2"
                //   for="exampleInputEmail1"
              >
                Name
              </label>
              <input
                value={name}
                type="text"
                class="form-control"
                id="exampleInputName1"
                placeholder="Name"
                onChange={handleNameChange}
              />
            </div>
            <div class="form-group">
              <label
                className="form-label2"
                //   for="exampleInputPassword1"
              >
                Email
              </label>
              <input
                value={email}
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Email"
                onChange={handleEmailChange}
              />
            </div>
            <div class="form-group">
              <label className="form-label2">
                What do you plan to use Scribe for?
              </label>
              <input
                value={purpose}
                class="form-control"
                // id="exampleInputPassword1"
                placeholder=""
                onChange={handlePurposeChange}
              />
            </div>
            {/* <button
            //   className="btn btn-custom2 btn-lg page-scroll"
            //   type="submit"
            //   class="btn btn-default"
            //   onClick={handleJoinWaitlist}
            >
              Join
            </button> */}
          </form>

          <button
            // className="btn-join" //"btn btn-custom2 btn-lg page-scroll"
            // type="submit"
            class="btn btn-join"
            onClick={handleJoinWaitlist}
          >
            Join
          </button>
        </div>

        {/* <div className="row">
          <input
            className="input-lg"
            id="input"
            type="name"
            placeholder="Name"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            className="input-lg"
            id="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            className="input-lg"
            id="input"
            placeholder="What do you plan to use Scribe for?"
            value={email}
            onChange={handleEmailChange}
          />
          <button
            className="btn btn-custom2 btn-lg page-scroll"
            onClick={handleJoinWaitlist}
          >
            Join Waitlist
          </button>
        </div> */}
      </div>
    </div>
  );
};

export { Waitlist };

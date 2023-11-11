import React, { useState } from "react";
import { submitGoogleForm } from "../gForm";
import emailjs from "emailjs-com";

const Waitlist = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [onWaitlist, setOnwaitlist] = useState(false);

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
    setOnwaitlist(true);
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
    <div id="waitlist" className="px-20 text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2 className="about-text">Scribe is coming soon to IOS...</h2>
          <h3> Join the waitlist to for early access to our beta version</h3>
        </div>

        {!onWaitlist ? (
          <div className="col-md-10 col-md-offset-1 section-title">
            <form>
              <div class="form-group">
                <label className="form-label2">Name</label>
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
                <label className="form-label2">
                  Email (must be the one you use for icloud)
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
                  placeholder=""
                  onChange={handlePurposeChange}
                />
              </div>
            </form>

            <button class="btn btn-join" onClick={handleJoinWaitlist}>
              Join
            </button>
          </div>
        ) : (
          <div>
            <h2 className="about-text">
              Thanks for joining the Scribe waitlist. We'll be in touch soon.
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export { Waitlist };

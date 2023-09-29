import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <img
                  src={"/img/scribe_written.gif"}
                  alt="scribe-gif"
                  // width="100"
                  // height="50"
                />
                {/* <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1> */}
                <h3> {props.data ? props.data.paragraph : "Loading"}</h3>
                <a
                  href="#waitlist"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Join the Waitlist
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

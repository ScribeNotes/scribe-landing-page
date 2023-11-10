import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            {/* <img
              src="img/math_pic.jpg"
              className="img-responsive"
              alt=""
            />{" "} */}
            <video
              src={props.data ? props.data.video : ""}
              controls // This attribute adds video controls (play, pause, etc.)
              width="550"
              height="360"
            >
              Unable to load video
            </video>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>What is Scribe?</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>\
              {/* <h3>Use Scribe To...</h3> */}
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <h3>Use Scribe To...</h3>
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <h3>Coming Soon...</h3>
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

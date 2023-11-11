import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Waitlist } from "./components/waitlist";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import PrivacyPolicy from "./PrivacyPolicyPage.js";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // Extract the current page from the URL
    const path = window.location.pathname;
    setCurrentPage(path === "/privacypolicy" ? "privacypolicy" : "home");
  }, []);

  // const navigateTo = (page) => {
  //   setCurrentPage(page);
  //   // Update the URL based on the chosen page
  //   window.history.pushState({}, page, `/${page}`);
  // };

  return (
    <div>
      {/* <nav>
        <button onClick={() => navigateTo("home")}>Home</button>
        <button onClick={() => navigateTo("privacypolicy")}>
          PrivacyPolicy
        </button>
      </nav> */}
      <div>
        {currentPage === "home" && <Home />}
        {currentPage === "privacypolicy" && <PrivacyPolicy />}
      </div>
    </div>
  );
};

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      {/* <Features data={landingPageData.Features} /> */}
      {/* <div id="waitlist" className="mt-20" /> */}
      <Waitlist data={landingPageData.Features} />
      <About data={landingPageData.About} />
      {/* <Services data={landingPageData.Services} /> */}
      {/* <Gallery data={landingPageData.Gallery} /> */}
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      {/* <Team data={landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;

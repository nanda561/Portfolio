import React from "react";
import "./Home.css";
import { Link, Outlet } from "react-router-dom";
import Linked from "../assets/link.svg";
import Profile from "../assets/images.jpg";

const Portfolio = () => {
  return (
    <div>
      {/* Header and Navigation */}
      <header className="container">
        <div className="page-header">
          <div className="logo">
            <a href="#">Logo.</a>
          </div>
          <input type="checkbox" id="click" />
          <label htmlFor="click" className="mainicon">
            <div className="menu">
              <i className="bx bx-menu"></i>
            </div>
          </label>
          <ul>
            <li>
                <a style={{ "--navAni": 1 }}>
              <Link to="/">Home</Link>
              </a>
            </li>
            <li>
              <a href="#" style={{ "--navAni": 2 }}>
                About
              </a>
            </li>
            <li>
              <Link to="skills">Skills</Link>
            </li>
            <li>
              <a href="#" style={{ "--navAni": 4 }}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" style={{ "--navAni": 5 }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* Main Section */}
      <section className="container">
        <div className="main">
          <div className="rounding-sec">
            <div className="big-circle">
              <div className="icon-block">
                <a
                  href="https://github.com/nanda0311"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIHDQ_CU0W38ktREqnPwdVlGCdA_e4xbaDK9NrjFOpD2AqdcajDV3c9_R3vp034nrC9eyvMThwY8ifNpmH3_8GMg_SzAsLKcWQeSskaVl8HjVtLWilhcBNwfep0yRxq-Z_klBXoYTVX0BaE39VwJ2a-drZup5i8owkdaZF0-KhCaodrtN2Rii9HPZrdlk/s1600/github.png"
                    alt="GitHub Icon"
                  />
                </a>
              </div>
              <div className="icon-block">
                <a
                  href="https://www.instagram.com/naughty.nanda/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoPvxJtYJq2-7BDn6LGcQ6QsT3Bo0vxkKu8WAOZnqsHIiTtGJqsHHHWlqqYN4iQFlVaqTaq7AFkWbY5Wrqxvk9Se1Wc_rjA7UKZoXHoxqSWXyaTg9aL9RC37H78NTnT4TwePdwqEYwVw8VxtjPoy6eG-f7RTJhX0JCa0lPmpfaz69hJ1ZHI9seBrUuvf4/s64/instagram.png"
                    alt="Instagram Icon"
                  />
                </a>
              </div>
              <div className="icon-block">
                <a
                  href="https://t.me/nk31102"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-WWnXxgKNxwqarx8Vr_xpaCcwOQbv7bpFxWXy1o7DCq7jZNiT3CFdAo52AvJol-C-3InAzj6B4isdJVwVCAlUY9jxqgM43wDXrmfsqL4PGr-fsBG0YjcOzwAHFscoDXg3EGlhupxjKRwrMe7Y2bX9VzTc-RY95A03bV1avKnjwJZjh0HKbGZDEa73mPU/s1600/telegram.png"
                    alt="Telegram Icon"
                  />
                </a>
              </div>
              <div className="icon-block">
                <a
                  href="https://www.linkedin.com/in/nanda-kishore-8ba611292/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Linked} alt="LinkedIn Icon" />
                </a>
              </div>
            </div>
            <div className="images">
              <img src={Profile} alt="Profile" className="img-w" />
            </div>
          </div>
          <div className="detail">
            <h3>Hi, I'm</h3>
            <h1>
              <span style={{ color: "#f9532d" }}>NandaKishore</span>{" "}
              Dharmalingam
            </h1>
            <p>
              I'm a professional Web Developer. Our Main Goal is to help &
              satisfy the local & global clients with web development solutions.
            </p>
            <button>Contact Us</button>
          </div>
        </div>
      </section>

      {/* Outlet for Nested Components */}
      <Outlet />
    </div>
  );
};

export default Portfolio;

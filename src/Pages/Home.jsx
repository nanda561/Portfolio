import React, { useEffect, useState } from "react";
import "./Home.css";
import Linked from "../assets/link.svg";
import Profile from "../assets/profile.webp";
import Whatsapp from "../assets/whatsapp.svg";
import { About } from "../Components/About";
import Skills from "../Components/Skills";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("ul li a");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7 } // Trigger when 70% of the section is visible
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div>
      {/* Header and Navigation */}
      <header className="container">
        <div className="page-header">
          <div className="logo">
            <a href="#"></a>
          </div>
          <input type="checkbox" id="click" />
          <label htmlFor="click" className="mainicon">
            <div className="menu">
              <i className="bx bx-menu"></i>
            </div>
          </label>
          <ul>
            <li>
              <a
                href="#home"
                style={{ "--navAni": 1 }}
                className={activeSection === "home" ? "active" : ""}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                style={{ "--navAni": 2 }}
                className={activeSection === "about" ? "active" : ""}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                style={{ "--navAni": 3 }}
                className={activeSection === "skills" ? "active" : ""}
              >
                Skills
              </a>
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
      <section id="home" className="container">
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
                <a href="https://wa.me/9347521480" target="_blank" rel="noopener noreferrer">
                  <img src={Whatsapp} alt="Telegram Icon" />
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
          </div>
        </div>
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
    </div>
  );
};

export default Portfolio;

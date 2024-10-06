import { useState } from "react";
import tech from "../assets/tech.png";
import MainNav from "../components/mainNav";

function AboutUs({ english, setEnglish }) {
  return (
    <>
      <MainNav english={english} setEnglish={setEnglish} />
      <h1> Meet the Team !!</h1>
      <div>
        <div className="team-cards-div">
          <div className="team-card">
            <img src={tech} alt="" />
            <h3>Fatima Ali</h3>
            <p> a programming student in Bahrain Polytechnic</p>
          </div>
          <div className="team-card">
            <img src={tech} alt="" />
            <h3>Fatima Ali</h3>
            <p> a programming student in Bahrain Polytechnic</p>
          </div>
          <div className="team-card">
            <img src={tech} alt="" />
            <h3>Fatima Ali</h3>
            <p> a programming student in Bahrain Polytechnic</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutUs;

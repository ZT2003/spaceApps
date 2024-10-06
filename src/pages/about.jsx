import { useState } from "react";
import tech from "../assets/tech.png";
import MainNav from "../components/mainNav";

function AboutUs({ english, setEnglish }) {
  return (
    <>
      <MainNav english={english} setEnglish={setEnglish} />

      {english ? (
        <div id="team">
          <h1> Meet the Team !!</h1>
          <div className="team-cards-div">
            <div className="team-card">
              <img src={tech} alt="" />
              <h3>Fatima Ali</h3>
              <p> a programming student in Bahrain Polytechnic</p>
              <a
                href="https://www.linkedin.com/in/fatema-ebrahim-4a4245294/"
                target="_blank"
              >
                contact
              </a>
            </div>
            <div className="team-card">
              <img src={tech} alt="" />
              <h3>Batool Albonni</h3>
              <p> a programming student in Bahrain Polytechnic</p>
              <a
                href="https://www.linkedin.com/in/batool-albonni/"
                target="_blank"
              >
                contact
              </a>
            </div>
            <div className="team-card">
              <img src={tech} alt="" />
              <h3>Zainab Tarada</h3>
              <p>
                a Computer Science - Cloud Computing student in University of
                Bahrain
              </p>
              <a
                href="https://www.linkedin.com/in/zainab-tarada-156793256"
                target="_blank"
              >
                contact
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div id="team">
          <h1>تعرف على الفريق</h1>
          <div className="team-cards-div">
            <div className="team-card">
              <img src={tech} alt="" />
              <h3>فاطمة علي</h3>
              <p>طالبة برمجة في جامعة البوليتكنك البحرين</p>
              <a
                href="https://www.linkedin.com/in/fatema-ebrahim-4a4245294/"
                target="_blank"
              >
                للتواصل
              </a>
            </div>
            <div className="team-card">
              <img src={tech} alt="" />
              <h3>بتول البني</h3>
              <p>طالبة برمجة في جامعة البوليتكنك البحرين</p>
              <a
                href="https://www.linkedin.com/in/batool-albonni/"
                target="_blank"
              >
                للتواصل
              </a>
            </div>
            <div className="team-card">
              <img src={tech} alt="" />
              <h3>زينب طرّاده</h3>
              <p>طالبة علوم حاسوب - الحوسبة السحابية في جامعة البحرين</p>
              <a
                href="https://www.linkedin.com/in/zainab-tarada-156793256"
                target="_blank"
              >
                للتواصل
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default AboutUs;

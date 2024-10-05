import tech from "../assets/tech.png";

function AboutUs() {
  return (
    <>
      <h1> Meet the Team !!</h1>
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
    </>
  );
}
export default AboutUs;

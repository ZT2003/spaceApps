import dashboard from "../assets/dashboard.svg";
import team from "../assets/team.svg";
import references from "../assets/references.svg";
function MainNav() {
  return (
    <>
      <nav className="navigation">
        <ul id="links-list">
          <li>
            <img src={dashboard} /> <span>Dashboard</span>
          </li>
          <li>
            <img src={team} />
            <span>the team</span>
          </li>
          <li>
            <img src={references} /> <span>references</span>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default MainNav;

import "../MentorPage1/mentor1.scss";
import { Link } from "react-router-dom";
function MentorPage1() {
  return (
    <div className="mentorPage1Container">
      {/* could wording below use some grammar adjustments? */}
      <h1 className="mentorPage1Container__titleText">
        Let's find a few suitable mentors for you.
      </h1>
      <h2 className="mentorPage1Container__introText">
        Get matches in a few easy steps. We'll help ensure the mentors are
        relevant to you, and having upcoming availabilities
      </h2>
      <p className="mentorPage1Container__goalText">
        What's your top goal right now?
      </p>
      <div>
        <p className="mentorPage1Container__step1Button">Step 1</p>
      </div>
      <div className="mentorPage1Container__goalsContainer">
        <Link to="/match2">
          <button className="mentorPage1Container__goalsContainer--option">
            Improve my storefront
          </button>
        </Link>
        <Link to="/match2">
          <button className="mentorPage1Container__goalsContainer--option">
            Learn about logistics
          </button>
        </Link>
        <Link to="/match2">
          <button className="mentorPage1Container__goalsContainer--option">
            Business management
          </button>
        </Link>
        <Link to="/match2">
          <button className="mentorPage1Container__goalsContainer--option">
            Marketing advice
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MentorPage1;

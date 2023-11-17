import "../MentorPage1/mentor1.scss";
function MentorPage1() {
  return (
    <div className="mentorPage1Container">
      {/* the wording below could use some grammar adjustments? */}
      <p className="mentorPage1Container__introText">
        Get matches in a few easy steps. We'll help ensure the mentors are
        relevant to you, and having upcoming availabilities
      </p>
      <p className="mentorPage1Container__GoalText">
        What's your top goal right now?
      </p>
      <div>
        <p className="mentorPage1Container__step1Button">Step 1</p>
      </div>
      <div className="mentorPage1Container__goalsContainer">
        <button className="mentorPage1Container__goalsContainer--option">
          Improve my storefront
        </button>
        <button className="mentorPage1Container__goalsContainer--option">
          Learn about logistics
        </button>
        <button className="mentorPage1Container__goalsContainer--option">
          Business management
        </button>
        <button className="mentorPage1Container__goalsContainer--option">
          Marketing advice
        </button>
      </div>
    </div>
  );
}

export default MentorPage1;

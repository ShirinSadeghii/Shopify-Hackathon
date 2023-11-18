import "../../components/Header/header.scss";

function Header() {
  return (
    <div>
      <h1 className="mentorPage__title">Here are the best matches for you.</h1>
      <h2 className="mentorPage__introText">
        Based on your preferences, here are the top mentors that match you.
      </h2>
    </div>
  );
}

export default Header;

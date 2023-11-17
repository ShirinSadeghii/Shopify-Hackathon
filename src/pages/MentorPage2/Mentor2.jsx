import "../MentorPage2/mentor2.scss";
function MentorPage2() {
  return (
    <div className="mentorPage2Container">
      <p className="mentorPage2Container__step2Button">Step 2</p>
      <p>Which areas would you like to get mentored in?</p>
      <div className="mentorPage2Container__buttonBox1">
        <button>Accounting</button>
        <button>Legal</button>
        <button>Marketing</button>
      </div>
      <div>
        <button>Shipping</button>
        <button>Development</button>
        <button>Logistics</button>
      </div>
      <p>Any specific tools you'd like help with?</p>
      <div>
        <button>Themes</button>
        <button>Shipping</button>
        <button>Marketing</button>
      </div>
      <div>
        <button>Theme Design</button>
        <button>Development</button>
        <button>Logistics</button>
      </div>
      <p>What Language are you comfortable with?</p>
      <div>
        <button>English</button>
        <button>Spanish</button>
        <button>French</button>
      </div>
      <div>
        <button>Back</button>
        <button>Continue</button>
      </div>
    </div>
  );
}

export default MentorPage2;

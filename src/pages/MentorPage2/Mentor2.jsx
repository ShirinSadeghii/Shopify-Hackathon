import "../MentorPage2/mentor2.scss";
import ClicksComponent from "../../components/ClicksComponent/ClicksComponent";
import Buttons from "../../components/Buttons/Buttons";
import NavBar from "../../components/NavBar/NavBar";

function MentorPage2() {
  return (
    <div>
        <NavBar />
        <div className="mentor">
        <p className="mentor__step2Button">Step 2</p>
        <p>Which areas would you like to get mentored in?</p>
        <ClicksComponent />
        <Buttons />
        </div>
    </div>
   
  );
}

export default MentorPage2;

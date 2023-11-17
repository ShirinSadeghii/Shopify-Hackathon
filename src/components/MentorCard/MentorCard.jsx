import "../MentorCard/MentorCard.scss";
import Ana from "../../assets/ana-nichita.jpg";
import pedro from "../../assets/pedro-rodriguez.jpg";
import Victor from "../../assets/victor-quiroga.jpg";
function MentorCard() {
  return (
    <>
      <div className="mentorCardWrapper">
        <div className="mentorsContainer">
          <div className="mentorsContainer__image">
            <img className="mentorsContainer__image1" src={pedro} alt="" />
          </div>
          <div className="mentorsContainer__infoContainer">
            <div className="mentorsContainer__box1">
              <p>Pedro Rodriguez</p>
              <button className="mentorsContainer__sendButton">
                Send Message
              </button>
            </div>
            <div className="mentorsContainer__box2">
              <span>Shopify</span>
              <span>eCommerce Expert</span>
            </div>
          </div>
        </div>
        <div className="mentorsContainer">
          <div className="mentorsContainer__image">
            <img className="mentorsContainer__image1" src={Ana} alt="" />
          </div>
          <div className="mentorsContainer__infoContainer">
            <div className="mentorsContainer__box1">
              <p>Ana Nichita</p>
              <button className="mentorsContainer__sendButton">
                Send Message
              </button>
            </div>
            <div className="mentorsContainer__box2">
              <span>Shopify</span>
              <span>eCommerce Expert</span>
            </div>
          </div>
        </div>
        <div className="mentorsContainer">
          <div className="mentorsContainer__image">
            <img className="mentorsContainer__image1" src={Victor} alt="" />
          </div>
          <div className="mentorsContainer__infoContainer">
            <div className="mentorsContainer__box1">
              <p>Victor Quiroga</p>
              <button className="mentorsContainer__sendButton">
                Send Message
              </button>
            </div>
            <div className="mentorsContainer__box2">
              <span>Shopify</span>
              <span>eCommerce Expert</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MentorCard;

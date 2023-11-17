import "../MentorCard/MentorCard.scss";
function MentorCard() {
  return (
    <>
      <div className="mentorCardWrapper">
        <div className="mentorsContainer">
          <div className="mentorsContainer__image"></div>
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
          <div className="mentorsContainer__image"></div>
          <div className="mentorsContainer__infoContainer">
            <div className="mentorsContainer__box1">
              <p>Nina Evangelista</p>
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
          <div className="mentorsContainer__image"></div>
          <div className="mentorsContainer__infoContainer">
            <div className="mentorsContainer__box1">
              <p>Max Dela Peña</p>
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

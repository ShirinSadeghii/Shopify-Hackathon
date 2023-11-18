import { useState } from "react";
import "./clickscomponent.scss";

function ClicksComponent() {
  const [showClicked, setShowClicked] = useState({});

  const handleClick = (buttonName) => {
    setShowClicked((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));
  };

  return (
    <>
      <div>
        <p className="mentor__sub-title">
          Which areas would you like to get mentored in?
        </p>
        <div className="click__container">
          <button
            className={showClicked["Accounting"] ? "active" : "not-active"}
            onClick={() => handleClick("Accounting")}
          >
            Accounting
          </button>
          <button
            className={showClicked["Legal"] ? "active" : "not-active"}
            onClick={() => handleClick("Legal")}
          >
            Legal
          </button>
          <button
            className={showClicked["Marketing"] ? "active" : "not-active"}
            onClick={() => handleClick("Marketing")}
          >
            Marketing
          </button>
        </div>
        <div className="click__container">
          <button
            className={showClicked["Shipping"] ? "active" : "not-active"}
            onClick={() => handleClick("Shipping")}
          >
            Logistics
          </button>
          <button
            className={showClicked["Development"] ? "active" : "not-active"}
            onClick={() => handleClick("Development")}
          >
            Development
          </button>
          <button
            className={showClicked["Logistics"] ? "active" : "not-active"}
            onClick={() => handleClick("Logistics")}
          >
            Influence
          </button>
        </div>
      </div>
      <p className="mentor__sub-title">
        Any specific tools you'd like help with?
      </p>
      <div>
        <div className="click__container">
          <button
            className={showClicked["Themes"] ? "active" : "not-active"}
            onClick={() => handleClick("Themes")}
          >
            Shipping
          </button>
          <button
            className={showClicked["Shipping2"] ? "active" : "not-active"}
            onClick={() => handleClick("Shipping2")}
          >
            Shopify Plus
          </button>
          <button
            className={showClicked["Marketing2"] ? "active" : "not-active"}
            onClick={() => handleClick("Marketing2")}
          >
            Marketing Tools
          </button>
        </div>
        <div className="click__container">
          <button
            className={showClicked["Theme Design"] ? "active" : "not-active"}
            onClick={() => handleClick("Theme Design")}
          >
            Theme Design
          </button>
          <button
            className={showClicked["Development2"] ? "active" : "not-active"}
            onClick={() => handleClick("Development2")}
          >
            3rd Party Apps
          </button>
          <button
            className={showClicked["Logistics2"] ? "active" : "not-active"}
            onClick={() => handleClick("Logistics2")}
          >
            Logistics
          </button>
        </div>
      </div>
      <p className="mentor__sub-title">
        What Language are you comfortable with?
      </p>
      <div className="click__container">
        <button
          className={showClicked["English"] ? "active" : "not-active"}
          onClick={() => handleClick("English")}
        >
          English
        </button>
        <button
          className={showClicked["Spanish"] ? "active" : "not-active"}
          onClick={() => handleClick("Spanish")}
        >
          Spanish
        </button>
        <button
          className={showClicked["French"] ? "active" : "not-active"}
          onClick={() => handleClick("French")}
        >
          More
        </button>
      </div>
    </>
  );
}

export default ClicksComponent;

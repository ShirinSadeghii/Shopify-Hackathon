import "./MessageForm.scss";

function MessageForm() {
  return (
    <div className="message">
      <div className="step__box">
        <span>Step 3</span>
      </div>
      <h2 className="message__title">Message to your mentors</h2>
      <form className="message__form">
        <textarea
          className="message__text"
          name="text"
          placeholder="Anything you would like to ask?"
        ></textarea>
      </form>
      <h2 className="message__title">Send a message</h2>

      <div className="message__container message__container--alt">
        <p className="message__default-comments message__default-commentsAlt">
          I’m looking for guidance on navigating international shipping for my
          coffee business.
        </p>
      </div>
      <div className="message__container">
        <p className="message__default-comments">
          Looking for tips on marketing Colombian coffee internationally
        </p>
      </div>
      <div className="message__container">
        <p className="message__default-comments">
          Can you help me find available shipping and marketing tools through
          Shopify platform
        </p>
      </div>
    </div>
  );
}

export default MessageForm;

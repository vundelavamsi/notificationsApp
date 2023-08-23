const Notification = (props) => {
  //  Write your code here.
  const { notificationText, className, src } = props;
  return (
    <div className={`notification-container ${className}`}>
      <img className="icon" src={src} />
      <p className="message">{notificationText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="notification-bg-container">
    <h1 className="heading">Notification</h1>
    <div className="notification-list-container">
      <Notification
        notificationText="Information Message"
        className="information-message"
        src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        notificationText="Success Message"
        className="success-message"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        notificationText="Warning Message"
        className="warning-message"
        src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        notificationText="Error Message"
        className="danger-message"
        src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

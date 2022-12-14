import "./topImage.css";
import image from "../../assets/CorporatePaul.png";
const TopImage = () => {
  return (
    <div className="profile-cont">
      <div className="image-container">
        <img src={image} alt="profile-photo" className="profile-image" />
      </div>
      <p className="username">Paul Oluwatoni Ariyo-Adeoye</p>
      <p style={{ display: "none" }}>Paul Ariyo-Adeoye</p>
      <svg
        className="share dt"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.3261 14.5062C21.5296 14.3318 21.6313 14.2446 21.6686 14.1409C21.7013 14.0498 21.7013 13.9502 21.6686 13.8591C21.6313 13.7554 21.5296 13.6682 21.3261 13.4938L14.2672 7.44331C13.917 7.14315 13.7419 6.99306 13.5937 6.98939C13.4648 6.98619 13.3418 7.04279 13.2603 7.14269C13.1667 7.25764 13.1667 7.48825 13.1667 7.94948V11.5289C11.3878 11.8401 9.75966 12.7415 8.54976 14.0949C7.23069 15.5704 6.50103 17.48 6.5 19.4591V19.9691C7.37445 18.9157 8.46626 18.0638 9.70063 17.4716C10.7889 16.9495 11.9653 16.6403 13.1667 16.5588V20.0505C13.1667 20.5117 13.1667 20.7424 13.2603 20.8573C13.3418 20.9572 13.4648 21.0138 13.5937 21.0106C13.7419 21.0069 13.917 20.8569 14.2672 20.5567L21.3261 14.5062Z"
          stroke="#98A2B3"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      {/* mobile view  */}
      <svg
        className="share mb"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 14.8333C14.4602 14.8333 14.8333 14.4602 14.8333 14C14.8333 13.5398 14.4602 13.1667 14 13.1667C13.5397 13.1667 13.1666 13.5398 13.1666 14C13.1666 14.4602 13.5397 14.8333 14 14.8333Z"
          stroke="#98A2B3"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.8333 14.8333C20.2935 14.8333 20.6666 14.4602 20.6666 14C20.6666 13.5398 20.2935 13.1667 19.8333 13.1667C19.3731 13.1667 19 13.5398 19 14C19 14.4602 19.3731 14.8333 19.8333 14.8333Z"
          stroke="#98A2B3"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.16665 14.8333C8.62688 14.8333 8.99998 14.4602 8.99998 14C8.99998 13.5398 8.62688 13.1667 8.16665 13.1667C7.70641 13.1667 7.33331 13.5398 7.33331 14C7.33331 14.4602 7.70641 14.8333 8.16665 14.8333Z"
          stroke="#98A2B3"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export default TopImage
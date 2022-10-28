import "./topImage.css";
import image from "../../assets/CorporatePaul.png";
const TopImage = () => {
  return (
    <div className="profile-cont">
      <div className="image-container">
        <img src={image} alt="profile-photo" className="profile-image" />
      </div>
      <p className="username">Paul Oluwatoni Ariyo-Adeoye</p>
    </div>
  );
}

export default TopImage
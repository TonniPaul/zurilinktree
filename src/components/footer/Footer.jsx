import slack from "../../assets/zurilogo.svg";
import i4g from "../../assets/i4g.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-cont">
        <img src={slack} alt="zuri-logo" className="footer-logo" />
        <p className="footer-text">HNG Internship 9 Frontend Task</p>
        <img src={i4g} alt="ingressive-4-good-logo" className="footer-logo" />
      </div>
    </footer>
  );
};

export default Footer;

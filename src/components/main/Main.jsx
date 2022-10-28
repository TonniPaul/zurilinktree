import "./main.css";
import { data } from "../../objectFiles/linksData";
import LinkCard from "../../cards/LinkCard";
import slack from "../../assets/slack.svg";
import github from "../../assets/github.svg";

const Main = () => {
  return (
    <div className="gap">
      {data.map((items) => {
        return <LinkCard key={items.id} {...items} />;
      })}
      <div className="icons">
        <a href="#">
          <img src={slack} alt="" />
        </a>
        <a href="https://github.com/tonnipaul">
          <img src={github} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Main;

import "./linkCard.css"

const LinkCard = ({ Text, Links, id }) => {
  return (
    <div className="link-card-div">
      <a href={Links} id={id} className="links">{Text}</a>
    </div>
  );
};

export default LinkCard
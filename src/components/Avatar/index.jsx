import "./style.css";

function Avatar(props) {
  // eslint-disable-next-line react/prop-types
  const { imageURL, title } = props;

  return <img className="avatar-image" src={imageURL} alt={title} />;
}

export default Avatar;

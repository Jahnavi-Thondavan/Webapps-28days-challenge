import "./itemCard.css";

function Item(props) {
  return (
    <div className="item">
      <img src={props.image} alt={props.name} />
      <div className="div1">
        <div className="title">{props.name}</div>
        <div className="des">{props.description}</div>
      </div>
    </div>
  );
}

export default Item;
import "./fruitcomp.css";

function FruitComp(props) {
  return (
    <div
      className="fruit"
      style={{
        background: props.backgroundColor,
        color: props.textColor,
      }}
    >
      {props.fruitName}
    </div>
  );
}

export default FruitComp;
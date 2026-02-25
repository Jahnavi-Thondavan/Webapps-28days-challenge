import FruitComp from "./FruitComp";
import "./fruits.css";

function App() {
  const listOfFruits = [
    { fruitName: "Apple", backgroundColor: "red", textColor: "white" },
    { fruitName: "Banana", backgroundColor: "yellow", textColor: "black" },
    { fruitName: "Mango", backgroundColor: "green", textColor: "white" },
    { fruitName: "Grapes", backgroundColor: "purple", textColor: "white" },
    { fruitName: "Orange", backgroundColor: "orange", textColor: "white" },
  ];

  return (
    <div className="parentCon">
      <h1>Fruits</h1>

      <div className="fruitsList">
        {listOfFruits.map((fruit, index) => (
          <FruitComp
            key={index}
            fruitName={fruit.fruitName}
            backgroundColor={fruit.backgroundColor}
            textColor={fruit.textColor}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
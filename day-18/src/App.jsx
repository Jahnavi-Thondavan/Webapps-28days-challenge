import { useEffect, useState } from "react";
import Item from "./item";
import "./items.css";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://webapps-api-class.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => {
        setList(data);
      })
      .catch((err) => console.error(err));
  }, []); // empty dependency = run once

  return (
    <div className="parent">
      <h1>Items</h1>
      <h3>Welcome to our store!! Enjoy your shopping</h3>

      <div className="itemsContainer">
        {list.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
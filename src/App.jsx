import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList);

  return (
    <div>
      {puppies.map((puppy) => {
        return <p>{puppy.name}</p>;
      })}
    </div>
  );
}

export default App;

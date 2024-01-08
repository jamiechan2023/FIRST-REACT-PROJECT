import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div>
      {puppies.map((puppy) => {
        return (
          <p
            className="puppy-name"
            onClick={() => {
              setFeatPupId(puppy.id);
            }}
          >
            {puppy.name}
          </p>
        );
      })}
      <div className="puppy-detail">
        {featPupId && (
          <div>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

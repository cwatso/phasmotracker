import React from "react";
import "./GhostCard.css";
import { useState } from "react";

function GhostCard(props) {
  const [hidden, setHidden] = useState(true);

  function toggleHidden() {
    let state = !hidden;
    setHidden(state);
  }

  return (
    <div className="ghostCard">
      <div className="ghostDesc">
        <h2>Description</h2>
        {props.description}
        {typeof props.description === "undefined" && <p>No Possible Ghost!</p>}
      </div>
      <div
        className={`ghostStrength ${
          typeof props.strength === "undefined" ? "hide" : ""
        }`}
      >
        <h2>Strength</h2>
        {props.strength}
      </div>
      <div
        className={`ghostWeakness ${
          typeof props.weakness === "undefined" ? "hide" : ""
        }`}
      >
        <h2>Weakness</h2>
        {props.weakness}
      </div>
      <button
        className={`${typeof props.description === "undefined" ? "hide" : ""}`}
        onClick={() => toggleHidden()}
      >
        Show Hidden Information
      </button>
      <div className={`hiddenInfo ${hidden ? "hide" : ""}`}>
        <div
          className={`ghostHunt ${
            typeof props.description === "undefined" ? "hide" : ""
          }`}
        >
          <h2>Hunt Threshold</h2>
          {props.hunt}
        </div>
        <div
          className={`ghostHidden ${
            typeof props.description === "undefined" ? "hide" : ""
          }`}
        >
          <h2>Hidden Abilities</h2>
          {props.hidden}
        </div>
      </div>
    </div>
  );
}

export default GhostCard;

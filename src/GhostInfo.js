import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./GhostInfo.css";
import GhostCard from "./GhostCard";

function GhostInfo(props) {
  const [ghost, setGhost] = useState("");

  useEffect(() => {
    if (typeof props.ghostList[0] !== "undefined") {
      setGhost(props.ghostList[0]);
    } else {
      setGhost("");
    }
  }, [props.ghostList]);

  function handleDropdownChange(value) {
    let newGhost = props.ghostList.find((ghost) => ghost.ghost === value);
    setGhost(newGhost);
  }

  return (
    <div className="ghostInfo">
      <span className="ghostDropdown">
        <label htmlFor="ghost">Possible Ghost: </label>
        <select
          name="ghost"
          id="ghost"
          value={
            typeof ghost.ghost === "undefined" ? "No Ghosts!" : ghost.ghost
          }
          onChange={(e) => handleDropdownChange(e.target.value)}
        >
          {props.ghostList.map((ghost) => (
            <option value={ghost.ghost} key={"ghostInfo-" + ghost.ghost}>
              {ghost.ghost}
            </option>
          ))}
          {props.ghostList.length === 0 && (
            <option disabled key={"ghostInfo-no-ghost"}>
              No Ghosts!
            </option>
          )}
        </select>
      </span>
      <GhostCard
        description={ghost.description}
        strength={ghost.strength}
        weakness={ghost.weakness}
        hunt={ghost.huntThreshold}
        hidden={ghost.hidden}
      />
    </div>
  );
}

export default GhostInfo;

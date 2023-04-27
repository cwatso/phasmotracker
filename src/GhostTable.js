import React from "react";
import "./GhostTable.css";

function GhostTable(props) {
  return (
    <div className="ghostTable">
      {props.ghostList.map((ghost) => (
        <button
          id={ghost.ghost + "btn"}
          key={ghost.ghost + "btn"}
          className={`${ghost.active === true ? "active" : "deactivated"} 
          ${ghost.crossed === true && ghost.active === true ? "crossed" : ""}
          ${ghost.ghost === props.selected ? "selected" : ""}`}
          onClick={() =>
            props.handleClick(ghost.ghost, ghost.active, ghost.crossed)
          }
        >
          {ghost.ghost}
        </button>
      ))}
    </div>
  );
}

export default GhostTable;

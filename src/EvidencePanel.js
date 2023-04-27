import React from "react";
import "./EvidencePanel.css";

function EvidencePanel(props) {
  return (
    <div className="evidencePanel">
      <input
        type="checkbox"
        id="EMF5"
        name="EMF5"
        value={props.EMF5}
        onChange={() => props.handleEvidenceClick("EMF5")}
      />
      <label htmlFor="EMF5">EMF 5</label>
      <input
        type="checkbox"
        id="DOTS"
        name="DOTS"
        value={props.DOTS}
        onChange={() => props.handleEvidenceClick("DOTS")}
      />
      <label htmlFor="DOTS">D.O.T.S</label>

      <input
        type="checkbox"
        id="fingerprints"
        name="fingerprints"
        value={props.fingerprints}
        onChange={() => props.handleEvidenceClick("fingerprints")}
      />
      <label htmlFor="fingerprints">Fingerprints</label>

      <input
        type="checkbox"
        id="orb"
        name="orb"
        value={props.orb}
        onChange={() => props.handleEvidenceClick("orb")}
      />
      <label htmlFor="orb">Ghost Orbs</label>

      <input
        type="checkbox"
        id="ghostWriting"
        name="ghostWriting"
        value={props.ghostWriting}
        onChange={() => props.handleEvidenceClick("ghostWriting")}
      />
      <label htmlFor="ghostWriting">Ghost Writing</label>

      <input
        type="checkbox"
        id="spiritBox"
        name="spiritBox"
        value={props.spiritBox}
        onChange={() => props.handleEvidenceClick("spiritBox")}
      />
      <label htmlFor="spiritBox">Spirit Box</label>

      <input
        type="checkbox"
        id="freezingTemps"
        name="freezingTemps"
        value={props.freezingTemps}
        onChange={() => props.handleEvidenceClick("freezingTemps")}
      />
      <label htmlFor="freezingTemps">Freezing Temperatures</label>
    </div>
  );
}

export default EvidencePanel;

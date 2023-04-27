import "./App.css";
import { useState } from "react";
import Ghosts from "./Ghosts.json";
import GhostTable from "./GhostTable";
import EvidencePanel from "./EvidencePanel";
import GhostInfo from "./GhostInfo";

function App() {
  const [evidence, setEvidence] = useState({
    EMF5: false,
    orb: false,
    spiritBox: false,
    freezingTemps: false,
    fingerprints: false,
    ghostWriting: false,
    DOTS: false,
  });

  const [ghostList, setGhostList] = useState(
    Ghosts.map((ghost) => ({ ...ghost, active: true, crossed: false }))
  );

  const [selected, setSelected] = useState("");

  function handleClick(ghost, active, crossed) {
    if (active === false) {
      return;
    } else if (ghost === selected) {
      setSelected("");
      let updatedGhostList = [...ghostList];
      updatedGhostList.find((object) => object.ghost === ghost).crossed = true;
      setGhostList(updatedGhostList);
    } else if (crossed === true) {
      let updatedGhostList = [...ghostList];
      updatedGhostList.find((object) => object.ghost === ghost).crossed = false;
      setGhostList(updatedGhostList);
    } else {
      setSelected(ghost);
    }
  }

  function handleEvidenceClick(type) {
    let updatedEvidence = { ...evidence };
    let updatedGhostList = [...ghostList];
    updatedEvidence[type] = !updatedEvidence[type];
    updatedGhostList.forEach((ghost) => {
      ghost.active = true;
      Object.keys(updatedEvidence).forEach((key) => {
        if (ghost[key] === false && updatedEvidence[key] === true) {
          ghost.active = false;
        }
      });
      if (ghost.ghost === selected && ghost.active === false) {
        setSelected("");
      }
    });
    setEvidence(updatedEvidence);
    setGhostList(updatedGhostList);
  }

  return (
    <div className="App">
      <div className="ghostTracker">
        <h1>Evidence</h1>
        <EvidencePanel
          handleEvidenceClick={handleEvidenceClick}
          EMF5={evidence.EMF5}
          orb={evidence.orb}
          spiritBox={evidence.spiritBox}
          freezingTemps={evidence.freezingTemps}
          fingerprints={evidence.fingerprints}
          ghostWriting={evidence.ghostWriting}
          DOTS={evidence.DOTS}
        />
        <GhostTable
          ghostList={ghostList}
          selected={selected}
          setSelected={setSelected}
          handleClick={handleClick}
        />
      </div>
      <GhostInfo
        ghostList={ghostList.filter((ghost) => ghost.active === true)}
      />
    </div>
  );
}

export default App;

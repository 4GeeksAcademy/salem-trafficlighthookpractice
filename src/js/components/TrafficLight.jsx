import { useState } from "react";
import ReactDOM from "react-dom";
import "../../styles/index.css";

const TrafficLight = () => {
  const [currentLight, setCurrentLight] = useState();

  // on click
  const clickFunction = (color) => {
    setCurrentLight(color);
  };

  return (
    <div id="trafficTop">
      <div className="Container">
        <div
          id="redlight"
          className={`redLight ${currentLight === "red" ? "active" : ""}`}
          onClick={() => clickFunction("red")}
        ></div>
        <div
          id="yellowlight"
          className={`yellowLight ${currentLight === "yellow" ? "active" : ""}`}
          onClick={() => clickFunction("yellow")}
        ></div>
        <div
          id="greenlight"
          className={`greenLight ${currentLight === "green" ? "active" : ""}`}
          onClick={() => clickFunction("green")}
        ></div>
      </div>
    </div>
  );
};

ReactDOM.render(<TrafficLight />, document.querySelector("#app"));

export default TrafficLight;

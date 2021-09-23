import React, { useState, useEffect } from "react";

import ProgressBars from "../Slider Progress Bar/ProgressBar";

export default function SliderProgressBar() {
  const [state1, setstate1] = useState(100);
  const [state2, setstate2] = useState(0);
  const [state3, setstate3] = useState(0);

  const [sumOf, setSumOf] = useState(0);

  // useEffect(()=>{

  //   setSumOf()

  // }, state1, state2, state3)

  useEffect(() => {
    setSumOf(parseInt(state1) + parseInt(state2) + parseInt(state3));
  }, []);

  return (
    <div className="main-container">
      <div className="progress-container">
        <ProgressBars
          per1={state1}
          per2={state2}
          per3={state3}
          changeFn1={setstate1}
          changeFn2={setstate2}
          changeFn3={setstate3}
          Nums={setSumOf}
        />
      </div>
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p style={{color: "blue"}}> {"Total %" + sumOf}</p>
    </div>
  );
}

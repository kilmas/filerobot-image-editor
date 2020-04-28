import React, { useState } from "react";
import { render } from "react-dom";
import FilerobotImageEditor from "../../../projects/mydemo";

const App = () => {
  const src = "https://cdn.scaleflex.it/demo/stephen-walker-unsplash.jpg";
  const [show, toggle] = useState(true);

  return (
    <FilerobotImageEditor
      show={show}
      src={src}
      onClose={() => {
        toggle(false);
      }}
      onComplete={(props) => {
        console.log(props);
      }}
      onBeforeComplete={(props) => {
        console.log(props);
        return false;
      }}
    />
  );
};

render(<App />, document.getElementById("app"));

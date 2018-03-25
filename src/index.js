import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

import lodash from "lodash";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="Bas" />
    <h2>
      {lodash.sum.toString()} editing to see some magic happen {"\u2728"}
    </h2>
  </div>
);

render(<App />, document.getElementById("root"));

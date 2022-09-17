import React from "react";
// import { render } from "react-dom";
// import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const App = () => {

  return (
    <div id="app">
      
     <h1 className="text-center">SUN Project</h1>
     <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/login">Login</Link> |{" "}
        <Link to="/Survey">Survey</Link>
      </nav>
    </div>
  );
};

export default App;

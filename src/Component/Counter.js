import { useState } from "react";
import { ToggleButton } from "react-bootstrap";

function App(props) {
  


  return (

    <>
      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg fixed-top shadow-md  navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">My App</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>
          </div>
          <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox"  onClick={props.tooglemode}role="switch" id="switchCheckDefault"/>
  <label class={`form-check-label ${props.mode === "dark" ? "text-light" : "text-dark"}`}  for="switchCheckDefault">Default switch checkbox input</label>
</div>
        </div>
        
      </nav>

      {/* Main Box */}
     
</>
);
}

export default App;

import React from 'react';
import PropTypes from 'prop-types';

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* DefaultProps tab kaam karega jab yahan props.title show hoga */}
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">{props.heading}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// ✅ props ko lowercase me rakho
Nav.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string
};

Nav.defaultProps = {
  title: "Here Is Your Title",
  heading: "Default Heading"
};

export default Nav;

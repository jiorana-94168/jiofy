import React from 'react';

function Alert(props) {
  return (
   props.alert && <div>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}role="alert"
      style={{
        position: "fixed",  // top pe fixed
        top: 50,             // navbar ke upar agar navbar fixed hai to 0 se start
        left: 0,
        width: "100%",      // pura width
             // navbar ke upar dikhne ke liye
      }}>
        {props.alert.message}:{props.alert.type}
        <button 
          type="button" 
          className="btn-close" 
          data-bs-dismiss="alert" 
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}

export default Alert;

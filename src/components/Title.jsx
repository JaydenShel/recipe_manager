import React from 'react';
import '../App.css';
import logo from '../images/recipe_logo.png'; 

function Title() {
  return (
    <div className="title-container">
      <h1 className="title-text">Ratat<span className="logo-container"><img src={logo} alt="Logo" className="logo" /></span>uille</h1>
    </div>
  );
}

export default Title;
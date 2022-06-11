import React from "react";
import { useState } from "react";

const Settings = () => {
  const light = (e) => {
    e.preventDefault();
    
    alert("light theme");
    
  };
  const dark = (e) => {
    e.preventDefault();
    alert("dark theme");
  };


  return (
    <div>
      Settings
      <div>
        <button onClick={light}>Light Theme</button>
        <button onClick={dark}>Dark Theme</button>
      </div>
      <div>
          <h3>Customize Theme</h3>

      </div>
    </div>
  );
};

export default Settings;

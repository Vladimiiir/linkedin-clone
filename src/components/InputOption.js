import React from "react";
import "./InputOption.css";

function InputOption({ Icon, title, color }) {
  return (
    <div>
      {Icon && (
        <div className="inputOption">
          <Icon style={{ color: color }} />
          <p>{title}</p>
        </div>
      )}
    </div>
  );
}

export default InputOption;

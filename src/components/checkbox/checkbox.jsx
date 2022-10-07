import React from "react";

import "./checkbox.scss";

const Checkbox = ({ isChecked, caption, onChange }) => {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        className="checkbox-input"
        onChange={onChange}
        checked={isChecked}
      />
      <span className="checkbox-custom"></span>
      <span className="checkbox-title">{caption}</span>
    </label>
  );
};

export default Checkbox;

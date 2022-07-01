import React from "react";

const SubmitButton = (props) => {
  return (
    <button className="popup__submit" type="submit">
      {props.submitButtonText}
    </button>
  );
};

export default SubmitButton;

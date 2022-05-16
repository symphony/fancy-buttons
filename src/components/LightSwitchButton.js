import { useState } from "react";

const LightSwitchButton = ({light, setLight}) => {
  const handleClick = () => { setLight(!light); };

  return (
    <button className="LightSwitchButton" onClick={handleClick}>
      {light ?
        <span><i>💡</i> I'm on!</span> :
        <span className="off"><i>💡</i> I'm off!</span>
      }
    </button>
  );
};

export default LightSwitchButton;
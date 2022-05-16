const LightSwitchButton = ({ light, setLight }) => {
  return (
    <button className="LightSwitchButton" onClick={setLight}>
      {light ?
        <span><i>💡</i> I'm on!</span> :
        <span className="off"><i>💡</i> I'm off!</span>
      }
    </button>
  );
};

export default LightSwitchButton;
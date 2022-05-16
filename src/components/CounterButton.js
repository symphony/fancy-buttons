const CounterButton = ({clickAmount, setClickAmount}) => {
  const handleClick = () => { setClickAmount(clickAmount + 1); };

  return (
    <button className="CounterButton" onClick={handleClick}>
      You clicked me {clickAmount} amount of times
    </button>
  );
};

export default CounterButton;
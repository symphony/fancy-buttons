import './App.css';
import { AngryButton, CounterButton, LightSwitchButton, TextRepeaterButton } from './index';
import { useState } from 'react';

const App = () => {
  const [anger, setAnger] = useState(0);
  const [clickAmount, setClickAmount] = useState(0);
  const [light, setLight] = useState(false);
  const [repetitions, setRepetitions] = useState(1);

  const dark = !light ? "dark" : '';

  const handleClick = () => { setLight(!light); }

  return (
    <div className={`App ${dark}`}>
      <h1>Fancy Buttons</h1>

      <section>
        <AngryButton anger={anger} setAnger={setAnger} />
        <CounterButton clickAmount={clickAmount} setClickAmount={setClickAmount} />
        <LightSwitchButton light={light} setLight={handleClick}/>
        <TextRepeaterButton repetitions={repetitions} setRepetitions={setRepetitions} />
      </section>
    </div>
  );
};

export default App;
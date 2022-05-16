import './App.css';
import { AngryButton, CounterButton, LightSwitchButton, TextRepeaterButton } from './index';
import { useState } from 'react';

const App = () => {
  const [light, setLight] = useState(false);




  return (
    <div className="App">
      <h1>Fancy Buttons</h1>

      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton light={light} setLight={setLight}/>
        <TextRepeaterButton />
      </section>
    </div>
  );
};

export default App;
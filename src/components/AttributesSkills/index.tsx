import { useState } from 'react';

const AttsAndSkills = () => {
  const [totalPoints, setTotalPoints] = useState<number>(54);
  const [dexModifier, setDexModifier] = useState<number>(0);
  const [percModifier, setPercModifier] = useState<number>(0);
  const [strModifier, setStrModifier] = useState<number>(0);
  const [knowModifier, setKnowModifier] = useState<number>(0);
  const [techModifier, setTechModifier] = useState<number>(0);
  const [mechModifier, setMechModifier] = useState<number>(0);

  //* Dexterity
  const handleDexIncrement = () => {
    setTotalPoints(totalPoints - 1);
    setDexModifier(dexModifier + 1);
  };

  const handleDexDecrement = () => {
    setTotalPoints(totalPoints + 1);
    setDexModifier(dexModifier - 1);
  };

  //* Strength
  const handleStrIncrement = () => {
    setTotalPoints(totalPoints - 1);
    setStrModifier(strModifier + 1);
  };

  const handleStrDecrement = () => {
    setTotalPoints(totalPoints + 1);
    setStrModifier(strModifier - 1);
  };

  //* Perception
  const handlePercIncrement = () => {
    setTotalPoints(totalPoints - 1);
    setPercModifier(percModifier + 1);
  };

  const handlePercDecrement = () => {
    setTotalPoints(totalPoints + 1);
    setPercModifier(percModifier - 1);
  };

  //* Knowledge
  const handleKnowIncrement = () => {
    setTotalPoints(totalPoints - 1);
    setKnowModifier(knowModifier + 1);
  };

  const handleKnowDecrement = () => {
    setTotalPoints(totalPoints + 1);
    setKnowModifier(knowModifier - 1);
  };

  const handleTechIncrement = () => {
    setTotalPoints(totalPoints - 1);
    setTechModifier(techModifier + 1);
  };

  const handleTechDecrement = () => {
    setTotalPoints(totalPoints + 1);
    setTechModifier(techModifier - 1);
  };

  const handleMechIncrement = () => {
    setTotalPoints(totalPoints - 1);
    setMechModifier(mechModifier + 1);
  };

  const handleMechDecrement = () => {
    setTotalPoints(totalPoints + 1);
    setMechModifier(mechModifier - 1);
  };


  return (
    <>
      <h2>total points: <span>{totalPoints}</span></h2>
      <div>
        <h4>Dexterity</h4>
        <h4>value <span>D</span></h4>
        <h4>+</h4>
        <h4>{dexModifier}</h4>
        <button onClick={handleDexIncrement}>+</button>
        <button onClick={handleDexDecrement}>-</button>
      </div>
      <div>
        <h4>Strength</h4>
        <h4>value <span>D</span></h4>
        <h4>+</h4>
        <h4>{strModifier}</h4>
        <button onClick={handleStrIncrement}>+</button>
        <button onClick={handleStrDecrement}>-</button>
      </div>
      <div>
        <h4>Perception</h4>
        <h4>value <span>D</span></h4>
        <h4>+</h4>
        <h4>{percModifier}</h4>
        <button onClick={handlePercIncrement}>+</button>
        <button onClick={handlePercDecrement}>-</button>
      </div>
      <div>
        <h4>Knowledge</h4>
        <h4>value <span>D</span></h4>
        <h4>+</h4>
        <h4>{knowModifier}</h4>
        <button onClick={handleKnowIncrement}>+</button>
        <button onClick={handleKnowDecrement}>-</button>
      </div>
      <div>
        <h4>Mechanical</h4>
        <h4>value <span>D</span></h4>
        <h4>+</h4>
        <h4>{mechModifier}</h4>
        <button onClick={handleMechIncrement}>+</button>
        <button onClick={handleMechDecrement}>-</button>
      </div>
      <div>
        <h4>Technical</h4>
        <h4>value <span>D</span></h4>
        <h4>+</h4>
        <h4>{techModifier}</h4>
        <button onClick={handleTechIncrement}>+</button>
        <button onClick={handleTechDecrement}>-</button>
      </div>
    </>
  )
}

export default AttsAndSkills;

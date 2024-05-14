import { useState, Dispatch, SetStateAction } from 'react';
import './styles.css';

const AttsAndSkills = () => {
  const [totalPoints, setTotalPoints] = useState<number>(18);

  const [dexValue, setDexValue] = useState<number>(2);
  const [dexModifier, setDexModifier] = useState<number>(0);

  const [percValue, setPercValue] = useState<number>(2);
  const [percModifier, setPercModifier] = useState<number>(0);

  const [strValue, setStrValue] = useState<number>(2);
  const [strModifier, setStrModifier] = useState<number>(0);

  const [knowValue, setKnowValue] = useState<number>(2);
  const [knowModifier, setKnowModifier] = useState<number>(0);

  const [techValue, setTechValue] = useState<number>(2);
  const [techModifier, setTechModifier] = useState<number>(0);

  const [mechValue, setMechValue] = useState<number>(2);
  const [mechModifier, setMechModifier] = useState<number>(0);



  const handleIncrement = (value: number, modifier: number, setValue: Dispatch<SetStateAction<number>>, setModifier: Dispatch<SetStateAction<number>>) => {
    if (totalPoints > 0 && value < 4) {
      setModifier(modifier + 1);
      if (modifier === 2) {
        setValue(value + 1);
        setModifier(0);
      }
      setTotalPoints(totalPoints - 1);
    }
  };

  const handleDecrement = (value: number, modifier: number, setValue: Dispatch<SetStateAction<number>>, setModifier: Dispatch<SetStateAction<number>>) => {
    if (totalPoints < 18 && value > 0) {
      setModifier(modifier - 1)
      if (modifier === 0) {
        setValue(value - 1);
        setModifier(2);
      }
      setTotalPoints(totalPoints + 1);
    }
  }

  
  return (
    <section>
      <h2>total points: <span>{totalPoints}</span></h2>
      <div>
        <h4>Dexterity</h4>
        <h4>{Math.abs(dexValue)}<span>D</span></h4>
        <h4>+</h4>
        <h4>{dexModifier}</h4>
        <button onClick={() => handleDecrement(dexValue, dexModifier, setDexValue, setDexModifier)}>-</button>
        <button onClick={() => handleIncrement(dexValue, dexModifier, setDexValue, setDexModifier)}>+</button>        
      </div>
      <div>
        <h4>Strength</h4>
        <h4>{Math.abs(strValue)}<span>D</span></h4>
        <h4>+</h4>
        <h4>{strModifier}</h4>
        <button onClick={() => handleDecrement(strValue, strModifier, setStrValue, setStrModifier)}>-</button>
        <button onClick={() => handleIncrement(strValue, strModifier, setStrValue, setStrModifier)}>+</button>
      </div>
      <div>
        <h4>Perception</h4>
        <h4>{Math.abs(percValue)}<span>D</span></h4>
        <h4>+</h4>
        <h4>{percModifier}</h4>
        <button onClick={() => handleDecrement(percValue, percModifier, setPercValue, setPercModifier)}>-</button>
        <button onClick={() => handleIncrement(percValue, percModifier, setPercValue, setPercModifier)}>+</button>        
      </div>
      <div>
        <h4>Knowledge</h4>
        <h4>{Math.abs(knowValue)}<span>D</span></h4>
        <h4>+</h4>
        <h4>{knowModifier}</h4>
        <button onClick={() => handleDecrement(knowValue, knowModifier, setKnowValue, setKnowModifier)}>-</button>
        <button onClick={() => handleIncrement(knowValue, knowModifier, setKnowValue, setKnowModifier)}>+</button>
      </div>
      <div>
        <h4>Mechanical</h4>
        <h4>{Math.abs(mechValue)}<span>D</span></h4>
        <h4>+</h4>
        <h4>{mechModifier}</h4>
        <button onClick={() => handleDecrement(mechValue, mechModifier, setMechValue, setMechModifier)}>-</button>
        <button onClick={() => handleIncrement(mechValue, mechModifier, setMechValue, setMechModifier)}>+</button>
      </div>
      <div>
        <h4>Technical</h4>
        <h4>{Math.abs(techValue)}<span>D</span></h4>
        <h4>+</h4>
        <h4>{techModifier}</h4>
        <button onClick={() => handleDecrement(techValue, techModifier, setTechValue, setTechModifier)}>-</button>
        <button onClick={() => handleIncrement(techValue, techModifier, setTechValue, setTechModifier)}>+</button>
      </div>
    </section>
  )
}

export default AttsAndSkills;

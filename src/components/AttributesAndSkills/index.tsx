import { useState, Dispatch, SetStateAction } from 'react';
import { skillsData, Skill } from './skillsList';
import './styles.css';


export const AttributesAndSkills = () => {
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

  // const [skills, setSkills] = useState<Skill[]>(skillsData.map(skill => ({ ...skill, value: skill.defaultValue })));

  // const handleSkillIncrement = (skillName: string) => {
  //   setSkills(skills.map(skill =>
  //     skill.name === skillName ? { ...skill, value: skill.value -1 } : skill
  //   ))
  // };

  // const handleSkillDecrement = (skillName: string) => {
  //   setSkills(skills.map(skill =>
  //     skill.name === skillName ? { ...skill, value: skill.value - 1 } : skill
  //   ));
  // };


  const handleIncrement = (
    value: number, 
    modifier: number, 
    setValue: Dispatch<SetStateAction<number>>, 
    setModifier: Dispatch<SetStateAction<number>>) => {
    if (totalPoints > 0 && value < 4) {
      setModifier(modifier + 1);
      if (modifier === 2) {
        setValue(value + 1);
        setModifier(0);
      }
      setTotalPoints(totalPoints - 1);
    }
  };

  const handleDecrement = (
    value: number, 
    modifier: number, 
    setValue: Dispatch<SetStateAction<number>>, 
    setModifier: Dispatch<SetStateAction<number>>) => {
    if (totalPoints < 54 && value > 0) {
      setModifier(modifier - 1)
      if (modifier === 0) {
        setValue(value - 1);
        setModifier(2);
      }
      setTotalPoints(totalPoints + 1);
    }
  };



  return (
    <section>
      <h5>total points: <span>{totalPoints}</span></h5>
      <div>
        <h4>Dexterity</h4>
        <p>{(dexValue)}d6 + {dexModifier}</p>
        <button onClick={() => handleDecrement(dexValue, dexModifier, setDexValue, setDexModifier)}>-</button>
        <button onClick={() => handleIncrement(dexValue, dexModifier, setDexValue, setDexModifier)}>+</button>
        <div>
          {skillsData.dexterity.map(skill => (
            <div key={skill.name}>
              <h5>{skill.name}</h5>
              <h6>{skill.defaultValue(dexValue)}d6+{skill.defaultModifier(dexModifier)}</h6>
              <button>-</button>
              <button>+</button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4>Strength</h4>
        <p>{(strValue)}d6 + {(strModifier)}</p>
        <button onClick={() => handleDecrement(strValue, strModifier, setStrValue, setStrModifier)}>-</button>
        <button onClick={() => handleIncrement(strValue, strModifier, setStrValue, setStrModifier)}>+</button>
        <div>
          {skillsData.strength.map(skill => (
            <div key={skill.name}>
              <h5>{skill.name}</h5>
              <h6>{skill.defaultValue(strValue)}d6+{skill.defaultModifier(strModifier)}</h6>
              <button>-</button>
              <button>+</button>
            </div>
          
          ))}
        </div>
      </div>
      <div>
        <h4>Perception</h4>
        <p>{(percValue)}d6 + {percModifier}</p>
        <button onClick={() => handleDecrement(percValue, percModifier, setPercValue, setPercModifier)}>-</button>
        <button onClick={() => handleIncrement(percValue, percModifier, setPercValue, setPercModifier)}>+</button>
        <div>
          {skillsData.perception.map(skill => (
            <div key={skill.name}>
              <h5>{skill.name}</h5>
              <h6>{skill.defaultValue(percValue)}d6+{skill.defaultModifier(percModifier)}</h6>
              <button>-</button>
              <button>+</button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4>Knowledge</h4>
        <p>{(knowValue)}d6 + {knowModifier}</p>
        <button onClick={() => handleDecrement(knowValue, knowModifier, setKnowValue, setKnowModifier)}>-</button>
        <button onClick={() => handleIncrement(knowValue, knowModifier, setKnowValue, setKnowModifier)}>+</button>
        <div>
          {skillsData.knowledge.map(skill => (
            <div key={skill.name}>
              <h5>{skill.name}</h5>
              <h6>{skill.defaultValue(knowValue)}d6+{skill.defaultModifier(knowModifier)}</h6>
              <button>-</button>
              <button>+</button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4>Mechanical</h4>
        <p>{(mechValue)}d6 + {mechModifier}</p>
        <button onClick={() => handleDecrement(mechValue, mechModifier, setMechValue, setMechModifier)}>-</button>
        <button onClick={() => handleIncrement(mechValue, mechModifier, setMechValue, setMechModifier)}>+</button>
        <div>
          {skillsData.mechanical.map(skill => (
            <div key={skill.name}>
              <h5>{skill.name}</h5>
              <h6>{skill.defaultValue(mechValue)}d6+{skill.defaultModifier(mechModifier)}</h6>
              <button>-</button>
              <button>+</button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4>Technical</h4>
        <p>{(techValue)}d6 + {techModifier}</p>
        <button onClick={() => handleDecrement(techValue, techModifier, setTechValue, setTechModifier)}>-</button>
        <button onClick={() => handleIncrement(techValue, techModifier, setTechValue, setTechModifier)}>+</button>
        <div>
          {skillsData.technical.map(skill => (
            <div key={skill.name}>
              <h5>{skill.name}</h5>
              <h6>{skill.defaultValue(techValue)}d6+{skill.defaultModifier(techModifier)}</h6>
              <button>-</button>
              <button>+</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};

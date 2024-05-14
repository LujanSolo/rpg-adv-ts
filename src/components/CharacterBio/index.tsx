import { CharacterBio } from '../../types/CharacterBio';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const CharBioBlock = () => {
  const [character, setCharacter] = useState<CharacterBio>({
    id: uuidv4(),
    name: '',
    species: '',
    profession: '',
    age: 0,

  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    setCharacter({
      ...character,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({character});
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name
        <input
          type="text"
          name="name"
          value={character.name}
          onChange={handleChange}
          placeholder='Name'
        />
      </label>
      <label htmlFor="species">Species
        <select
          name='species'
          value={character.species}
          onChange={handleChange}>
          <option value='select one'>Select One</option>
          <option value='human'>Human</option>
          <option value='droid'>Droid</option>
          <option value='wookiee'>Wookiee</option>
          <option value='rodian'>Rodian</option>
          <option value='trandoshan'>Trandoshan</option>
          <option value='twilek'>Twi'lek</option>
        </select>
      </label>
      <label htmlFor="profession">Profession
        <select
          name='profession'
          value={character.profession}
          onChange={handleChange}  
        >
          <option value=''>Select a template</option>
          <option value='none'>None - self created</option>
          <option value='noble'>Noble</option>
          <option value='historian'>Historian</option>
          <option value='bounty hunter'>Bounty Hunter</option>
          <option value='ace pilot'>Ace Pilot</option>
          <option value='smuggler'>Smuggler</option>
          <option value='diplomat'>Diplomat</option>
          <option value='soldier'>Soldier</option>
          <option value='engineer'>Engineer</option>
          <option value='doctor'>Doctor</option>
          <option value='force user'>Force User</option>
        </select>
      </label>
      <label htmlFor="age">Age
        <input
          type="number"
          name="age"
          value={character.age}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
import { CharacterBio } from '../../types/CharacterBio';
import { useState } from 'react';

export const CharBio = () => {
  const [character, setCharacter] = useState<CharacterBio>({
    id: '',
    name: '',
    species: '',
    profession: '',
    age: 0,

  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharacter({
      ...character,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(character);
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
        <input
          type="text"
          name="species"
          value={character.species}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="profession">Profession
        <select>
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
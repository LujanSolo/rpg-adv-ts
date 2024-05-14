import { CharBioBlock } from './components/CharacterBio';
import AttsAndSkills from './components/AttributesSkills';
import './App.css'

export default function App() {
  return (
    <div>
      <h3>Character Details</h3>
      <CharBioBlock />
      <h3>Attributes and Skills</h3>
      <AttsAndSkills />
    </div>
  )
}

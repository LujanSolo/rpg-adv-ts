import { CharBioBlock } from '../CharacterBio';
import { AttributesAndSkills } from '../AttributesAndSkills';



export default function CharacterSheetForm() {
  return (
    <div>
      <h3>Character Details</h3>
      <CharBioBlock />
      <h3>Attributes and Skills</h3>
      <AttributesAndSkills />
    </div>
  )



}
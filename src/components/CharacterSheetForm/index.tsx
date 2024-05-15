import { CharBioBlock } from '../CharacterBio';
import AttsAndSkills from '../AttributesSkills';



export default function CharacterSheetForm() {
  return (
    <div>
      <h3>Character Details</h3>
      <CharBioBlock />
      <h3>Attributes and Skills</h3>
      <AttsAndSkills />
    </div>
  )



}
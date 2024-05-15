export interface Skill {
  name: string;
  parentAttribute: string;
  defaultValue: (parentAttributeValue: number) => number;
  defaultModifier: (parentModifierValue: number) => number;
}

export const skillsData: Record<string, Skill[]> = {
  dexterity: [
    {
      name: 'Blaster',
      parentAttribute: 'dexterity',
      defaultValue: (dexterity: number) => dexterity,
      defaultModifier: (dexterity: number) => dexterity,
    },
    {
      name: 'Brawling Parry',
      parentAttribute: 'dexterity',
      defaultValue: (dexterity: number) => dexterity,
      defaultModifier: (dexterity: number) => dexterity,
    },
    {
      name: 'Dodge',
      parentAttribute: 'dexterity',
      defaultValue: (dexterity: number) => dexterity,
      defaultModifier: (dexterity: number) => dexterity,
    },
    {
      name: 'Grenade',
      parentAttribute: 'dexterity',
      defaultValue: (dexterity: number) => dexterity,
      defaultModifier: (dexterity: number) => dexterity,
    },
    {
      name: 'Heavy Weapons',
      parentAttribute: 'dexterity',
      defaultValue: (dexterity: number) => dexterity,
      defaultModifier: (dexterity: number) => dexterity,
    },
    {
      name: 'Melee Parry',
      parentAttribute: 'dexterity',
      defaultValue: (dexterity: number) => dexterity,
      defaultModifier: (dexterity: number) => dexterity,
    },
    {
      name: 'Melee',
      parentAttribute: 'dexterity',
      defaultValue: (dexterity: number) => dexterity,
      defaultModifier: (dexterity: number) => dexterity,
    },
  ],

  knowledge: [
    {
      name: 'Alien Species',
      parentAttribute: 'knowledge',
      defaultValue: (knowledge: number) => knowledge,
      defaultModifier: (knowledge: number) => knowledge,
    },
    {
      name: 'Bureaucracy',
      parentAttribute: 'knowledge',
      defaultValue: (knowledge: number) => knowledge,
      defaultModifier: (knowledge: number) => knowledge,
    },
    {
      name: 'Cultures',
      parentAttribute: 'knowledge',
      defaultValue: (knowledge: number) => knowledge,
      defaultModifier: (knowledge: number) => knowledge,
    },
    {
      name: 'Languages',
      parentAttribute: 'knowledge',
      defaultValue: (knowledge: number) => knowledge,
      defaultModifier: (knowledge: number) => knowledge,
    },
    {
      name: 'Planetary Systems',
      parentAttribute: 'knowledge',
      defaultValue: (knowledge: number) => knowledge,
      defaultModifier: (knowledge: number) => knowledge,
    },
    {
      name: 'Streetwise',
      parentAttribute: 'knowledge',
      defaultValue: (knowledge: number) => knowledge,
      defaultModifier: (knowledge: number) => knowledge,
    },
    {
      name: 'Survival',
      parentAttribute: 'knowledge',
      defaultValue: (knowledge: number) => knowledge,
      defaultModifier: (knowledge: number) => knowledge,
    },
    {
      name: 'Technology',
      parentAttribute: 'knowledge',
      defaultValue: (knowledge: number) => knowledge,
      defaultModifier: (knowledge: number) => knowledge,
    },
  ],

  mechanical: [
    {
      name: 'Astrogation',
      parentAttribute: 'mechanical',
      defaultValue: (mechanical: number) => mechanical,
      defaultModifier: (mechanical: number) => mechanical,
    },
    {
      name: 'Beast Riding',
      parentAttribute: 'mechanical',
      defaultValue: (mechanical: number) => mechanical,
      defaultModifier: (mechanical: number) => mechanical,
    },
    {
      name: 'Capital Ship Piloting',
      parentAttribute: 'mechanical',
      defaultValue: (mechanical: number) => mechanical,
      defaultModifier: (mechanical: number) => mechanical,
    },
    {
      name: 'Capital Ship Shields',
      parentAttribute: 'mechanical',
      defaultValue: (mechanical: number) => mechanical,
      defaultModifier: (mechanical: number) => mechanical,
    },
    {
      name: 'Capital Ship Gunnery',
      parentAttribute: 'mechanical',
      defaultValue: (mechanical: number) => mechanical,
      defaultModifier: (mechanical: number) => mechanical,
    },
    {
      name: 'Communications',
      parentAttribute: 'mechanical',
      defaultValue: (mechanical: number) => mechanical,
      defaultModifier: (mechanical: number) => mechanical,
    },
    {
      name: 'Repulsorlift Operation',
      parentAttribute: 'mechanical',
      defaultValue: (mechanical: number) => mechanical,
      defaultModifier: (mechanical: number) => mechanical,
    },
    {
      name: 'Starship Gunnery',
      parentAttribute: 'mechanical',
      defaultValue: (mechanical: number) => mechanical,
      defaultModifier: (mechanical: number) => mechanical,
    },
    {
      name: 'Starship Shields',
      parentAttribute: 'mechanical',
      defaultValue: (mechanical: number) => mechanical,
      defaultModifier: (mechanical: number) => mechanical,
    },
    {
      name: 'Starship Piloting',
      parentAttribute: 'mechanical',
      defaultValue: (mechanical: number) => mechanical,
      defaultModifier: (mechanical: number) => mechanical,
    },
  ],

  perception: [
    {
      name: 'Bargain',
      parentAttribute: 'perception',
      defaultValue: (perception: number) => perception,
      defaultModifier: (perception: number) => perception,
    },
    {
      name: 'Command',
      parentAttribute: 'perception',
      defaultValue: (perception: number) => perception,
      defaultModifier: (perception: number) => perception,
    },
    {
      name: 'Con',
      parentAttribute: 'perception',
      defaultValue: (perception: number) => perception,
      defaultModifier: (perception: number) => perception,
    },
    {
      name: 'Gambling',
      parentAttribute: 'perception',
      defaultValue: (perception: number) => perception,
      defaultModifier: (perception: number) => perception,
    },
    {
      name: 'Search',
      parentAttribute: 'perception',
      defaultValue: (perception: number) => perception,
      defaultModifier: (perception: number) => perception,
    },
    {
      name: 'Stealth',
      parentAttribute: 'perception',
      defaultValue: (perception: number) => perception,
      defaultModifier: (perception: number) => perception,
    },
  ],

  strength: [
    {
      name: 'Athletics',
      parentAttribute: 'strength',
      defaultValue: (strength: number) => strength,
      defaultModifier: (strength: number) => strength,
    },
    {
      name: 'Brawling',
      parentAttribute: 'strength',
      defaultValue: (strength: number) => strength,
      defaultModifier: (strength: number) => strength,
    },
    {
      name: 'Lifting',
      parentAttribute: 'strength',
      defaultValue: (strength: number) => strength,
      defaultModifier: (strength: number) => strength,
    },
    {
      name: 'Stamina',
      parentAttribute: 'strength',
      defaultValue: (strength: number) => strength,
      defaultModifier: (strength: number) => strength,
    },
    {
      name: 'Swimming',
      parentAttribute: 'strength',
      defaultValue: (strength: number) => strength,
      defaultModifier: (strength: number) => strength,
    },
  ],

  technical: [
    {
      name: 'Armor Repair',
      parentAttribute: 'technical',
      defaultValue: (technical: number) => technical,
      defaultModifier: (technical: number) => technical,
    },
    {
      name: 'Blaster Repair',
      parentAttribute: 'technical',
      defaultValue: (technical: number) => technical,
      defaultModifier: (technical: number) => technical,
    },
    {
      name: 'Capital Ship Repair',
      parentAttribute: 'technical',
      defaultValue: (technical: number) => technical,
      defaultModifier: (technical: number) => technical,
    },
    {
      name: 'Computer Programming/Repair',
      parentAttribute: 'technical',
      defaultValue: (technical: number) => technical,
      defaultModifier: (technical: number) => technical,
    },
    {
      name: 'Droid Programming/Repair',
      parentAttribute: 'technical',
      defaultValue: (technical: number) => technical,
      defaultModifier: (technical: number) => technical,
    },
    {
      name: 'Medicine',
      parentAttribute: 'technical',
      defaultValue: (technical: number) => technical,
      defaultModifier: (technical: number) => technical,
    },
    {
      name: 'Security',
      parentAttribute: 'technical',
      defaultValue: (technical: number) => technical,
      defaultModifier: (technical: number) => technical,
    },
    {
      name: 'Starship Repair',
      parentAttribute: 'technical',
      defaultValue: (technical: number) => technical,
      defaultModifier: (technical: number) => technical,
    },
  ]
};

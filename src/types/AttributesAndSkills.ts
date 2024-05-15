export type AttsAndSkills = {
  attributes: {
    dexterity: {
      name: string;
      value: number;
      modifier: number;
      skills: {
        blaster: {
          name: string;
          value: number;
          modifier: number;
        };
        brawlingParry: {
          name: string;
          value: number;
          modifier: number;
        };
        stealth: {
          name: string;
          value: number;
          modifier: number;
        };
      };
    };
  };
};

export const AttsAndSkills: AttsAndSkills = {
  attributes: {
    dexterity: {
      name: 'Dexterity',
      value: 0,
      modifier: 0,
      skills: {
        blaster: {
          name: 'Blaster',
          value: 0,
          modifier: 0,
        },
        brawlingParry: {
          name: 'Brawling Parry',
          value: 0,
          modifier: 0,
        },
        stealth: {
          name: 'Stealth',
          value: 0,
          modifier: 0,
        }
      },
    }
  },
};
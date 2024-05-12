export type AttsAndSkills = {
  attributes: {
    dexterity: {
      name: string;
      value: number;
      bonus: number;
      skills: {
        blaster: {
          name: string;
          value: number;
          bonus: number;
        };
        brawlingParry: {
          name: string;
          value: number;
          bonus: number;
        };
        stealth: {
          name: string;
          value: number;
          bonus: number;
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
      bonus: 0,
      skills: {
        blaster: {
          name: 'Blaster',
          value: 0,
          bonus: 0,
        },
        brawlingParry: {
          name: 'Brawling Parry',
          value: 0,
          bonus: 0,
        },
        stealth: {
          name: 'Stealth',
          value: 0,
          bonus: 0,
        }
      },
    }
  },
};
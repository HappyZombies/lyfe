import CardType from "../class/CardType";

export default [
  {
    id: "attack1",
    name: "Punch",
    type: CardType.PHYSICAL,
    description: `According to Wikipedia, punching is a striking blow with the fist.
            It is used in most martial arts and combat sports, most notably Boxing where it is the only type of offensive technique allowed.`,
    briefDescription:
      "Nothing but a plain punch, hopefully you know how to deal one.",
    icon: null,
    level: 1,
    action: () => {
      // calculate punch base on STATS
      return 2;
    }
  }
];

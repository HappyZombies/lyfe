import PerkType from "../class/PerkType";
export default [
  {
    id: "goodgenetics",
    name: "Good Genetics",
    perkType: PerkType.STAT,
    description:
      "Lucky you! You have a set of wonderful genetics, you get a boost of 5% on every stat!",
    icon: "",
    statReq: [
      { stat: "INT", value: 7 },
      { stat: "APP", value: 7 },
      { stat: "FIT", value: 7 }
    ],
    action: perkData => {
      return 0.05;
    }
  },
  {
    id: "bumblingbrute",
    name: "Bumbling Brute",
    perkType: PerkType.STAT,
    description:
      "You gave up trying to understand the world around you, so you just hit everything you see. Physical attack cards now do 15% more damage.",
    icon: "",
    statReq: [{ stat: "INT", value: 2 }, { stat: "FIT", value: 10 }],
    action: perkData => {
      return 0.15;
    }
  },
  {
    id: "eagleseye",
    name: "Eagles Eye",
    perkType: PerkType.STAT,
    description:
      "You are a natural born shooter, you seem to never miss a target! Chances of hitting a target with a weapons card is increased by 15%",
    icon: "",
    statReq: [{ stat: "INT", value: 8 }, { stat: "WEAP", value: 8 }],
    action: perkData => {
      return 0.1;
    }
  },
  {
    id: "wasteoflife",
    name: "Waste of Life",
    perkType: PerkType.INGAME,
    description:
      "Mother nature has a crude way of making jokes, and you are the latest one. Luckily, you now have a suicide button provided so you can stop wasting other peoples air.",
    icon: "",
    statReq: [
      { stat: "INT", value: 1 },
      { stat: "CHAR", value: 1 },
      { stat: "FIT", value: 1 },
      { stat: "WEAP", value: 1 },
      { stat: "APP", value: 1 },
      { stat: "WILL", value: 1 },
      { stat: "LUCK", value: 1 }
    ],
    action: perkData => {
      return 0.1;
    }
  },
  {
    id: "nerd",
    name: "Nerdddd",
    perkType: PerkType.STAT,
    description:
      "You may be ugly, but at least you got the brains! Gain 3% increase on Status Damaging Cards.",
    icon: "",
    statReq: [{ stat: "INT", value: 10 }, { stat: "APP", value: 1 }],
    action: perkData => {
      return 0.03;
    }
  },
  {
    id: "extrapockets",
    name: "Extra Pockets",
    perkType: PerkType.INGAME,
    description:
      "You have decided to wear your lucky pants that come with extra pockets! You can carry two additional cards in your deck.",
    icon: "",
    action: perkData => {
      return 0.03;
    }
  },
  {
    id: "alwaysfirst",
    name: "Always First",
    perkType: PerkType.INGAME,
    description:
      "You just always seems to have the upper hand! Always go first at the beginning of a battle.",
    icon: "",
    action: perkData => {
      return 0.02;
    }
  },
  {
    id: "smoothtalker",
    name: "Smooth Talker",
    perkType: PerkType.STAT,
    description:
      "You're such a smooth talker that you can sell ice to an escomo! Speech checks are increased by 10%",
    icon: "",
    statReq: [{ stat: "CHAR", value: 8 }, { stat: "APP", value: 7 }],
    action: perkData => {
      return 0.1;
    }
  },
  {
    id: "luckyhand",
    name: "Lucky Hand",
    perkType: PerkType.INGAME,
    description:
      "Due to your swiftness and skillfilness, you can deal one extra card each turn.",
    icon: "",
    statReq: [{ stat: "LUCK", value: 8 }, { stat: "INT", value: 8 }],
    action: perkData => {
      return 0.1;
    }
  },
  {
    id: "godsblessing",
    name: "Gods Blessing",
    perkType: PerkType.STAT,
    description:
      "Thanks to your religious beliefs, God has shown his grace upon you. Do something bad, and God will show you his wrath. 3% bonus on all stats, -8% if you do something bad.",
    icon: "",
    action: perkData => {
      return 0.1;
    }
  }
];

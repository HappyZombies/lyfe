class Card {
  /**
   *
   * @param {String} id - the id of the card, must be unique.
   * @param {String} name - the name of the card
   * @param {Enum CardType} type - the type of card that this is.
   * @param {String} description - a full description of what this card is.
   * @param {String} briefDescription - a brief description of this card, it will be
   * @param {String} icon - the icon of this card
   * @param {Float} chance - the BASE value of this cards chances of hitting / being affective. 1.0 is 100% success.
   * @param {Number} level - the required level to use this card effectively.
   * @param {Object} statReq - ex: {stat: INT, value: 5}, the stat requirement needed to use this card effectively. null if none required.
   * @param {Function} action - the function that does the calculation of this cards effect.
   */
  constructor(
    id,
    name,
    type,
    description,
    briefDescription,
    icon,
    chance,
    level,
    statReq,
    action
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.description = description;
    this.briefDescription = briefDescription;
    this.icon = icon;
    this.action = action;
  }
}

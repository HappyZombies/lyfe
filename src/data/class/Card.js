class Card {
  /**
   *
   * @param {String} id
   * @param {String} name
   * @param {Enum CardType} type
   * @param {String} description
   * @param {String} briefDescription
   * @param {String} icon
   * @param {Function} action
   */
  constructor(id, name, type, description, briefDescription, icon, action) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.description = description;
    this.briefDescription = briefDescription;
    this.icon = icon;
    this.action = action;
  }
}

/**
 * The base class to create a perk along with the information related to it.
 */
class Perk {
  /**
   * @param {String} name the name of the perk
   * @param {String} description a detailed or non detailed description of the perk
   * @param {String} icon an optional icon for the perk, default will be used if none provided.
   * @param {Array.<Perk.id>} preReq - an optional array of perk ids that will be used to determine the prequist perks needed for this perk to be used.
   * @param {Function} action - a call back method that contains the script of what this action will do.
   * @param {String} id the id of the perk, must be unique.
   */
  constructor(name, description, icon, preReq, action, id) {
    this.name = name;
    this.description = description;
    this.icon = icon ? icon : "";
    this.preReq = this.preReq ? this.preReq : [];
    this.action = action;
    this.id = id;
  }
}

// generates the perkdata
import PerkData from "../PerkData";
import Perk from "../../class/Perk";

class PerkCreation {
  constructor(playerStats) {
    this.allPerks = [];
    PerkData.forEach(perk => {
      if (this._meetsRequirements(perk, playerStats)) {
        this.allPerks.push(new Perk({ ...perk, playerStats: playerStats }));
      }
    });
  }

  _meetsRequirements = (perk, playerStats) => {
    console.log(perk);
    console.log(playerStats);
    if (perk.statReq) {
      for (let i = 0; i < perk.statReq.length; i++) {
        const req = perk.statReq[i];
        const res =
          req.value <= 5
            ? playerStats[req.stat].value <= req.value
            : playerStats[req.stat].value >= req.value;
        if (!res) {
          return false;
        }
      }
    }
    return true;
  };

  getPerks = () => {
    return this.allPerks;
  };
}

export default PerkCreation;

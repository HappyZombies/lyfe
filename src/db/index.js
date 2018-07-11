import Dexie from "dexie";

const db = new Dexie("LyfeDB");
db.version(1).stores({
  saveGame: ""
});

export default db;

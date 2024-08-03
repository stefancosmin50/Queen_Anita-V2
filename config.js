//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "0770811929";
global.owner = process.env.OWNER_NUMBER || "0770811929";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://tenor.com/view/power-chainsawman-gif-25501450";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE9DUVpTQzRoNFRjUUxCc0h6NHJjcWdzWTQ5NUhqcFhVYjNSdkNCTXduZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWJHckFqZCtYdzF6TmdhYjZlLzI2TXJpRCtmclhZNXZ0N0RRV2FZRjBFYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4QnJ3bGkyQUFVSU9ZOURRQWdtZW8vZmZ6aGRmc1JkVmx0ZnBRUmhvM24wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUa05Td1RRd3FYcEZsOXpvd0oyK25vSTAzSEwwMktpVS9VZ0ZtcHNGN0Y4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdJNE9pT29HUGhEUi9kckZkaGY3WlZ2TjBRUW96UmdaTEtTaEtJRVZzbFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InMxSERWY3c1cDF5V3AxVXkwbmNQM2lldVFRR0Fzd1lYdmdxdzdURUtoVTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUd6a0tlQkJFRXJJWGRkV05JOFVMY3pjMDZOR3JkQ2xnUmQrMUJobWkzcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0Y3T1hYUWRmR0wyeU5PTmVRcFY4OUsxa0luRmpJc2tnREptR2pjOXlsST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJVYTRMTDl5U3RFNW5DNm5SOW9tZUd1a3RaVjJkS0hsSm90dW1GT29rMExyQktla1ZrM3hDZXJOcXF5c1ZlV2R2ZWkvcnpiVENobWZtR2Z1Q0ZzOERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYyLCJhZHZTZWNyZXRLZXkiOiJzK0xpUFlZcDNocmNSdDYrMlI3VVkvRE1aUkw3ajdDM3NURUxoWmxHcG5jPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRa3BhU1ZLN1NGVzJEMFc2VU1RMmV3IiwicGhvbmVJZCI6ImYwZGM5MzY2LTBkYjAtNDg2Ny1iYzBjLWM0ZWU1NjdmMTBiOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOemNHSTlHcnpuSzNFdDBKV2diWER5UzQxc0U9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdCbERmVzE4MHF4Tnh2ak52eUxxQlBKUEExTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09PeHJNSUJFTmJCdUxVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZNVTUwbVlkK1Z6VWhsZDNiejRjWG9NaUc4bmhDb0hyTDkzMUNPRXViRDg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IitNSlVzWXNWVU1KZDFuL1ZQVTJkSTErR2RCajZ6VVFybEJKUFlOUzhMak9Tc0gwa2lQQ1hqNk5waFdxZmNPdzFuREo1Smk2UXZobEllYkErSXhZNkNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ1SkFJbXo2NTBPZTRJdTdrUFpNS0JkU3VjWTcrTFoxaGk2a25pSGFFWlRsdjVkOUZTckI5Y0dYc2VTU2NnWWt3bStqK2p1Y2syQWpHSkpmVkRTY0JCdz09In0sIm1lIjp7ImlkIjoiNDA3NzA4MTE5Mjk6NjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi0pPMtuG0h8y24bSAzLbKgMy2yp/MtuG0h8y2c8y2c8y2IiwibGlkIjoiNDE0NTEwNDgxOTAwODE6NjFAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjQwNzcwODExOTI5OjYxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJURk9kSm1IZmxjMUlaWGQyOCtIRjZESWh2SjRRcUI2eS9kOVFqaExtdy8ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjY4NzcxNSwibGFzdFByb3BIYXNoIjoiMTdOVVhKIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBLzMifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

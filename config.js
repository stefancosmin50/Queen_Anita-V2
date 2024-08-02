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
global.devs = "0770811929";
global.sudo = process.env.SUDO || "0770811929";
global.owner = process.env.OWNER_NUMBER || "0770811929";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0R3aVdRSmVYVzRjUEtubVJXQlIxcVR6MnhyVUJYRnhpK3R4ME4zYzJsZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUERlU0xtVzIyelBtWDJBOHhKL0RBTWZYVkVPd2FXZG96Qk93dHZ3RjExVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQUEyRTBaNkFXR2JDTTBWSEF3TUhCNGhibzhJWWtVWGRpaitCNnd1bjJJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDbGZhMmN0NkR0SHU1VnQ0cy83NFdFYzlTTG83YTZqUWU1ekdTUlNGcUY4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNNNFkrTU9TVERrcDNUMkdIRGM1c1BrVmhaRjZRK1MxNmpka0xVaFZyR0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InF0Qy81SWozeFBmR2l6QkRzZ3BzVDY0bXZuN1E4bFlPa3pHT2p4b25RM009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0xScDkxaUhoZjRGN3RDZ3MwV0xRa1J2U3ZyRlQ3bG1INTRvcDhvL3lGVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTDJERFMrM21CM1hpMmJFMk9OeHN0WkxTSnY5MHQ3WDI0STk2WWV2bzRoYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVLUjJmbkRlU20wN3NsUWYrdHdCRi8xOC9VNUg5MFVvYzJ6QXRwV3ZVODRRNjFzT2Z6Z042SGtScDBtN21wNWVhVjZ0bTNrRGxBNy9hSmRWTDFIQ0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzksImFkdlNlY3JldEtleSI6IlpCWlNIajQ2MTRnN0k0aTNGa25tSmFjYWN2aFkxZ3B5NzNTWHZpSDZUczg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik9HWVE3ZHN6UmVhMUxlSXdxc0phTEEiLCJwaG9uZUlkIjoiODVjYzJkMmMtNzBiMS00YWM3LTg4ODMtOGNkNGIyYjIwZTg2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkI4VS9kWG1QL1VoVnkwMFpUQ0o3NERETTNIbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLOUU3RkdjVWNIWU9LTktiUldjNWFpemNwQVU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTEtHNktXMTciLCJtZSI6eyJpZCI6IjQwNzcwODExOTI5OjU5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6ItKTzLbhtIfMtuG0gMy2yoDMtsqfzLbhtIfMtnPMtnPMtiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT0d4ck1JQkVQaU10YlVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRk1VNTBtWWQrVnpVaGxkM2J6NGNYb01pRzhuaENvSHJMOTMxQ09FdWJEOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiREM0NFYvNzA1S0NyQmpjOFFJUEs2aWQ4Q0tzVURibnlwNDJOK1p2a3lWeURKN21tSnRlTGo3OHFPOWs3V0dLUlMwYVBqUmVsVHhhV1hFd3kwYkJpQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6InVlRy9rSW9rRmJhOUJRdFUzelFFeGErTkdKWjF4aXR3eG5wQWFPeGZZNzRXcm5JS01iVFljdkIyTFN4Q0FoRld4NUJQaVJQRnJCN0ZYak05Zm9oa0RBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNDA3NzA4MTE5Mjk6NTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUlRGT2RKbUhmbGMxSVpYZDI4K0hGNkRJaHZKNFFxQjZ5L2Q5UWpoTG13LyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjYzMTgxNCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBLzMifQ=="
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

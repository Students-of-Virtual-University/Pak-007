const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923071003071";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 1
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_58_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1LFxuICAgICAgICAzOSxcbiAgICAgICAgNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTYsXG4gICAgICAgIDYwLFxuICAgICAgICAzMCxcbiAgICAgICAgODgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzksXG4gICAgICAgIDg5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjUwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICAxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTczLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDg2LFxuICAgICAgICA3NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA0OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA2NixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDUzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTczLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTksXG4gICAgICAgIDc3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDksXG4gICAgICAgIDc4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQzLFxuICAgICAgICA1LFxuICAgICAgICA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgOCxcbiAgICAgICAgNixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjksXG4gICAgICAgIDYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTExLFxuICAgICAgICAyMTMsXG4gICAgICAgIDcsXG4gICAgICAgIDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDkwLFxuICAgICAgICA0MSxcbiAgICAgICAgNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExMixcbiAgICAgICAgOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNixcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODcsXG4gICAgICAgIDk0LFxuICAgICAgICA0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM4LFxuICAgICAgICA0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDY5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOC92T1A0RnNIUG41aTVJK0FmQmxkMUsxdEltaHhPTGpmYlJRenN4Z1A1Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNzEwMDMwNzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkJGNTBDQjQ5QTJFQjFBOURDQjhFNDE0Njg3MjM5QTBFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTM1NDMwMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA3MTAwMzA3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjg2RjM3NTM3MkNCMEE3NjExRDc2Qjc2QTNBMEQzNDRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMzU0MzAzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlhaME8tOFk5UW0yVmV0ZjJWSEpCRHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWRlZjE2MjYtNzlmZS00MTQwLTgzZWUtNDRlNmQ1Y2UxZDBmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMCxcbiAgICAgIDc2LFxuICAgICAgMjU1LFxuICAgICAgMjA4LFxuICAgICAgMTE1LFxuICAgICAgNzYsXG4gICAgICA5MyxcbiAgICAgIDcwLFxuICAgICAgODcsXG4gICAgICAyMDIsXG4gICAgICAxODQsXG4gICAgICA0MSxcbiAgICAgIDI0NSxcbiAgICAgIDk5LFxuICAgICAgMTcwLFxuICAgICAgNTQsXG4gICAgICAyMzksXG4gICAgICAxMDUsXG4gICAgICA3MCxcbiAgICAgIDI0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjEsXG4gICAgICAxMTYsXG4gICAgICA0MCxcbiAgICAgIDIzNixcbiAgICAgIDEyLFxuICAgICAgMTQyLFxuICAgICAgMjQ2LFxuICAgICAgOTEsXG4gICAgICAyMjIsXG4gICAgICAyMTksXG4gICAgICA4OSxcbiAgICAgIDEyLFxuICAgICAgMTI1LFxuICAgICAgMTQsXG4gICAgICAxMDYsXG4gICAgICA3NCxcbiAgICAgIDI0MyxcbiAgICAgIDE1MixcbiAgICAgIDIyNyxcbiAgICAgIDcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxGRlZFTjZGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNzEwMDMwNzE6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFCRFwiLFxuICAgIFwibGlkXCI6IFwiMjQ0NTI1NjkxODcxMjU3OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFRLcnJjQkVMcVE1N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTQUxnNVVncjI4TFluR3M1eERYanc2RFpxb0ZLMGxVVENGRmx6ZTArV0JvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjJnVGNFdVFIQ1YyZndPVlZES0lpQy8yKzZNOUJFWGVURHduVTYwMFJzdlBKWnFoVEVpTUJxY2RhYndJZUcxdWZrSTJSbkhWb0hWRXNIZi9CTUh1cEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlM3UFhOVUhYMHNwMno2ZmdKeTRSbXZXZVhwZHljeGlpaFA5VVFVcFg5SHJwcUpEL0N0NFczVTMzNnZKMXJDWW90V2oxY0JQR1dTNmg3YW1BbjA5R0JBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA3MTAwMzA3MTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzNTQzMDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCTFhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJMWC5qc29uIjogIntcImtleURhdGFcIjpcInNyaDJYb1pWc3dVc29sV3RBVzlsWHNUZVh1UXRBYmg5d2MxUmEzSGk4aW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mzg0NTQyMDY4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEzNTQzMDI3NzJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

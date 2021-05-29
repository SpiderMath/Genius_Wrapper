const { GeniusWrapper } = require("../Dist/Index");
const { writeFileSync } = require("fs");
const { config } = require("dotenv");
config();

new GeniusWrapper({
	token: process.env.GENIUS_ACCESS_TOKEN,
})
	.searchSongs("Lost Control")
	.then(res => writeFileSync("SearchSongs_Res.json", JSON.stringify(res, null, "\t")));
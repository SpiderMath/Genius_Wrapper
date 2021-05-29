import Config from "./Types/Config";
import Axios from "axios";
import { SongSearchResponse } from "./Types/SongSearchResponse";

class GeniusWrapper {
	public token: string | undefined;
	private scrapeMode: boolean = true;
	private generalURL: string = "https://genius.com";
	private apiURL: string = "https://api.genius.com";

	constructor(config: Config) {
		this.token = config.token;

		if(this.token?.length) this.scrapeMode = false;
	}

	public async searchSongs(query: string) {
		if(!query) throw new Error("query not provided");
		if(typeof query !== "string") throw new TypeError(`Expected query to be type string, received type ${typeof query}`);

		if(this.scrapeMode) {}
		else {
			const data: SongSearchResponse = (await Axios.get(`${this.apiURL}/search?q=${query}`, {
				headers: {
					"Authorization": `Bearer ${this.token}`,
				},
			}))
				.data;

			return data;
		}
	}
};

export { GeniusWrapper, SongSearchResponse };
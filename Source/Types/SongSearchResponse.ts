interface SongSearchResponse {
	meta: {
		status: number,
		message?: string,
	},
	response?: {
		hits: Hits[],
	}
};

interface Hits {
	highlights: string[],
	index: "song",
	type: "song",
	result: {
		annotation_count: number,
		api_path: string,
		full_title: string,
		header_image_thumbnail_url: string,
		header_image_url: string,
		id: number,
		lyrics_owner_id: number,
		lyrics_state: string,
		path: string,
		pyongs_count: number,
		song_art_image_thumbnail_url: string,
		song_art_image_url: string,
		stats: {
			hot: boolean,
			pageviews: number,
			unreviewed_annotations: string,
		},
		title: string,
		title_with_featured: string,
		url: string,
		song_art_primary_color: string,
		song_art_secondary_color: string,
		primary_artist: Artist,
	},
};

interface Artist {
	api_path: string,
	header_image_url: string,
	id: number,
	image_url: string,
	is_meme_verified: boolean,
	is_verified: false,
	name: string,
	url: string,
}

export { SongSearchResponse, Hits, Artist };
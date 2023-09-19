export interface PokemonsData {
	count: number;
	next: string;
	previous: string;
	results: Result[];
}

interface Result {
	name: string;
	url: string;
}

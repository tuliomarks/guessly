interface PlayerModel {
	id: string;
 	name: string;
	dateCreated: Date;
}

const localStorageKey = "Guessly.players";

class PlayersService {
	static getAll = (): PlayerModel[] => {
		const list = localStorage.getItem(localStorageKey);
		return list ? JSON.parse(list) : [];
	};

	static updateAll = (tasks: PlayerModel[]): void => {
		localStorage.setItem(localStorageKey, JSON.stringify(tasks));
	};
}

export default PlayersService;
export type { PlayerModel as PlayerModel };

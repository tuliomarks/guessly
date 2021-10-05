import { PlayerModel, SettingsModel } from ".";

interface PlayModel {
	settings: SettingsModel;
	players: PlayerModel[];
	playerPoints: number[];
	currentWord?: string;
	currentPlayer?: PlayerModel;
	secondsRemaining?: number;
}

const localStorageKey = "Guessly.play";

class PlayService {
	static get = (): PlayModel => {
		const model = sessionStorage.getItem(localStorageKey);
		return model ? JSON.parse(model) : {};
	};

	static updateAll = (data: PlayModel): void => {
		sessionStorage.setItem(localStorageKey, JSON.stringify(data));
	};
}

export default PlayService;
export type { PlayModel as PlayModel };

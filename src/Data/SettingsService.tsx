interface SettingsModel {
	playersDistribuition: 'single' | 'teams';
	knowledgeBase: 'general' | 'harryPotter' | 'starWars';
	minutesMax: number; // minutes and seconds to turn time 
	secondsMax: number; // 
}

const localStorageKey = "Guessly.settings";

class SettingsService {
	static getAll = (): SettingsModel[] => {
		const list = localStorage.getItem(localStorageKey);
		return list ? JSON.parse(list) : [];
	};

	static updateAll = (tasks: SettingsModel): void => {
		localStorage.setItem(localStorageKey, JSON.stringify(tasks));
	};
}

export default SettingsService;
export type { SettingsModel as SettingsModel };

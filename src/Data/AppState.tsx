import { PlayerModel, PlayModel, SettingsModel } from ".";

export interface AppState {
	players: PlayerModel[];
	settings: SettingsModel | null;
	play: PlayModel | null;
}

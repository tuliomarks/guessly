import SettingsService, { SettingsModel } from "./SettingsService";

type ActionMap<M extends { [index: string]: any }> = {
	[Key in keyof M]: M[Key] extends undefined
		? {
				type: Key;
		  }
		: {
				type: Key;
				payload: M[Key];
		  };
};

export enum SettingsTypes {
	Modify = "MODIFY_SETTINGS",
	Remove = "REMOVE_SETTINGS",
}

type SettingsPayload = {
	[SettingsTypes.Modify]: {
		settings: SettingsModel;
	};
	[SettingsTypes.Remove]: {
		settings: SettingsModel;
	};
};

export type SettingsActions = ActionMap<SettingsPayload>[keyof ActionMap<SettingsPayload>];

export const SettingsReducer = (state: SettingsModel | null, action: SettingsActions) => {

	switch (action.type) {
		case SettingsTypes.Modify: {
			SettingsService.updateAll(action.payload.settings);
			return action.payload.settings;
		}
		case SettingsTypes.Remove: {	
			SettingsService.updateAll({} as SettingsModel);
			return null;
		}
		default:
			return state;
	}
};

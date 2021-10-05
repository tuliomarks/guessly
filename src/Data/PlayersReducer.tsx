import { PlayerModel } from ".";
import PlayersService from "./PlayersService";
import { SettingsActions } from "./SettingsReducer";

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

export enum PlayerTypes {
	Add = "ADD_PLAYER",
	Modify = "MODIFY_PLAYER",
	Remove = "REMOVE_PLAYER",
}

type PlayerPayload = {
	[PlayerTypes.Add]: {
		player: PlayerModel;
	};
	[PlayerTypes.Modify]: {
		player: PlayerModel;
	};
	[PlayerTypes.Remove]: {
		player: PlayerModel;
	};
};

export type PlayerActions = ActionMap<PlayerPayload>[keyof ActionMap<PlayerPayload>];

export const PlayersReducer = (state: PlayerModel[], action: PlayerActions) => {
	switch (action.type) {
		case PlayerTypes.Add: {
			const newList = [...state, action.payload.player];
			PlayersService.updateAll(newList);
			return newList;
		}
		case PlayerTypes.Modify: {
			const index = state.findIndex((state) => state.id === action.payload.player.id);
			state[index] = { ...action.payload.player };

			PlayersService.updateAll(state);
			return state;
		}
		case PlayerTypes.Remove: {
			const newList = state.filter(
				(state) => state !== action.payload.player
			);
			PlayersService.updateAll(newList);
			return newList;
		}
		default:
			return state;
	}
};

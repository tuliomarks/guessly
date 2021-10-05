import { PlayerModel, SettingsModel } from ".";
import { AppState } from "./AppState";
import PlayService, { PlayModel } from "./PlayService";

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

export enum PlayTypes {
	Start = "PLAY_START",
	NewTurn = "PLAY_NEWTURN",
	AddPoints = "PLAY_ADDPOINTS",
	TimeUpdate = "PLAY_TIMEUPDATE",
	Pass = "PLAY_PASS",
}

type PlayPayload = {
	[PlayTypes.Start]: PlayModel,
	[PlayTypes.NewTurn]: {
		currentWord: string;
		currentPlayer: PlayerModel;
	};
	[PlayTypes.AddPoints]: {
		player: PlayerModel;
	};
	[PlayTypes.TimeUpdate]: {
		timeLeft: number;
	};
	[PlayTypes.Pass]: {
		newWord: string;
	};
};

export type PlayActions = ActionMap<PlayPayload>[keyof ActionMap<PlayPayload>];

export const PlayReducer = (state: PlayModel | null, action: PlayActions) => {

	switch (action.type) {
		case PlayTypes.Start: {
			PlayService.updateAll(action.payload);
			return action.payload;
		}
		case PlayTypes.NewTurn: {	
			const newState = { ...state, currentWord: action.payload.currentWord, currentPlayer: action.payload.currentPlayer } as PlayModel;
			PlayService.updateAll(newState);
			return newState;
		}
		case PlayTypes.AddPoints: {	

			const playerToAdd = state?.players.findIndex(x=> x.id === action.payload.player.id);
			// slice to duplicate
			let pointsList = state?.playerPoints.slice() || [];
			
			if (playerToAdd === undefined) return state; 

			pointsList[playerToAdd] = (pointsList[playerToAdd] || 0) + 1;

			const newState = { ...state, playerPoints: pointsList } as PlayModel;
			PlayService.updateAll(newState);
			return newState;
		}
		case PlayTypes.TimeUpdate: {	
			const newState = { ...state, secondsRemaining: action.payload.timeLeft } as PlayModel;
			PlayService.updateAll(newState);
			return newState;
		}
		case PlayTypes.Pass: {	
			const newState = { ...state, currentWord: action.payload.newWord } as PlayModel;
			PlayService.updateAll(newState);
			return newState;
		}
		default:
			return state;
	}
};

import React, { createContext, useReducer } from "react";
import { PlayersReducer } from "./PlayersReducer";
import { PlayModel, SettingsModel } from ".";
import PlayersService from "./PlayersService";
import { SettingsReducer } from "./SettingsReducer";
import { PlayReducer } from "./PlayReducer";
import { AppState } from "./AppState";

const initialState : AppState = { 
	players: PlayersService.getAll(), 
	settings: {} as SettingsModel, 
	play: {} as PlayModel 
};

export const AppContext = createContext<{
	state: AppState;
	dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

const mainReducer = (state: AppState, action: any) => ({
    players: PlayersReducer(state.players, action),
	settings: SettingsReducer(state.settings, action),
	play: PlayReducer(state.play, action),
});

const AppDataProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(mainReducer, initialState);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppDataProvider;


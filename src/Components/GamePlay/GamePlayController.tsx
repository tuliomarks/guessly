import React, { ChangeEvent, MouseEvent,  useContext, useEffect, useState } from "react";
import { Playing, RankList, WaitingRoom } from ".";
import { AppContext, PlayTypes, WordsService } from "../../Data";
import { PlayersSettings, GameSettings  } from "../GameSettings"

const GamePlayController = () => {
	
	const [ step, setStep ] = useState(0);
	const [ currentPlayerIndex, setCurrentPlayerIndex ] = useState(0);
	const { dispatch, state } = useContext(AppContext);

	const goToStep = (nextStep?: number) => {
		const stepAux = nextStep ?? step + 1;
		setStep(stepAux);

		if (stepAux === 2){
			handleStep2();
		}
	}

	const handleStep2 = () => {
		const data = {
			currentPlayer: state.players[currentPlayerIndex],
			currentWord: WordsService.getRandom(),
		};
		dispatch({ type: PlayTypes.NewTurn, payload: data });

		let nextPlayer = currentPlayerIndex + 1;
		if (nextPlayer === state.players.length) nextPlayer = 0;

		setCurrentPlayerIndex(nextPlayer);
	}

	if (step === 1) 
		return (<PlayersSettings onSubmit={() => goToStep()}></PlayersSettings>);
	if (step === 2) 
		return (<WaitingRoom onSubmit={() => goToStep()}></WaitingRoom>);
	if (step === 3) 
		return (<Playing onFinish={() => goToStep()}></Playing>);
	if (step === 4) 
		return (<RankList onSubmit={() => goToStep(2)}></RankList>);
		
	return (<GameSettings onSubmit={() => goToStep()}></GameSettings>);
};

export default GamePlayController;

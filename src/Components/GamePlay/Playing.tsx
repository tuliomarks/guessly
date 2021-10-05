import React, { ChangeEvent, MouseEvent,  useContext, useEffect, useState } from "react";
import { AppContext, PlayTypes, WordsService } from "../../Data";
import { Button } from "../Shared";

interface PlayingProps {
	onFinish: (success: boolean) => void;
}

const Playing :  React.FC<PlayingProps> = (props) => {
	
	const getTotalSeconds = () : number => {
		const minutes = state.play?.settings.minutesMax ?? 0;
		const seconds = state.play?.settings.secondsMax ?? 0;
		return (minutes * 60) + seconds;
	};

	const { dispatch, state } = useContext(AppContext);
	const [ timeLeft, setTimeLeft ] = useState(getTotalSeconds());
	const [ passLeft, setPassLeft ] = useState(3);
	//const [ timeLeft, setTimeLeft ] = useState(5);
	const [ timesUp, setTimesUp ] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			const time = timeLeft;
		  	setTimeLeft(time-1);

			dispatch({ type: PlayTypes.TimeUpdate, payload: { timeLeft: time } });
			
			if (time == 0){
				setTimesUp(true);
				clearTimeout(timer);
			}
		}, 1000);
		return () => clearTimeout(timer);
	});

	const handleSubmit = (success: boolean) => {
		dispatch({ type: PlayTypes.AddPoints, payload: {player: state.play?.currentPlayer} });		
		if (props.onFinish) props.onFinish(success)
	};

	const handlePass = () => {
		dispatch({ type: PlayTypes.Pass, payload: { newWord: WordsService.getRandom() } });
		setPassLeft(passLeft - 1);
	};

	const getTimeLeftFormat = () => {
		const time = timeLeft;

		if (time < 0) return null;
		
		const minutes = Math.floor(time / 60);
		const seconds = time - (minutes * 60);
		
		return `${('0'+minutes).slice(-2)} : ${('0'+seconds).slice(-2)}`;
	};
	
	return (
		<div className="flex flex-grow flex-col justify-center items-center p-4">
			<p className="text-xl font-bold mt-4">{state.play?.currentWord}</p>
			<p className="text-xl font-bold mt-4">{getTimeLeftFormat() || "Time's Up!"}</p>
			{ 
				(!timesUp && passLeft > 0) && <Button className="mt-4" onClick={handlePass}>Another Word ({passLeft})</Button>
			}
			<div className="flex flex-col mt-20 text-center col-span-12">
				{ 
					timesUp && 
						(<Button className="w-52 mb-4" color="danger" onClick={() => handleSubmit(false)}>No one guessed</Button>)  
				}
				<Button className="w-52" color="success" onClick={() => handleSubmit(true)}>They guessed!</Button>
			</div>
	</div>
	);
};

export default Playing;

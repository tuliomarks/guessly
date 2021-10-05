import React, {  useContext, useEffect } from "react";
import { RankList } from ".";
import { AppContext } from "../../Data";
import { Button } from "../Shared";

interface WaitingRoomProps {
	onSubmit: () => void;
}

const WaitingRoom: React.FC<WaitingRoomProps> = (props) => {
	
	const { dispatch, state } = useContext(AppContext);

	const handleSubmit = () => {
		if (props.onSubmit) props.onSubmit();
	};

	const getTimeLeftFormat = () => {
		return `${state.play?.settings.minutesMax}:${state.play?.settings.secondsMax}`;
	};

	return (
		<div className="flex flex-grow flex-col justify-center items-center p-4">
			<h3 className="mt-16">Next to go!</h3>
			<p className="text-xl font-bold mt-4">{state.play?.currentPlayer?.name}</p>
			<p className="mt-4">with {getTimeLeftFormat()} minutes</p>
			<Button className="mt-20 text-center col-span-12 w-52" onClick={handleSubmit}>Ready! Set! Go!</Button>
	</div>
	);
};

export default WaitingRoom;

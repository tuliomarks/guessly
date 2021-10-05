import { PlusCircleIcon } from "@heroicons/react/outline";
import React, {  useContext, useEffect, useState } from "react";
import { AppContext, PlayerModel, PlayTypes } from "../../Data";
import { PlayerListItem } from "../GameSettings";
import { Button } from "../Shared";

interface RankItem {
	playerIndex: number;
	player: PlayerModel;
	points: number;
}

interface RankListProps {
	onSubmit: () => void;
}

const RankList: React.FC<RankListProps> = (props) => {
	
	const [ pointsToGive, setPointsToGive ] = useState(1);
	const { state, dispatch } = useContext(AppContext);

	const getRankOrdered = (): RankItem[] => {

		let list = state.play?.players.map((elem: PlayerModel, idx: number) => { 
			return { 
					points: state.play?.playerPoints[idx] || 0, 
					player: elem,
					playerIndex: idx
				} as RankItem }
			);

		if (!list || list.length === 0) 
			return [];

		// sort descending by points
		return list.sort((a, b) => b.points - a.points);
	}

	const handleGivePoint = (playerIdx: number) => {
		
		const newPoints = pointsToGive - 1;
		setPointsToGive(newPoints);

		dispatch({ type: PlayTypes.AddPoints, payload: {player: state.play?.players[playerIdx]} });
	}

	const isTeamPlay = () => {
		return state.play?.settings.playersDistribuition === 'teams';
	}
	const canGivePoints = (player: RankItem) => {
		// with player distribuition team, only the team won the point if they guess.
		return !isTeamPlay() && pointsToGive > 0 && player.player.id !== state.play?.currentPlayer?.id;
	}

	if (!state.play || state.play?.players.length === 0) 
		return (<></>);

	return (
		<div className="flex flex-col p-4">
			<p className="mb-4 place-self-center"><strong>{state.play.currentPlayer?.name}</strong> won a point{ !isTeamPlay() && (<span>, give another to who guessed. </span>) }</p>
			<h3 className="font-bold mb-4 place-self-center">Final Score</h3>
			{ 
				getRankOrdered().map((elem: RankItem, index: number) => (
					<PlayerListItem
							key={index}
							name={elem.player.name}
						>
							<span className="font-bold mr-4">{elem.points} pts</span>
							{ canGivePoints(elem)
								&& 
								(<Button onClick={(e) => handleGivePoint(elem.playerIndex)}>
									<PlusCircleIcon className="h-5 w-5 text-green-500" />
								</Button>)
							}
						</PlayerListItem>
				))
			}
			<Button className="mt-6 text-center w-52 mt-8 place-self-center" onClick={props.onSubmit} disabled={!isTeamPlay() && pointsToGive > 0}>Next Player!</Button>
	</div>
	);
};

export default RankList;

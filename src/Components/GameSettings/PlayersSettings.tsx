import {
	UserAddIcon,
	TrashIcon,
} from "@heroicons/react/outline";
import React, { useContext, useState } from "react";
import { PlayerListItem } from ".";
import { AppContext, PlayerModel, PlayerTypes, PlayModel, PlayTypes, WordsService } from "../../Data";
import { Button, Dialog } from "../Shared";
import NewPlayerForm from "./NewPlayerForm";

interface PlayerSettingsProps {
	onSubmit: () => void;
}

const PlayersSettings: React.FC<PlayerSettingsProps> = (props) => {
	const { dispatch, state } = useContext(AppContext);

	const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

	const handleSubmit = (newPlayer: PlayerModel) => {
		dispatch({ type: PlayerTypes.Add, payload: { player: newPlayer } });
	};

	const handleFinish = () => {
		const data = {
			settings: state.settings,
			players: state.players,
			playerPoints: [],
		} as PlayModel;
		dispatch({ type: PlayTypes.Start, payload: data });
		if (props.onSubmit) props.onSubmit();
	};

	const handlePlayerDelete = (player: PlayerModel) => {
		dispatch({ type: PlayerTypes.Remove, payload: { player } });
	};

	return (
		<div className="flex flex-grow flex-col justify-center p-4">
			<div className="flex flex-row content-start items-center place-self-center">
				<h3 className="font-bold mr-4">Who are the chosen?</h3>
				<Button onClick={() => setIsFormVisible(true)} >
					<UserAddIcon className="h-5 w-5 text-gray-400"></UserAddIcon>
				</Button>
				{isFormVisible && (
					<Dialog
						title="New Player"
						isVisible={isFormVisible}
						onClose={() => setIsFormVisible(false)}
					>
						<NewPlayerForm
							onSubmit={handleSubmit}
							onClose={() => setIsFormVisible(false)}
						></NewPlayerForm>
					</Dialog>
				)}
			</div>
			<div className="flex flex-col mt-4">
				{state.players.length !== 0 ? (
					state.players.map((elem: PlayerModel, index: number) => (
						<PlayerListItem
							key={index}
							name={elem.name}
						>
							<Button onClick={() => handlePlayerDelete(elem)}>
								<TrashIcon className="h-5 w-5 text-red-400" />
							</Button>
						</PlayerListItem>
					))
				) : (
					<div>Add some players!</div>
				)}
			</div>
			<Button className="mt-8 text-center col-span-12 w-52 place-self-center" onClick={() => handleFinish()}>That's All</Button>
	</div>
	);
};

export default PlayersSettings;

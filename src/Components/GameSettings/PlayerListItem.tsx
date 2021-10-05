import { CalendarIcon, CheckIcon } from "@heroicons/react/outline";
import moment from "moment";
import React from "react";

export interface PlayerListItemProps {
	name: string;
	dateCreated?: Date;
}

const PlayerListItem: React.FC<PlayerListItemProps> = (props) => {

	return (
		<div className="flex flex-row shadow p-4 rounded-lg mb-2 bg-white items-center">
			<p className="flex-grow mr-2 text-lg">{props.name}</p>
			<div className="flex flex-none flex-row items-center">
				{props.children}
			</div>
		</div>
	);
};

export default PlayerListItem;

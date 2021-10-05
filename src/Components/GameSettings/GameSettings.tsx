import React, { ChangeEvent, MouseEvent,  useContext, useState } from "react";
import { AppContext, SettingsTypes } from "../../Data";
import { Button, Input } from "../Shared";

interface GameSettingsProps {
	onSubmit: () => void;
}

const GameSettings: React.FC<GameSettingsProps> = (props) => {

	const [form, setForm] = useState({ playersDistribuition: "single", knowledgeBase: "general", minutesMax: 1, secondsMax: 30 });
	
	const { dispatch, state } = useContext(AppContext);

	const handleSubmit = () => {
		dispatch({ type: SettingsTypes.Modify, payload: { settings: form } });
		if (props.onSubmit) props.onSubmit();
	};

	const handleButtonChange = (field: string, event: MouseEvent<any>, value: any) => {
		event.preventDefault();
		setForm({ ...form, [field]: value });
	};

	const handleChange = (field: string, event: ChangeEvent<any>) => {
		event.preventDefault();
		setForm({ ...form, [field]: event?.target?.value });
	};

	return (
		<div className="flex flex-grow justify-center p-4">
			<form className="grid gap-3 content-start justify-items-center">

				<h3 className="col-span-12">Players distribuition</h3>
				<div className="grid grid-cols-2 gap-3 w-full mt-2 items-center justify-items-center col-span-12">
					<Button 
						className="text-center" 
						color={form.playersDistribuition === "single"? "secondary": "default"}
						onClick={(e) => handleButtonChange("playersDistribuition", e, "single")}>Free for all</Button>
					<Button 
						className="text-center" 
						color={form.playersDistribuition === "teams"? "secondary": "default"}
						onClick={(e) => handleButtonChange("playersDistribuition", e, "teams")}>Better together (teams)!</Button>
				</div>

				<h3 className="col-span-12 mt-8">Knowledge base</h3>
				<div className="grid gap-3 grid-cols-3 w-full mt-2 items-center justify-items-center col-span-12">
					<Button 
						className="text-center" 
						color={form.knowledgeBase === "general"? "secondary": "default"}
						onClick={(e) => handleButtonChange("knowledgeBase", e, "general")}>General (pt-br)</Button>
					<Button 
						className="text-center" 
						color={form.knowledgeBase === "harryPotter"? "secondary": "default"}
						onClick={(e) => handleButtonChange("knowledgeBase", e, "harryPotter")}>Harry Potter</Button>
					<Button 
						className="text-center" 
						color={form.knowledgeBase === "starWars"? "secondary": "default"}
						onClick={(e) => handleButtonChange("knowledgeBase", e, "starWars")}>Star Wars</Button>
				</div>

				<h3 className="col-span-12 mt-8">Max time to guess</h3>
				<div className="grid gap-3 grid-cols-2 w-full mt-2 items-center justify-items-center col-span-12">
					<div>
						<Input 
							className="w-16" 
							value={form.minutesMax.toString()}
							onChange={(e) => handleChange("minutesMax", e)}>
						</Input>
						<span className="text-sm ml-2">minute(s)</span>
					</div>				
					<div>
						<Input 
							className="w-16"
							value={form.secondsMax.toString()}
							onChange={(e) => handleChange("secondsMax", e)}>
						</Input>
						<span className="text-sm ml-2">second(s)</span>
					</div>
				</div>

				<Button className="mt-8 text-center col-span-12 w-52" onClick={() => handleSubmit()}>Let's Start</Button>
			</form>
		</div>
	);
};

export default GameSettings;

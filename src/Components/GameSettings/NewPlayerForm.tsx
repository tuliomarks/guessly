import React, { ChangeEvent, FormEvent, useState } from "react";
import { PlayerModel } from "../../Data";
import { Button, Input } from "../Shared";
import { generateId } from "../../Utils/Utils";

export interface NewPlayerFormProps {
	onSubmit?(player: PlayerModel): void;
	onClose?(): void;
}

const NewPlayerForm: React.FC<NewPlayerFormProps> = (props) => {
	const [form, setForm] = useState({ name: "" });

	const handleChange = (field: string, event: ChangeEvent<any>) => {
		event.preventDefault();
		setForm({ ...form, [field]: event?.target?.value });
	};

	const handleFormSubmit = (event: FormEvent) => {
		event.preventDefault();
		const player = { ...form, dateCreated: new Date(), id: generateId(18) } as PlayerModel;

		if (props.onSubmit) {
			props.onSubmit(player);
		}
		if (props.onClose){
			props.onClose();
		}
	};

	return (
		<form
			className="flex flex-col"
			onSubmit={handleFormSubmit}
		>
			<Input
				placeholder="Name"
				className="mb-5"
				value={form.name}
				onChange={(e) => handleChange("name", e)}
			></Input>
			<div className="flex flex-row justify-end">
				<Button className="mr-2" onClick={props.onClose}>Cancel</Button>
				<Button className="min-w-1/6" color="primary" type="submit">
					Add
				</Button>
			</div>
		</form>
	);
};

export default NewPlayerForm;

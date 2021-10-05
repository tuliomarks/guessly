import React, { useState } from "react";
import { Button } from "../Shared";

interface CreditsProps {
	onClose: () => void;
}

const Credits: React.FC<CreditsProps>= (props) => {

	return (
		<div className="flex flex-col flex-grow justify-center items-center p-4">

			<strong>Creation</strong>
			<p>Tulio Allan Marks</p>
			<strong className="mt-4">Testers</strong>
			<p>Feio (Felipe Cesario) </p>
			<p>e </p>
			<p>Cotoco (Wildeney Rigo)</p>
			<Button className="mt-6 text-center w-52 mt-20" onClick={props.onClose}>Back</Button>
		</div>
	);

};

export default Credits;

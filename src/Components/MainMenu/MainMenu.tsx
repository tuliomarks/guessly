import React, { useState } from "react";
import { GamePlayController } from "../GamePlay";
import { Button } from "../Shared";
import { Credits, HowToPlay } from "./"

const MainMenu = () => {

	const [ step, setStep ] = useState(0);

	const goToStep = (nextStep?: number) => {
		const stepAux = nextStep ?? step + 1;
		setStep(stepAux);
	}
	
	const refresh = () => {
		window.location.reload(); 
	}
	
	if (step === 1)
		return (<GamePlayController></GamePlayController>);

	if (step === 2)
		return (<HowToPlay onClose={() => goToStep(0)}></HowToPlay>);

	if (step === 3)
		return (<Credits onClose={() => goToStep(0)}></Credits>);

	return (
		<div className="flex flex-grow justify-center items-center p-4">
			<nav className="flex flex-col items-center">
				<Button className="mt-2 text-center w-52" onClick={() => goToStep(1)}>Play!</Button>
				<Button className="mt-6 text-center w-52" onClick={() => goToStep(2)}>How to Play</Button>
				<Button className="mt-2 text-center w-52" onClick={() => goToStep(3)}>Credits</Button>
				<Button className="mt-6 text-center w-52" onClick={() => refresh()}>Bye, see you soon</Button>
			</nav>
		</div>
	);

};

export default MainMenu;

import React, { useState } from "react";
import { Button } from "../Shared";

interface HowToPlayProps {
	onClose: () => void;
}

const HowToPlay: React.FC<HowToPlayProps>= (props) => {

	return (
		<div className="flex flex-col flex-grow justify-center items-center p-4">

			<p>Use your imagination and comunication skills to help the others to guess what is you word, without doing any sound, can't speak, can't point to objects or player. </p>
			<p className="mt-4">Use your body as language and give them a show! <strong>Mimic!</strong></p>

			<p className="mt-8"><strong>1- </strong>Setup the rules</p>
			<p className="mt-2"><strong>2- </strong>Setup the players/teams</p>
			<p className="mt-2"><strong>3- Player to mimic </strong>See who is the first to play. When the player is ready, he can hit "Ready" button.</p>
			<p className="mt-2"><strong>4- Word and mimic </strong>Take a look into your word, no one else can see the word. The player can change the word clicking in the "Pass" button, it if prefer. And start to mimic!</p>
			<p className="mt-2"><strong>5- Guess or not </strong>The other players need to guess what the word is. They can speak, ask questions. If you are playing in teams only the current team can guess.</p>
			<p className="mt-2"><strong>6- Next Player </strong>If someone is right about the word, the turn ends and the next player/team go to do the mimics. If no one guess the word during the time period, the turn ends. Go to Step 3.</p>

			<p className="mt-4"><strong>POINTS: </strong>When player individually will get a point who mimic and who correctly guess the word. When playing in teams only the current team will get a point if correctly guess the word.</p>
			<p className="mt-4"><strong>OBJECTIVE: </strong>Mimic, guess and point.</p>
	
			<Button className="mt-6 text-center w-52 mt-8" onClick={props.onClose}>Back</Button>
		</div>
	);

};

export default HowToPlay;

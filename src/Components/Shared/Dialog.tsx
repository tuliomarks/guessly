import React, { useEffect, useState } from "react";
import { XIcon } from "@heroicons/react/outline";

export interface DialogProps {
	title: string;
	isVisible: boolean;
	className?: string;
	children?: React.ReactNode;
	onConfirm?: () => void;
	onClose?: () => void;
}

const Dialog: React.FC<DialogProps> = (props) => {
 
	const [ isVisible, setIsVisible ] = useState(false);

	useEffect(() => {

		// this is just to execute correctly the CSS transition
		setTimeout(() => {
			setIsVisible(props.isVisible);
		}, 100);
		
		const handleKeyDown = (event: KeyboardEvent) => {
			if(event.key === "Escape") {
				props.onClose && props.onClose()
			}		
		}

		document.addEventListener("keydown", handleKeyDown, false);
		
		return () => {
			document.removeEventListener("keydown", handleKeyDown, false);
		}
	}, [props])

	return (
		<div
			className={
				"modal fixed w-full h-full top-0 left-0 flex items-center justify-center ease-linear transition-all duration-200 " +
				(!isVisible ? "opacity-0 pointer-events-none" : null)
			}
		>
			<div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

			<div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
				<div
					className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
					onClick={props.onClose}
				>
					<XIcon className="h-5 w-5" />
					<span className="text-sm">(Esc)</span>
				</div>

				<div className="modal-content py-4 text-left px-6">
					<div className="flex justify-between items-center pb-3">
						<p className="text-lg font-bold">{props.title}</p>
						<div
							className="modal-close cursor-pointer z-50"
							onClick={props.onClose}
						>
							<XIcon className="h-5 w-5 text-gray-400" />
						</div>
					</div>

					{props.children}
				</div>
			</div>
		</div>
	);
};

export default Dialog;

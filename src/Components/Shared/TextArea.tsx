import React from "react";
import { ChangeEventHandler } from "react";

export interface TextAreaProps {
	className?: string;
	placeholder?: string;
	hint?: string;
	value?: string;
	onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

const TextArea: React.FC<TextAreaProps> = (props) => {
	return (
		<div className={"mb-3 pt-0" + props.className}>
			<textarea
				placeholder={props.placeholder}
				value={props.value}
				className="px-3 py-3 placeholder-gray-300 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
				onChange={props.onChange}
			/>
			{props.hint && (
				<p className="text-gray-600 text-xs italic">{props.hint}</p>
			)}
		</div>
	);
};

export default TextArea;

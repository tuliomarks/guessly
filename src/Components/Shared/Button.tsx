import React, { MouseEventHandler } from "react";

export interface ButtonProps {
	className?: string;
	type?: "button" | "submit";
	color?: "default" | "primary" | "secondary" | "success" | "danger";
	children?: React.ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
	const color = props.color || "default";
	const type = props.type || "button";

	const getDisableClass = () => {
		if (props.disabled) {
			return "opacity-50 cursor-not-allowed";
		}
		return "";
	};

	const getColorClass = () => {
		if (color === "default") {
			return "bg-white hover:bg-gray-100";
		}
		if (color === "primary") {
			return "bg-primary-500 hover:bg-primary-600 text-white";
		}
		if (color === "secondary") {
			return "bg-secondary-600 hover:bg-secondary-700 text-white";
		}
		if (color === "success") {
			return "bg-green-500 hover:bg-green-600 text-white";
		}
		if (color === "danger") {
			return "bg-red-600 hover:bg-red-700 text-white";
		}
		return "";
	};

	return (
		<button
			type={type}
			className={`shadow hover:shadow-lg p-4 rounded-lg ease-linear transition-all duration-150 font-bold ${getColorClass()}  ${getDisableClass()} ${props.className}`}
			onClick={props.onClick}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	);
};

export default Button;

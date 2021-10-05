import React from "react";

export interface LinkProps {
	className?: string;
	color?: "default" | "primary" | "secondary";
	children?: React.ReactNode;
	href?: string;
}

const Link: React.FC<LinkProps> = (props) => {
	const color = props.color || "default";

	const getColorClass = () => {
		if (color === "default") {
			return "bg-white hover:bg-gray-100";
		}
		if (color === "primary") {
			return "bg-primary-500 hover:bg-primary-600 text-white";
		}
		if (color === "secondary") {
			return "bg-secondary hover:bg-secondary-600 text-white";
		}
	};

	return (
		<a
			className={
				"shadow hover:shadow-lg p-4 rounded-lg ease-linear transition-all duration-150 font-bold " +
				getColorClass() +
				" " +
				props.className
			}
			href={props.href}
		>
			{props.children}
		</a>
	);
};

export default Link;

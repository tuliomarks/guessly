import React from "react";
import { Header } from ".";
import MainMenu from "../MainMenu/MainMenu";

const Layout = () => {
	return (
		<div className="flex flex-col flex-grow bg-gray-100 min-h-screen">
			<Header></Header>
			<MainMenu></MainMenu>
		</div>
	);
};

export default Layout;

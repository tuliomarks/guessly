import React from "react";
import "./App.css";
import "tailwindcss/tailwind.css"
import { Layout } from "./Components/Layout";
import { AppDataProvider } from "./Data";


const App = () => {
	return (
	<AppDataProvider>
		<Layout></Layout>
	</AppDataProvider>
	);
};

export default App;

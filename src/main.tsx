import React from "react";
import ReactDOM from "react-dom/client";
import { Recipes } from "./recipes/pages/Recipes";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Recipes />
	</React.StrictMode>
);

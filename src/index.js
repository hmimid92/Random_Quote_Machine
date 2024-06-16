import React from "react";
import ReactDOM from "react-dom/client";
import RandomQuoteMachine from "./RandomQuoteMachine";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RandomQuoteMachine />
	</React.StrictMode>
);
reportWebVitals();

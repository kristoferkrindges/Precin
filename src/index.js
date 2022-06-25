import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserContextProvider } from "./context/userContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// React.StrictMode causes useEffect to be fired twice in development mode, so images displayed twice during the upload with Firebase Storage
	// <React.StrictMode>
	<UserContextProvider>
		<App />
	</UserContextProvider>
	// </React.StrictMode>
);

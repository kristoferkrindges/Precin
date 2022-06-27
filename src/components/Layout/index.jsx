import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { DLayout, SMain } from "./style";
import Main from "../Main";
import Suggestion from "../Suggestion";
import { SearchContext } from "../../context/searchContext";
import { useUserContext } from "../../context/userContext";

function Layout({ children }) {
	// const { user, logoutUser } = useUserContext();
	const [tokenProduct, setTokenProduct] = useState("");
	return (
		<>
			<DLayout>
				<SearchContext.Provider value={{ setTokenProduct, tokenProduct }}>
					<Sidebar /*name={user.displayName} logoutUser={logoutUser}*/ />
					<Main></Main>
					<Suggestion></Suggestion>
				</SearchContext.Provider>
			</DLayout>
		</>
	);
}

export default Layout;

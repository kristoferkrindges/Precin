import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { DLayout, SMain } from "./style";
import Main from "../Main";
import Suggestion from "../Suggestion";
import { SearchContext } from "../../context/searchContext";

function Layout({ children }) {
	const [tokenProduct, setTokenProduct] = useState("");
	return (
		<>
			<DLayout>
				<SearchContext.Provider value={{ setTokenProduct, tokenProduct }}>
					<Sidebar name="Kristofer Krindges" />
					<Main></Main>
					<Suggestion></Suggestion>
				</SearchContext.Provider>
			</DLayout>
		</>
	);
}

export default Layout;

import React from "react";
import Feeds from "../Main/Feed/Feeds";

import { Container } from "./style";
import { useParams } from "react-router-dom";
import Menu from "../Shared/Menu";

function SearchResult() {
	let { product } = useParams();
	return (
		<>
			<Menu></Menu>
			<Container>
				<h2>Resultado para: {product}</h2>
				<Feeds />
			</Container>
		</>
	);
}

export default SearchResult;

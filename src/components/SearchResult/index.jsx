import React from "react";
import Feeds from "../Main/Feed/Feeds";
import Header from "../Shared/Header";
import { Container } from "./style";
import { useParams } from "react-router-dom";

function SearchResult() {
	let { product } = useParams();
	return (
		<>
			<Header />
			<Container>
				<h2>Resultado para: {product}</h2>
				<Feeds />
			</Container>
		</>
	);
}

export default SearchResult;

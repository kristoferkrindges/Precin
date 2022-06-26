import React, { useContext, useEffect, useRef, useState } from "react";
import {
	Container,
	Context,
	Divider,
	Search,
	SearchIcon,
	IoSearch,
	Trends,
	Trend,
	List,
	Item,
	License,
	Colleter,
} from "./style";
import { SearchContext } from "../../context/searchContext";

function Suggestion(props) {
	const { tokenProduct, setTokenProduct } = useContext(SearchContext);
	console.log(tokenProduct);

	useEffect(() => {}, []);
	return (
		<Container>
			<Context>
				<Search>
					<SearchIcon>
						<IoSearch />
					</SearchIcon>
					<input
						placeholder="Search"
						onChange={(e) => setTokenProduct(e.target.value)}
					/>
				</Search>
				<Divider />
				<Trends>
					<Trend>Em Alta</Trend>
					<Colleter>
						<span className="search">#Frutas</span>
						<span className="item">🍇 Uva</span>
						<span className="item">🍍 Abacaxi</span>
					</Colleter>
					<Colleter>
						<span className="search">#FastFood</span>
						<span className="item">🍕 Pizza</span>
						<span className="item">🍔 Hambúrguer</span>
					</Colleter>
					<Colleter>
						<span className="search">#Verduras</span>
						<span className="item">🌽 Milho</span>
						<span className="item">🥕 Cenoura</span>
					</Colleter>
					<Colleter>
						<span className="search">#Doces</span>
						<span className="item">🍫 Chocolate</span>
						<span className="item">🍪 Biscoito</span>
					</Colleter>
					<Colleter>
						<span className="search">#Higiene</span>
						<span className="item">🪥 Escova de Dentes</span>
						<span className="item">🧻 Rolo de Papel</span>
					</Colleter>
					{/* 
					<List>
						<Item>🍅 Tomate</Item>
						<Item>🍇 Uva</Item>
						<Item>🍍 Abacaxi</Item>
						<Item>🍕 Pizza</Item>
						<Item>🍫 Chocolate</Item>
						<Item>🧄 Alho</Item>
					</List> */}
				</Trends>
				<Divider />
				<License>Precin © Todos os direitos Reservados</License>
			</Context>
		</Container>
	);
}

export default Suggestion;

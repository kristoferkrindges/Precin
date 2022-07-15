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
	STrends,
	Join,
	NavBtn,
	NavBtnLink,
	Icons,
	IoPersonCircle,
	IoCart,
	IoBookmark,
} from "./style";
import { SearchContext } from "../../context/searchContext";
import { useUserContext } from "../../context/userContext";
import logo from "../../imagens/logo.png";
import { Link } from "react-router-dom";

function Suggestion(props) {
	const { user } = useUserContext;
	// const { tokenProduct, setTokenProduct } = useContext(SearchContext);
	// console.log(tokenProduct);
	let pha;
	let route;
	if (user !== null) {
		pha = "Publicar";
		route = "/publication";
	} else {
		pha = "Entrar";
		route = "/login";
	}

	useEffect(() => {}, []);
	return (
		<Container>
			<Context>
				{/* <Search>
					<SearchIcon>
						<IoSearch />
					</SearchIcon>
					<input
						placeholder="Search"
						onChange={(e) => setTokenProduct(e.target.value)}
					/>
				</Search> */}
				<Join>
					{/* <Trend>Poste agora</Trend> */}
					<Icons>
						<Link to="/login">
							<IoPersonCircle></IoPersonCircle>
						</Link>
						<Link to="/listshop">
							<IoCart></IoCart>
						</Link>
						<Link to="/yourpublic">
							<IoBookmark></IoBookmark>
						</Link>
					</Icons>
					<NavBtn>
						<NavBtnLink to={route}>{pha}</NavBtnLink>
					</NavBtn>
				</Join>
				{/* <Divider /> */}
				<Trends>
					<Trend>Em Alta</Trend>
					<Colleter>
						<Link to="/search_result/Suco">
							<span className="search"># Suco</span>
						</Link>
						{/* <span className="item">🍇 Uva</span>
						<span className="item">🍍 Abacaxi</span> */}
					</Colleter>
					<Colleter>
						<Link to="/search_result/Tomate">
							<span className="search"># Tomate</span>
						</Link>
					</Colleter>
					<Colleter>
						<Link to="/search_result/Bis">
							<span className="search"># Bis</span>
						</Link>
					</Colleter>
					<Colleter>
						<Link to="/search_result/Alho">
							<span className="search"># Alho</span>
						</Link>
					</Colleter>
					<Colleter>
						<Link to="/search_result/Moranga">
							<span className="search"># Moranga</span>
						</Link>
					</Colleter>
					<Colleter>
						<Link to="/search_result/Leite">
							<span className="search"># Leite</span>
						</Link>
					</Colleter>
					<Colleter>
						<Link to="/search_result/Arroz">
							<span className="search"># Arroz</span>
						</Link>
					</Colleter>
					<Colleter>
						<Link to="/search_result/Banana">
							<span className="search"># Banana</span>
						</Link>
					</Colleter>
					<Colleter>
						<Link to="/search_result/Morango">
							<span className="search"># Morango</span>
						</Link>
					</Colleter>
					<Colleter>
						<Link to="/search_result/Detergente">
							<span className="search"># Detergente</span>
						</Link>
					</Colleter>
				</Trends>
				{/* <Divider /> */}
				<STrends>
					<License>#TáNoPrecin</License>
					<img src={logo}></img>
				</STrends>
				<STrends>
					<License>Precin © Todos os direitos Reservados</License>
				</STrends>
			</Context>
		</Container>
	);
}

export default Suggestion;

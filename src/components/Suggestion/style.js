import styled from "styled-components";
import { btnReset, v } from "../../styles/variables";
import { IoSearchOutline } from "react-icons/io5";
import { Link as LinkR } from "react-router-dom";
import {
	IoPersonCircleOutline,
	IoCartOutline,
	IoBookmarkOutline,
} from "react-icons/io5";

export const IoPersonCircle = styled(IoPersonCircleOutline)`
	width: 30px;
	height: 30px;

	&:hover {
		color: ${({ theme }) => theme.buttons};
	}
`;

export const IoCart = styled(IoCartOutline)`
	width: 30px;
	height: 30px;

	&:hover {
		color: ${({ theme }) => theme.buttons};
	}
`;

export const IoBookmark = styled(IoBookmarkOutline)`
	width: 30px;
	height: 30px;

	&:hover {
		color: ${({ theme }) => theme.buttons};
	}
`;

export const Container = styled.div`
	/* background: ${({ theme }) => theme.navbar}; */
	height: 37vw;
	width: 24vh;
	border-radius: 25px;
	margin-top: 1.3%;
	margin-left: 2%;
	/* margin-right: 17%; */
	/* margin-right: 1%; */

	@media (max-width: 800px) {
		display: none;
	}
`;

export const Context = styled.div`
	/* display:flex;
    justify-content: center; */
	/* align-items: center; */
	/* margin-top: 2%; */
	position: fixed;
	height: 30vw;
	width: 24vh;
	border-radius: 25px;
	/* padding: ${v.lgSpacing}; */
	/* background: ${({ theme }) => theme.navbar}; */
	/* margin-right: 20px; */
`;

export const Join = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	background: ${({ theme }) => theme.navbar};
	padding: 1rem;
	border-radius: 1rem;
	/* padding-left: 1.5rem; */
	margin-bottom: 5%;
	/* border: 1px solid black; */
`;
export const NavBtn = styled.nav`
	display: flex;
	align-items: center;
	margin-top: 2%;

	/* margin-left: 5%; */
`;

export const Icons = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;

	a {
		text-decoration: none;
		color: ${({ theme }) => theme.title};
	}

	/* margin-left: 5%; */
`;

export const NavBtnLink = styled(LinkR)`
	border-radius: 50px;
	background: ${({ theme }) => theme.buttons};
	white-space: nowrap;
	padding: 10px 22px;
	color: white;
	font-size: 1.5rem;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	text-align: center;
	width: 12rem;
	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${({ theme }) => theme.buttons_hover};
	}

	/* @media (max-width: 1800px) {
		display: none;
	} */
`;

export const Divider = styled.div`
	height: 1px;
	width: 100%;
	background: ${({ theme }) => theme.bg3};
	margin: ${v.lgSpacing} 0;
`;

export const Search = styled.div`
	background: ${({ theme }) => theme.bgAlpha};
	border: 1px solid ${({ theme }) => theme.bg3};
	border-radius: 25px;
	input {
		padding: 0 ${v.smSpacing};
		font-family: inherit;
		letter-spacing: inherit;
		font-size: 16px;
		width: 100%;
		outline: none;
		border: none;
		color: inherit;
		background: transparent;
	}
	display: flex;
`;

export const SearchIcon = styled.button`
	${btnReset};
	padding: calc(${v.mdSpacing} - 2px) ${v.mdSpacing};
	display: flex;
	cursor: pointer;
	svg {
		font-size: 20px;
	}
`;

export const IoSearch = styled(IoSearchOutline)``;

export const Trends = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	background: ${({ theme }) => theme.navbar};
	padding: 1rem;
	border-radius: 1rem;
	padding-left: 2rem;
	/* border: 1px solid black; */
	/* background: ${({ theme }) => theme.bgAlpha}; */
	/* border: 1px solid ${({ theme }) => theme.bg3}; */
	/* border-radius: 25px;
	padding: ${v.smSpacing}; */
`;

export const STrends = styled.div`
	/* display:flex;
    justify-content: center; */
	/* align-items: center; */
	/* margin-top: 2%; */
	display: flex;
	align-items: center;

	/* flex-direction: column; */
	gap: 1rem;
	background: ${({ theme }) => theme.navbar};
	padding: 1rem;
	border-radius: 1rem;
	padding-left: 2rem;
	margin-top: 5%;
	/* border: 1px solid black; */
	/* padding: ${v.lgSpacing}; */
	/* background: ${({ theme }) => theme.navbar}; */
	/* margin-right: 20px; */

	& img {
		width: 30px;
		border-radius: 10px;
		/* margin-left: 15%; */
	}
`;

export const Trend = styled.h1`
	white-space: nowrap;
	font-size: 2rem;
	color: ${({ theme }) => theme.title};
`;

export const Colleter = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	color: ${({ theme }) => theme.title};

	& .search {
		font-weight: bold;
		font-size: 1.5rem;
	}
	& .item {
		font-size: 1rem;
	}

	a {
		text-decoration: none;
		color: ${({ theme }) => theme.title};
	}
	a:hover {
		color: ${({ theme }) => theme.buttons};
	}
`;

export const List = styled.ul``;

export const Item = styled.li`
	font-size: 1rem;
	margin: 15% 5% 10% 10%;
`;
export const License = styled.h2`
	font-size: 1rem;
	color: ${({ theme }) => theme.title};
	/* margin: 15% 5% 10% 10%; */
	/* white-space: nowrap; */
`;

import styled from "styled-components";
import { btnReset, v } from "../../styles/variables";
import { IoSearchOutline } from "react-icons/io5";

export const Container = styled.div`
	/* background: ${({ theme }) => theme.navbar}; */
	height: 37vw;
	width: 24vh;
	border-radius: 25px;
	margin-top: 5%;
	margin-right: 19%;
	/* margin-right: 1%; */
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
	flex-direction: column;
	gap: 1rem;
	background: ${({ theme }) => theme.navbar};
	padding: 1rem;
	border-radius: 1rem;
	padding-left: 2rem;
	/* padding: ${v.lgSpacing}; */
	/* background: ${({ theme }) => theme.navbar}; */
	/* margin-right: 20px; */
`;

export const Trend = styled.h1`
	white-space: nowrap;
	font-size: 2rem;
`;

export const Colleter = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	& .search {
		font-weight: bold;
		font-size: 1.5rem;
	}
	& .item {
		font-size: 1rem;
	}
`;

export const List = styled.ul``;

export const Item = styled.li`
	font-size: 1rem;
	margin: 15% 5% 10% 10%;
`;
export const License = styled.h2`
	font-size: 1rem;
	/* margin: 15% 5% 10% 10%; */
	/* white-space: nowrap; */
`;

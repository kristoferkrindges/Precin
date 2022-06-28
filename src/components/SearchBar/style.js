import styled from "styled-components";

export const NavSearchBar = styled.div`
	/* justify-content: center;
	align-items: center; */
	width: 100%;
	height: 80px;
	.searchInputs {
		display: flex;
		width: 90%;
		background: ${({ theme }) => theme.bgAlpha};
		border: 1px solid ${({ theme }) => theme.bg3};
		margin-top: 2%;
		margin-left: 5%;
	}
	input {
		width: 100%;
		height: 40px;
		border: none;
		font-size: 18px;
		font-weight: 600;
		padding-left: 2%;
		background: transparent;
		color: ${({ theme }) => theme.title};
		@media screen and (max-width: 1000px) {
			margin-top: 1%;
		}
		@media screen and (max-width: 768px) {
			width: 90%;
			margin-top: 2%;
		}
		:focus {
			outline: none;
		}
	}
	.searchIcon {
		background: ${({ theme }) => theme.bgAlpha};
		color: ${({ theme }) => theme.title};
		cursor: pointer;
		display: grid;
		place-items: center;
		padding-right: 1%;
		@media screen and (max-width: 600px) {
			display: none;
		}
	}
	.searchIcon svg {
		font-size: 30px;
	}
	.searchIcon :hover {
		color: rgba(111, 162, 242, 1);
	}
	.dataResult {
		width: 90%;
		height: 200px;
		margin-left: 5%;
		background: ${({ theme }) => theme.bgAlpha};
		color: ${({ theme }) => theme.title};
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		overflow: hidden;
		overflow-y: auto;
	}
	.dataResult::-webkit-scrollbar {
		display: none;
	}
	.dataResult .dataItem {
		width: 100%;
		height: 50px;
		display: flex;
		align-items: center;
		color: inherit;
	}
	.dataItem p {
		margin-left: 10px;
	}
	a {
		text-decoration: none;
		cursor: pointer;
	}
	a:hover {
		background-color: rgba(111, 162, 242, 1);
	}
	#clearBtn {
		cursor: pointer;
	}
`;

export const SearchInputs = styled.div`
	position: relative;
	height: 40px;
	width: 70vh;
	background-color: rgba(0, 0, 0, 0.2);
	margin: auto;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
	border-radius: 25px;
	transition: all 0.3s ease;
	/* margin-bottom: 10%; */
	display: flex;
	width: 90%;
	background: ${({ theme }) => theme.bgAlpha};
	/* border: 1px solid ${({ theme }) => theme.bg3}; */
	margin-top: 2.3%;
	/* margin-left: 5%; */
	& a {
		text-decoration: none;
		cursor: pointer;
	}
	& a:hover {
		background-color: rgba(111, 162, 242, 1);
	}
	& #clearBtn {
		cursor: pointer;
	}
	& svg {
		font-size: 28px;
	}
	& svg:hover {
		color: black;
	}
`;

export const InputName = styled.input`
	position: absolute;
	height: 50px;
	width: 70vh;
	border-radius: 25px;
	background: #fff;
	outline: none;
	border: none;
	padding-left: 20px;
	font-size: 18px;
	color: black;
	transition: background-color 0.5s ease-in;
	&:focus {
		background-color: rgba(0, 0, 0, 0.1);
		color: #fff;
	}
`;

export const TextInput = styled.h3`
	position: absolute;
	right: -2px;
	top: 0;
	width: 50px;
	background-color: ${({ theme }) => theme.buttons};
	height: 100%;
	border-radius: 0 25px 25px 0;
	text-align: center;
	line-height: 50px;
	color: #fff;
	font-size: 20px;
`;

export const DataResult = styled.div`
	width: 90%;
	height: 200px;
	margin-left: 5%;
	background: ${({ theme }) => theme.bgAlpha};
	color: ${({ theme }) => theme.title};
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	overflow: hidden;
	overflow-y: auto;
	border-radius: 25px;
	&::-webkit-scrollbar {
		display: none;
	}
	& .dataItem {
		width: 100%;
		height: 50px;
		display: flex;
		align-items: center;
		color: inherit;
	}
`;

export const Result = styled.p`
	margin-left: 10px;
`;

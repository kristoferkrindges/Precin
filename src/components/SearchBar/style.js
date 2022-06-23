import styled from "styled-components";

export const NavSearchBar = styled.div`
	/* display: flex; */
	justify-content: center;
	align-items: center;
	width: 100%;

	.searchInputs {
		display: flex;
		width: 90%;
		border: 1px solid black;
		background: ${({ theme }) => theme.background};
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
		background-color: white;
		color: black;
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
		background-color: white;
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
		color: black;
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

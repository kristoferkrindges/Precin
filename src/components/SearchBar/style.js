import styled from "styled-components";

export const NavSearchBar = styled.div`
	justify-content: center;
	align-items: center;
	width: 100%;

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

import styled from "styled-components";

export const Layout = styled.div`
	width: 177vh;
	margin-right: 2%;
`;

export const Controller = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100%;
	background-color: red;
	margin-left: 10%;
	/* margin-right: 2%; */
`;

export const LineOne = styled.div`
	width: 100%;
	height: 50%;
	background-color: yellow;
	/* margin-left: 9%; */
`;

export const LineTwo = styled.div`
	width: 100%;
	height: 50%;
	background-color: blue;
	/* margin-left: 9%; */
`;

export const LProfile = styled.div`
	width: 70%;
	height: 100%;
	background-color: red;
	/* margin-left: 9%; */
`;

export const Update = styled.div`
	width: 30%;
	height: 100%;
	background-color: green;
	/* margin-left: 9%; */
`;

export const Container = styled.div`
	.dashboard {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background: ${({ theme }) => theme.background};
		color: ${({ theme }) => theme.title};
		line-height: 2.5rem;
	}

	.dashboard h1 {
		padding: 1%;
	}

	.logout {
		border-radius: 20px;
		border: none;
		font-size: 18px;
		width: 10%;
		padding: 1%;
		margin: 3%;
		background: ${({ theme }) => theme.buttons};
		color: white;
		cursor: pointer;
		transition: background 0.5s;

		:hover {
			background: rgb(37, 108, 225, 0.7);
		}
	}
`;

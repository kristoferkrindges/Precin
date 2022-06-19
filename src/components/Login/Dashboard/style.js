import styled from "styled-components";

export const Container = styled.div`
	.dashboard {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background: ${({ theme }) => theme.background};
		color: ${({ theme }) => theme.title};
		line-height: 3rem;
	}

	.dashboard h1 {
		padding: 1%;
	}

	.dashboard img {
		height: 150px;
		width: 150px;
		margin-bottom: 1%;
		border-radius: 50%;
		border: 5px solid rgba(37, 108, 225, 1);
		background: ${({ theme }) => theme.buttons};
	}

	.dashboard button {
		border-radius: 20px;
		border: none;
		font-size: 18px;
		width: 10%;
		padding: 1%;
		margin: 20%;
		background: ${({ theme }) => theme.buttons};
		color: white;
		cursor: pointer;
		transition: background 0.5s;

		:hover {
			background: rgb(37, 108, 225, 0.7);
		}
	}
`;

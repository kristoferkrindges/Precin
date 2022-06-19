import styled from "styled-components";

export const Container = styled.div`
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		justify-self: center;
		flex-direction: column;
		background: ${({ theme }) => theme.background};
	}

	.form p {
		font-size: 18px;
	}
	.novo_usuario {
		cursor: pointer;
		text-align: center;
		font-weight: 700;
		padding: 2%;
		margin: 5% 25%;
		color: ${({ theme }) => theme.title};
		font-size: 22px;
		background: ${({ theme }) => theme.feed};
		border: 1px solid black;
		border-radius: 6px;
	}
`;

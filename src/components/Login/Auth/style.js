import styled from "styled-components";

export const Container = styled.div`
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		justify-self: center;
		flex-direction: column;
		background: rgba(8, 37, 84, 1);
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
		color: white;
		font-size: 22px;
		background: radial-gradient(
			ellipse at left bottom,
			rgba(22, 24, 47, 1) 0%,
			rgba(8, 37, 84, 1) 59%,
			rgba(22, 24, 47, 1) 100%
		);
		border: 1px solid black;
		border-radius: 6px;
	}
`;

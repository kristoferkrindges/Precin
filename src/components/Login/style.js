import styled from "styled-components";

export const Container = styled.div`
	.container {
	}

	.carregando {
		font-size: 36px;
		font-weight: 700;
		text-align: center;
		color: ${({ theme }) => theme.title};
		padding: 20%;
	}
	.error {
		/* width: 50%; */
		background-color: tomato;
		color: white;
		border-radius: 6px;
		padding: 6px 12px;
		font-weight: 700;
		font-size: 18px;
		max-width: 400px;
		margin-top: 2%;
		margin-left: 40%;
		text-align: center;
	}
`;

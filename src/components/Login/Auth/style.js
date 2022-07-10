import styled from "styled-components";

export const Container = styled.div`
	.container {
		display: flex;
		align-items: flex-end;
		/* justify-content: flex-end; */
		/* justify-self: center; */
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
		width: 30%;
		padding: 2%;
		margin-right: 10%;
		margin-bottom: 10%;
		color: ${({ theme }) => theme.title};
		font-size: 22px;
		background: ${({ theme }) => theme.feed};
		border: none;
		box-shadow: 0px 10px 40px #00000056;
		border-radius: 20px;

		@media only screen and (max-width: 800px) {
			margin-bottom: 15%;
		}

		@media only screen and (max-width: 600px) {
			width: 50%;
			margin-bottom: 20%;
			margin-right: 25%;
		}
	}
`;

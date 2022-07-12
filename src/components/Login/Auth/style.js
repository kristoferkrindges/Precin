import styled from "styled-components";

export const Container = styled.div`
	.container {
		display: flex;
		align-items: center;
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
		width: 22%;
		padding: 2%;
		height: auto;
		margin-bottom: 10%;
		color: ${({ theme }) => theme.title};
		font-size: 1.4rem;
		background: ${({ theme }) => theme.feed};
		border: none;
		box-shadow: 0px 10px 40px #00000056;
		border-radius: 20px;

		@media only screen and (max-width: 1600px) {
			width: 25%;
		}

		@media only screen and (max-width: 1369px) {
			width: 30%;
		}

		@media only screen and (max-width: 768px) {
			width: 35%;
			margin-top: 30%;
		}

		@media only screen and (max-width: 600px) {
			width: 40%;
		}

		@media only screen and (max-width: 480px) {
			width: 50%;
		}

		@media only screen and (max-width: 380px) {
			width: 60%;
		}
	}
`;

import styled from "styled-components";

export const Container = styled.div`
	.form {
		display: flex;
		align-items: center;
		justify-content: center;
		justify-self: center;
		flex-direction: column;
		max-width: 1200px;
		padding: 15%;
		background: ${({ theme }) => theme.feed};
		border: 1px solid black;
		box-shadow: 0 50px 70px -20px rgba(0, 0, 0, 0.8);
		border-radius: 6px;
		margin-top: 10%;
		color: ${({ theme }) => theme.title};

		.formIcons {
			font-size: 25px;
			margin-right: 1%;
		}
	}

	input {
		border-radius: 6px;
		padding: 2%;
		margin: 2% 0;
		width: 90%;
		font-size: 18px;
	}

	.form h2 {
		text-align: center;
		margin-bottom: 5%;
		font-weight: 400;
	}

	.form p {
		cursor: pointer;
		text-align: center;
		font-weight: 400;
	}

	.form button {
		border-radius: 6px;
		border: none;
		font-size: 18px;
		width: 50%;
		padding: 2%;
		margin: 5% 25%;
		background-color: #256ce1;
		color: white;
		cursor: pointer;
		transition: background 0.5s;

		:hover {
			background: rgb(37, 108, 225, 0.7);
		}
	}
`;

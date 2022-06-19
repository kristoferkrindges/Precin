import styled from "styled-components";

export const Container = styled.div`
	.form {
		display: flex;
		align-items: center;
		justify-content: center;
		justify-self: center;
		flex-direction: column;
		max-width: 600px;
		padding: 15%;
		background: ${({ theme }) => theme.feed};
		box-shadow: 0 50px 70px -20px rgba(0, 0, 0, 0.8);
		border: 1px solid black;
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

	.form h3 {
		text-align: center;
		margin-bottom: 2%;
	}

	.form p {
		cursor: pointer;
		text-align: center;
		font-weight: 700;
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

	select {
		width: 100%;
		min-width: 40ch;
		max-width: 50ch;
		border: 1px solid var(--select-border);
		border-radius: 0.25em;
		padding: 0.25em 0.5em;
		margin-top: 5%;
		font-size: 1.25rem;
		cursor: pointer;
		line-height: 1.1;
		background-color: #fff;
		background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
		text-align-last: center;
	}
`;

import styled from "styled-components";

export const Container = styled.div`
	.dashboard {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 12%;
		background-color: #396a90;
		color: white;
	}

	.dashboard h1 {
		padding: 1%;
	}

	.dashboard button {
		border-radius: 6px;
		border-color: white;
		font-size: 18px;
		width: 10%;
		padding: 1%;
		margin: 2% 0;
		background-color: #256ce1;
		color: white;
		cursor: pointer;
	}
`;

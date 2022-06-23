import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	h2 {
		color: ${({ theme }) => theme.title};
		margin-top: 1%;
	}
`;

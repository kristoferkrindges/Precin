import styled from "styled-components";

export const Container = styled.div`
	/* border-radius: 1rem;
	height: 100%;
	padding: 3rem;
	background-color: ${({ theme }) => theme.feedInter};
	width: 100%;
	box-shadow: red;
	transition: 0.4s ease-in-out; */
	background-color: ${({ theme }) => theme.feedInter};
	width: 100%;
	height: 100%;
	border-radius: 1rem;
`;

export const Context = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: 2%;
`;

export const Ul = styled.ul`
	/* margin-top: 6%; */
	& li {
		margin-top: 0%;
		margin-bottom: 0%;
	}
`;

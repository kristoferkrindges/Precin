import styled from "styled-components";

export const Layout = styled.div`
	display: flex;

	& main {
		margin-left: 32%;
	}
`;

export const Container = styled.div`
	max-width: 900px;
	margin: 0 auto;
	position: relative;
`;

export const Context = styled.div`
	border: 1px dashed ${({ theme }) => theme.title};
	padding: 2%;
	margin-top: 3%;
	/* margin-left: 2%; */
	width: 74vh;
`;

export const Pharase = styled.h2`
	color: ${({ theme }) => theme.title};
	font-size: 2rem;
	white-space: nowrap;
	text-align: center;

	& span {
		color: rgba(37, 108, 225, 1);
		white-space: nowrap;
	}
`;

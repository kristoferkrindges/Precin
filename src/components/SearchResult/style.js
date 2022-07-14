import styled from "styled-components";

export const Layout = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Controller = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	font-size: 100%;
	/* align-items: center; */
`;

export const Direction = styled.div`
	display: flex;
	justify-content: space-around;
	/* align-items: center; */
	& div {
		margin-left: 0%;
	}
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
	font-size: 2em;
	white-space: nowrap;
	text-align: center;
	/* border: 1px dashed ${({ theme }) => theme.title}; */
	padding: 2%;
	margin-top: 1%;

	& span {
		color: rgba(37, 108, 225, 1);
		white-space: nowrap;
	}
`;

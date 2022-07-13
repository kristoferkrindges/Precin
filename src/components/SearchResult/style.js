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
	font-size: 2.7rem;
	white-space: nowrap;
	text-align: center;
	/* border: 1px dashed ${({ theme }) => theme.title}; */
	padding: 2%;
	margin-top: 1%;
	width: 74vh;

	& span {
		color: rgba(37, 108, 225, 1);
		white-space: nowrap;
	}
`;

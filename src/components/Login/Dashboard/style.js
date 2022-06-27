import styled from "styled-components";

export const Layout = styled.div`
	width: 100vw;
	width: 89.3vw;
	/* margin-right: 2%; */

	footer {
		display: none;
	}

	@media only screen and (max-width: 820px) {
	}
`;

export const ControllerUp = styled.div`
	background-color: ${({ theme }) => theme.nav};
	margin-left: 10%;
	width: 90.4vw;
	height: 66.5vh;

	display: grid;
	grid-template-areas: "l r" "f f";
	grid-template-columns: 4fr 1.5fr;
	grid-template-rows: 4fr 1fr;

	@media only screen and (max-width: 768px) {
		grid-template-areas: "r" "l";
		grid-template-columns: 1fr;
		margin-left: 0%;
		width: 110.3%;
	}

	@media only screen and (max-width: 480px) {
	}
`;

export const LineLeft = styled.div`
	background-color: ${({ theme }) => theme.nav};
	margin-top: 2%;
	grid-area: l;
	padding: 1%;
`;

export const LineRight = styled.div`
	background-color: ${({ theme }) => theme.nav};
	grid-area: r;
	padding: 1%;
	margin-top: 3%;
`;

export const LinerLeft = styled.div`
	background-color: ${({ theme }) => theme.nav};
	grid-area: f;
	padding: 1%;
	/* margin-bottom: 5%; */

	@media only screen and (max-width: 768px) {
		display: none;
	}
`;

// export const LinerRight = styled.div`
// 	background-color: purple;
// 	grid-area: q;
// `;

export const ControllerDown = styled.div`
	/* height: 55.5vh; */
	background-color: ${({ theme }) => theme.nav};
	margin-left: 10%;
	width: 90.4vw;
	height: 44.1vh;

	display: grid;
	grid-template-areas: "l r";
	grid-template-columns: 2fr 3fr;
	grid-template-rows: 5fr 0.5fr;

	@media only screen and (max-width: 768px) {
		grid-template-areas: "r" "l" "f";
		grid-template-columns: 1fr;
		margin-left: 0%;
		width: 110.3%;
	}
`;

export const LineLeftDown = styled.div`
	background-color: ${({ theme }) => theme.nav};
	grid-area: l;
	padding: 1%;
`;

export const LineRightDown = styled.div`
	background-color: ${({ theme }) => theme.nav};
	grid-area: r;
	padding: 1%;
`;

export const LinerDown = styled.div`
	background-color: blue;
`;

// export const Container = styled.div`
// 	.dashboard {
// 		display: flex;
// 		align-items: center;
// 		justify-content: center;
// 		flex-direction: column;
// 		background: ${({ theme }) => theme.background};
// 		color: ${({ theme }) => theme.title};
// 		line-height: 2.5rem;
// 	}

// 	.dashboard h1 {
// 		padding: 1%;
// 	}

// 	.logout {
// 		border-radius: 20px;
// 		border: none;
// 		font-size: 18px;
// 		width: 10%;
// 		padding: 1%;
// 		margin: 3%;
// 		background: ${({ theme }) => theme.buttons};
// 		color: white;
// 		cursor: pointer;
// 		transition: background 0.5s;

// 		:hover {
// 			background: rgb(37, 108, 225, 0.7);
// 		}
// 	}
// `;

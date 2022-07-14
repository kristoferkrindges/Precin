import styled from "styled-components";
import { IoLogoFacebook, IoCartOutline } from "react-icons/io5";

export const IoCart = styled(IoCartOutline)`
	width: 30px;
	height: 30px;
	stroke: white;
	/* margin-right: 200%; */
	/* margin-top: 11%; */

	/* @media (max-width: 1107px) {
		height: 25px;
		width: 25px;
	} */
`;

export const Feeder = styled.div`
	background: ${({ theme }) => theme.feed};
	border-radius: 20px;
	position: relative;
	width: 32vw;
	/* cursor: pointer; */
	transition: opacity 0.5s ease-out;
	border: 1px solid black;
	box-shadow: 0px 10px 40px #00000056;
	margin-top: 1%;
	margin-bottom: 5%;
	/* height: 55vh; */
	/* background-color: red; */

	&::before {
		content: "";
		position: absolute;
		height: 50%;
		width: 100%;
		background: ${({ theme }) => theme.buttons};
		border-radius: 20px 20px 0 0;
	}
	@media (max-width: 1600px) {
		width: 35vw;
	}

	@media (max-width: 1500px) {
		width: 40vw;
	}

	@media (max-width: 1400px) {
		width: 45vw;
	}

	@media (max-width: 1300px) {
		width: 50vw;
	}

	@media (max-width: 1200px) {
		width: 55vw;
	}

	@media (max-width: 1000px) {
		width: 60vw;
	}

	@media (max-width: 900px) {
		width: 65vw;
	}

	@media (max-width: 800px) {
		width: 75vw;
	}

	@media (max-width: 700px) {
		width: 70vw;
	}

	@media (max-width: 600px) {
		width: 65vw;
	}

	@media (max-width: 550px) {
		width: 60vw;
	}

	@media (max-width: 500px) {
		width: 55vw;
	}

	/* @media (max-height: 878px) {
		width: 32vw;
		height: 54vh;
	} */
`;

export const Profile = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	padding: 11px 20px 11px 20px;
	width: 100%;
	color: white;
	/* background-color: green; */
`;

export const User = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	width: 30vw;
	cursor: pointer;
	/* background-color: green; */

	@media (max-width: 1500px) {
		width: 35vw;
	}

	@media (max-width: 1400px) {
		width: 40vw;
	}

	@media (max-width: 1300px) {
		width: 45vw;
	}

	@media (max-width: 1200px) {
		width: 50vw;
	}

	@media (max-width: 1100px) {
		width: 55vw;
	}

	@media (max-width: 800px) {
		width: 60vw;
	}

	@media (max-width: 700px) {
		width: 65vw;
	}
`;

export const Logo = styled.div`
	height: 50px;
	width: 50px;
	border-radius: 50%;
	padding: 3px;
	background: ${({ theme }) => theme.buttons};

	&:hover {
		opacity: 0.5;
	}

	img {
		height: 100%;
		width: 100%;
		border-radius: 50%;
		border: 3px solid #fff;
	}

	/* @media (max-width: 1107px) {
		height: 40px;
		width: 40px;
	} */
`;

export const Name = styled.h3`
	white-space: nowrap;
	margin-left: 1%;
	font-size: 1em;
	color: white;

	@media (max-width: 500px) {
		font-size: 0.8em;
	}

	@media (max-width: 440px) {
		font-size: 0.7em;
	}

	@media (max-width: 420px) {
		font-size: 0.6em;
	}
	/* background-color: red; */

	/* @media (max-width: 1107px) {
		font-size: 0.8rem;
	} */
`;

export const Icon = styled.div`
	cursor: pointer;
	/* background-color: purple; */

	svg:hover {
		opacity: 0.5;
	}
`;

// Product
export const Product = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	position: relative;
	font-size: 100%;
	/* background-color: yellow; */
`;

export const Photo = styled.div`
	height: 250px;
	width: 250px;
	border-radius: 25px;
	padding: 3px;
	background: ${({ theme }) => theme.buttons};
	cursor: pointer;

	@media (max-width: 700px) {
		height: 200px;
		width: 200px;
	}

	@media (max-width: 600px) {
		height: 150px;
		width: 150px;
	}

	@media (max-width: 550px) {
		height: 100px;
		width: 100px;
	}

	/* @media (max-width: 1110px) {
		height: 220px;
		width: 220px;
	}

	@media (max-height: 877px) {
		height: 220px;
		width: 220px;
	}

	@media (max-width: 768px) {
		height: 150px;
		width: 150px;
	} */

	&:hover {
		opacity: 0.5;
	}

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-radius: 25px;
		border: 3px solid #fff;

		&:hover {
			opacity: 0.5;
		}
	}
`;

export const NameProduct = styled.h2`
	margin-top: 2%;
	font-size: 1.5em;
	white-space: nowrap;
	font-weight: 900;
	color: ${({ theme }) => theme.title};
	/* background-color: orange; */

	@media (max-width: 700px) {
		font-size: 1em;
	}

	@media (max-width: 600px) {
		font-size: 0.9em;
	}

	/* @media (max-height: 878px) {
		font-size: 1.2rem;
	} */
`;

export const Register = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	font-size: 100%;
	/* background-color: grey; */

	img {
		width: 4.5em;
		height: 4.5em;

		@media (max-width: 700px) {
			width: 4em;
			height: 4em;
		}

		@media (max-width: 700px) {
			width: 3em;
			height: 3em;
		}
		/* background-color: blue; */

		/* @media (max-height: 878px) {
			width: 4rem;
			height: 4rem;
		} */
	}
`;

export const Price = styled.h2`
	font-size: 3em;
	white-space: nowrap;
	font-weight: 900;
	color: ${({ theme }) => theme.title};
	/* background-color: pink; */

	@media (max-width: 700px) {
		font-size: 2.5em;
	}

	@media (max-width: 600px) {
		font-size: 2em;
	}
	/* 
	@media (max-height: 878px) {
		font-size: 2.5rem;
	} */
`;

export const Buttons = styled.div`
	/* width: 100%; */
	/* background-color: lightblue; */
	display: flex;
	/* justify-content: space-around; */
`;
export const HireMe = styled.button`
	background: ${({ theme }) => theme.buttons};
	outline: none;
	border: none;
	color: #fff;
	padding: 10px 20px;
	border-radius: 20px;
	font-size: 1.5em;
	font-weight: 500;
	transition: all 0.3s ease;
	cursor: pointer;

	@media (max-width: 600px) {
		font-size: 1.3em;
	}

	@media (max-width: 500px) {
		font-size: 1em;
	}

	&:hover {
		background: #333;
	}
	/* @media (max-height: 878px) {
		font-size: 1.3rem;
	} */
`;

// Buttons Interaction
export const Interaction = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 3%;
	max-width: 100%;
	width: 100%;
	font-size: 100%;
	/* background-color: black; */
	/* height: 3vh;
	width: 60vh; */

	@media (max-width: 600px) {
		width: 95%;
	}

	/* 
	@media (max-width: 1680px) {
		width: 32vw;
	} */
`;
export const ButtonPrecin = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 12px 20px;
	border: 0;
	outline: none;
	border-radius: 10px;
	cursor: pointer;
	color: #fff;
	font-weight: bold;
	font-size: 1em;
	transition: background 0.2s;
	background: rgba(37, 108, 225, 1);
	margin-right: 10px;
	margin-left: 10px;

	@media (max-width: 700px) {
		font-size: 0.7em;
	}

	@media (max-width: 700px) {
		font-size: 0.7em;
	}

	@media (max-width: 600px) {
		padding: 10px 10px;
	}

	@media (max-width: 555px) {
		white-space: nowrap;
	}

	@media (max-width: 550px) {
		padding: 5px 5px;
	}

	@media (max-width: 500px) {
		font-size: 0.6em;
		margin-left: 5px;
		margin-right: 5px;
	}

	/* @media (max-width: 670px) {
		font-size: 0.5em;
	} */

	& svg {
		margin-right: 5px;
		stroke: white;
	}

	&:hover {
		opacity: 0.4;
	}

	/* @media (max-height: 878px) {
		font-size: 0.9rem;
	}

	@media (max-width: 1520px) {
		font-size: 0.7rem;
		padding: 7px 17px;
	} */
`;

export const ButtonPrecao = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 12px 20px;
	border: 0;
	outline: none;
	border-radius: 10px;
	cursor: pointer;
	color: #fff;
	font-weight: bold;
	font-size: 1em;
	transition: background 0.2s;
	background: rgba(225, 37, 37);
	margin-right: 10px;
	margin-left: 10px;

	@media (max-width: 700px) {
		font-size: 0.7em;
	}

	@media (max-width: 600px) {
		padding: 10px 10px;
	}

	@media (max-width: 555px) {
		white-space: nowrap;
	}

	@media (max-width: 550px) {
		padding: 5px 5px;
	}

	@media (max-width: 500px) {
		font-size: 0.6em;
		margin-left: 5px;
		margin-right: 5px;
	}

	/* @media (max-width: 670px) {
		font-size: 0.5em;
	} */

	& svg {
		margin-right: 5px;
		stroke: white;
	}

	&:hover {
		opacity: 0.4;
	}

	/* @media (max-height: 878px) {
		font-size: 0.9rem;
	}

	@media (max-width: 1520px) {
		font-size: 0.7rem;
		padding: 7px 17px;
	} */
`;

export const ButtonComment = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 12px 20px;
	border: 0;
	outline: none;
	border-radius: 10px;
	cursor: pointer;
	color: #fff;
	font-weight: bold;
	font-size: 1em;
	transition: background 0.2s;
	background: rgb(245, 180, 0);
	margin-right: 10px;
	margin-left: 10px;
	/* background: rgba(38, 20, 72, 0.9); */
	/* margin-right: 10px; */

	@media (max-width: 700px) {
		font-size: 0.7em;
	}

	@media (max-width: 600px) {
		padding: 10px 10px;
	}

	@media (max-width: 555px) {
		white-space: nowrap;
	}

	@media (max-width: 550px) {
		padding: 5px 5px;
	}

	@media (max-width: 500px) {
		font-size: 0.6em;
		margin-left: 5px;
		margin-right: 5px;
	}

	/* @media (max-width: 670px) {
		font-size: 0.5em;
	} */

	& svg {
		margin-right: 5px;
		stroke: white;
	}

	&:hover {
		opacity: 0.4;
	}

	/* @media (max-height: 878px) {
		font-size: 0.9rem;
	}

	@media (max-width: 1520px) {
		font-size: 0.7rem;
		padding: 7px 17px;
	} */
`;

// export const IoCart = styled(IoCartOutline)`
// 	stroke: #256ce1;
// 	width: 25px;
// 	height: 25px;
// `;

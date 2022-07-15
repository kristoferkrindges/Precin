import styled from "styled-components";
import { IoCloseCircleOutline, IoCartOutline } from "react-icons/io5";

export const IoCart = styled(IoCartOutline)`
	width: 30px;
	height: 30px;
	stroke: ${({ theme }) => theme.title};
	/* margin-right: 200%; */
	margin-top: 11%;

	@media (max-width: 1107px) {
		height: 25px;
		width: 25px;
	}
`;

export const Feeder = styled.div`
	background: ${({ theme }) => theme.feed};
	border-radius: 20px;
	position: relative;
	width: 32vw;
	transition: opacity 0.5s ease-out;
	border: 1px solid black;
	box-shadow: 0px 10px 40px #00000056;
	margin-top: 1%;
	margin-bottom: 5%;

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

	@media (max-width: 1024px) {
		width: 45vw;
	}

	@media (max-width: 768px) {
		width: 55vw;
	}

	/* @media (max-width: 1500px) {
		width: 40vw;
	} */

	/* @media (max-width: 1400px) {
		width: 45vw;
	} */

	/* @media (max-width: 1300px) {
		width: 50vw;
	} */

	/* @media (max-width: 1200px) {
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
	} */

	/* @media (max-width: 700px) {
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
`;

export const User = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	width: 30vw;
	cursor: pointer;

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
`;

export const Icon = styled.div`
	cursor: pointer;

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
`;

export const Photo = styled.div`
	height: 200px;
	width: 200px;
	border-radius: 25px;
	padding: 3px;
	background: ${({ theme }) => theme.buttons};
	cursor: pointer;

	@media (max-width: 700px) {
		height: 150px;
		width: 150px;
	}

	@media (max-width: 480px) {
		height: 130px;
		width: 130px;
	}

	/* @media (max-width: 550px) {
		height: 50px;
		width: 50px;
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

	&:hover {
		background: #333;
	}
	@media (max-width: 700px) {
		font-size: 1em;
	}
`;

export const Icons = styled.div`
	position: absolute;
	top: -35px;
	right: -30px;
	display: flex;
	flex-direction: column;
	align-items: center;

	svg {
		color: ${({ theme }) => theme.title};
		opacity: 0.8;
		margin-top: 10px;
		transition: all 0.3s ease;
		cursor: pointer;
	}

	svg:hover {
		opacity: 1;
		transform: rotate(-180deg);
	}
`;
export const IoCloseCircle = styled(IoCloseCircleOutline)`
	width: 30px;
	height: 30px;
`;

import styled from "styled-components";
import { IoLogoFacebook, IoCartOutline } from "react-icons/io5";

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
	height: 53vh;
	cursor: pointer;
	transition: opacity 0.5s ease-out;
	border: 1px solid black;
	margin-top: 1%;
	margin-bottom: 4%;

	&::before {
		content: "";
		position: absolute;
		height: 50%;
		width: 100%;
		background: ${({ theme }) => theme.buttons};
		border-radius: 20px 20px 0 0;
	}
	@media (max-width: 768px) {
		height: 35vh;
		width: 22vh;
	}

	@media (max-height: 878px) {
		width: 32vw;
		height: 54vh;
	}
`;

export const Profile = styled.div`
	display: flex;
	justify-content: space-between;
	position: relative;
	padding: 11px 20px 11px 20px;
	width: 100%;
`;

export const User = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	width: 30vw;
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

	@media (max-width: 1107px) {
		height: 40px;
		width: 40px;
	}
`;

export const Name = styled.h3`
	white-space: nowrap;
	margin-left: 1%;
	font-size: 1rem;
	color: ${({ theme }) => theme.title};

	@media (max-width: 1107px) {
		font-size: 0.8rem;
	}
`;

export const Icon = styled.div``;
// Product
export const Product = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	position: relative;
`;

export const Photo = styled.div`
	height: 250px;
	width: 250px;
	border-radius: 25px;
	padding: 3px;
	background: ${({ theme }) => theme.buttons};

	@media (max-width: 1110px) {
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
	}

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
	font-size: 1.8rem;
	white-space: nowrap;
	font-weight: 900;
	color: ${({ theme }) => theme.title};

	@media (max-height: 878px) {
		font-size: 1.2rem;
	}
`;

export const Register = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin-top: 1%;
	width: 100%;

	img {
		width: 4.5rem;
		height: 4.5rem;

		@media (max-height: 878px) {
			width: 4rem;
			height: 4rem;
		}
	}
`;

export const Price = styled.h2`
	font-size: 3rem;
	white-space: nowrap;
	font-weight: 900;
	color: ${({ theme }) => theme.title};

	@media (max-height: 878px) {
		font-size: 2.5rem;
	}
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
	font-size: 1.5rem;
	font-weight: 500;
	transition: all 0.3s ease;
	cursor: pointer;

	&:hover {
		background: #333;
	}
	@media (max-height: 878px) {
		font-size: 1.3rem;
	}
`;

// Buttons Interaction
export const Interaction = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	/* height: 3vh;
	width: 60vh; */
	margin-top: 5%;
	background-color: none;
	width: 100%;

	@media (max-width: 1680px) {
		width: 32vw;
	}
`;
export const ButtonPrecin = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 8px 20px;
	margin-right: 10px;
	margin-left: 10px;

	border: 0;
	outline: none;
	border-radius: 10px;
	cursor: pointer;

	color: #fff;
	font-weight: bold;
	font-size: 1rem;
	transition: background 0.2s;

	background: rgba(37, 108, 225, 1);

	& svg {
		margin-right: 5px;
		stroke: white;
	}

	&:hover {
		opacity: 0.4;
	}

	@media (max-height: 878px) {
		font-size: 0.9rem;
	}

	@media (max-width: 1520px) {
		font-size: 0.7rem;
		padding: 7px 17px;
	}
`;

export const ButtonPrecao = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	padding: 8px 20px;
	margin-right: 10px;

	border: 0;
	outline: none;
	border-radius: 10px;
	cursor: pointer;

	color: #fff;
	font-weight: bold;
	font-size: 1rem;
	transition: background 0.2s;

	background: rgba(225, 37, 37);

	& svg {
		margin-right: 5px;
		stroke: white;
	}

	&:hover {
		opacity: 0.4;
	}

	@media (max-height: 878px) {
		font-size: 0.9rem;
	}

	@media (max-width: 1520px) {
		font-size: 0.7rem;
		padding: 7px 17px;
	}
`;

export const ButtonComment = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	padding: 8px 20px;
	/* margin-right: 10px; */

	border: 0;
	outline: none;
	border-radius: 10px;
	cursor: pointer;

	color: #fff;
	font-weight: bold;
	font-size: 1rem;
	transition: background 0.2s;
	/* background: rgba(38, 20, 72, 0.9); */

	background: rgb(245, 180, 0);

	& svg {
		margin-right: 5px;
		stroke: white;
	}

	&:hover {
		opacity: 0.4;
	}

	@media (max-height: 878px) {
		font-size: 0.9rem;
	}

	@media (max-width: 1520px) {
		font-size: 0.7rem;
		padding: 7px 17px;
	}
`;

// export const IoCart = styled(IoCartOutline)`
// 	stroke: #256ce1;
// 	width: 25px;
// 	height: 25px;
// `;

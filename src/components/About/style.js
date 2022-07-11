import styled from "styled-components";
import { IoLogoFacebook, IoCartOutline } from "react-icons/io5";

export const IoCart = styled(IoCartOutline)`
	width: 40px;
	height: 40px;
	margin-left: 60%;
`;

export const Layout = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Controller = styled.div`
	display: flex;
	justify-content: center;
	/* align-items: center; */
`;

export const Direction = styled.div`
	display: flex;
	justify-content: space-around;
	/* align-items: center; */
`;
export const Feeds = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 13%;
	margin-top: 1%;
`;

export const Feeder = styled.div`
	display: flex;
	flex-direction: column;
	background: ${({ theme }) => theme.feed};
	width: 32vw;
	height: 47vh;
	padding: 30px;
	margin-top: 1%;
	border-radius: 15px;
	margin-bottom: 2%;
	/* margin-left: 13%; */
	border: 1px solid black;
`;

export const Profile = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const User = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	/* background: red; */
	width: 30vw;
`;

export const Logo = styled.div`
	height: 70px;
	width: 70px;
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
	font-size: 20px;
`;

export const Icon = styled.div``;
// Product
export const Product = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;

export const Photo = styled.div`
	/* display: flex;
	align-items: center;
	justify-content: center; */
	border-radius: 5px;
	height: 200px;
	width: 200px;
	/* height: 100%;
	width: 100%;
	background-position: center;
	background-size: cover; */
	/* object-fit: fill; */

	/* padding: 3px; */
	/* background: ${({ theme }) => theme.buttons}; */
	border: 3px solid ${({ theme }) => theme.buttons};
	margin-top: 1%;

	&:hover {
		opacity: 0.5;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		/* border-radius: 5px; */
		/* border: 1px solid #fff; */
	}
`;

export const NameProduct = styled.h2`
	margin-top: 2%;
	font-size: 1.8rem;
	white-space: nowrap;
	font-weight: 900;
	color: ${({ theme }) => theme.title};
`;

export const Register = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 1%;
	width: 100%;

	img {
		width: 4.5rem;
		height: 4.5rem;
	}
`;

export const Price = styled.h2`
	font-size: 2.2rem;
	white-space: nowrap;
	font-weight: 900;
	color: ${({ theme }) => theme.title};
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
	font-size: 16px;
	transition: background 0.2s;

	background: rgba(37, 108, 225, 1);

	& svg {
		margin-right: 5px;
		stroke: white;
	}

	&:hover {
		opacity: 0.4;
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
	font-size: 16px;
	transition: background 0.2s;

	background: rgba(225, 37, 37);

	& svg {
		margin-right: 5px;
		stroke: white;
	}

	&:hover {
		opacity: 0.4;
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
	font-size: 16px;
	transition: background 0.2s;

	background: rgb(245, 180, 0);

	& svg {
		margin-right: 5px;
		stroke: white;
	}

	&:hover {
		opacity: 0.4;
	}
`;

// export const IoCart = styled(IoCartOutline)`
// 	stroke: #256ce1;
// 	width: 25px;
// 	height: 25px;
// `;

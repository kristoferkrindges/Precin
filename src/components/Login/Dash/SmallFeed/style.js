import styled from "styled-components";
import { IoCartOutline } from "react-icons/io5";

export const Container = styled.div`
	/* margin-top: 3%; */
	/* margin-bottom: 50px; */
	width: 100%;
	height: 30vh;
	width: 70vh;
	border-radius: 10px;
	padding: 3%;
	box-shadow: 0 50px 70px -40px rgba(0, 0, 0, 0.8);
	border: 1px solid black;
	background: ${({ theme }) => theme.feed};
`;
export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	height: 32vh;
	width: 68vh;
`;

// ===============================
// User
export const User = styled.div`
	background-color: none;
	height: 34vh;
	width: 15vh;
	cursor: pointer;
	transition: opacity 0.5s ease-out;

	&::before {
		content: "";
		height: 25%;
		width: 100%;
		background: ${({ theme }) => theme.buttons};
		border-radius: 20px 20px 0 0;
	}
`;
export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px;
	z-index: 100;
`;
export const Image = styled.div`
	height: 70px;
	width: 70px;
	border-radius: 50%;
	padding: 3px;
	background: ${({ theme }) => theme.buttons};

	&:hover {
		opacity: 0.5;
	}
`;
export const Logo = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 50%;
	border: 3px solid #fff;
`;

export const Avatar = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10px;
	color: ${({ theme }) => theme.title};
`;

export const Name = styled.span`
	font-size: 0.8rem;
	white-space: nowrap;
	font-weight: 600;
`;
export const Time = styled.span`
	font-size: 0.7rem;
	font-weight: 500;
`;

export const Buttons = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
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

export const Product = styled.div`
	position: relative;
	height: 30vh;
	width: 55vh;
	cursor: pointer;
	transition: opacity 0.5s ease-out;
`;
export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 5px;
	max-width: 45vh;
`;
export const ImgProduct = styled.div`
	margin-top: 2%;
	height: 150px;
	width: 350px;

	&:hover {
		opacity: 0.5;
	}
`;
export const Img = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;
export const Collection = styled.div`
	display: flex;
	align-items: center;
	height: 10vh;
	width: 38vh;
	border-radius: 0.8rem;
	padding: 5% 5%;
	margin-left: 12%;
	margin-top: 2%;
`;
export const Icon = styled.img`
	width: 4.5rem;
	height: 4.5rem;
	margin-top: 50%;
`;
export const Locate = styled.div`
	position: absolute;
	width: 5vh;
	top: 10px;
	right: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;

	& svg {
		/* stroke: ${({ theme }) => theme.text}; */
	}

	& svg:hover {
		opacity: 0.5;
	}
`;

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${({ theme }) => theme.title};
`;

export const NameInfo = styled.span`
	font-size: 1.2rem;
	white-space: nowrap;
	font-weight: 600;
`;
export const Price = styled.span`
	white-space: nowrap;
	font-size: 2.5rem;
	font-weight: 700;
`;

export const IoCart = styled(IoCartOutline)`
	stroke: #256ce1;
	width: 25px;
	height: 25px;
`;

import styled from "styled-components";
import {
	IoLogoFacebook,
	IoLogoTwitter,
	IoLogoWhatsapp,
	IoCameraOutline,
	IoPencilOutline,
	IoCloseOutline,
	IoPersonOutline,
	IoLockClosedOutline,
	IoMailOutline,
} from "react-icons/io5";

export const IoPerson = styled(IoPersonOutline)`
	width: 20px;
	height: 20px;
	stroke: white;
	cursor: pointer;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoLock = styled(IoLockClosedOutline)`
	width: 20px;
	height: 20px;
	stroke: white;
	cursor: pointer;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoMail = styled(IoMailOutline)`
	width: 20px;
	height: 20px;
	stroke: white;
	cursor: pointer;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoPerson2 = styled(IoPersonOutline)`
	width: 40px;
	height: 40px;
	stroke: white;
	cursor: pointer;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoLock2 = styled(IoLockClosedOutline)`
	width: 40px;
	height: 40px;
	stroke: white;
	cursor: pointer;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoMail2 = styled(IoMailOutline)`
	width: 40px;
	height: 40px;
	stroke: white;
	cursor: pointer;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoClose = styled(IoCloseOutline)`
	width: 20px;
	height: 20px;
	stroke: black;
	cursor: pointer;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoPencil = styled(IoPencilOutline)`
	width: 15px;
	height: 15px;
	stroke: black;
	cursor: pointer;
	margin-left: 40%;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoCamera = styled(IoCameraOutline)`
	width: 40px;
	height: 40px;
	stroke: white;

	&:hover {
		opacity: 0.5;
	}
`;

export const Container = styled.div`
	height: 100vh;
`;

export const Context = styled.div`
	/* display: flex;
	justify-content: center;
	align-items: center; */
	/* background: red; */
	/* width: 100%; */
	/* height: 91.8vh; */
`;

export const Layout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 80vh;
	margin-top: 1%;
	border-radius: 25px;
`;

export const Top = styled.div`
	background: ${({ theme }) => theme.buttons};
	border-radius: 20px;
	margin: 0px 0;
	height: 36vh;
	width: 100vh;
	cursor: pointer;
	transition: opacity 0.5s ease-out;

	&:hover {
		/* width: 38vh;
        height: 44vh; */
		/* opacity: 0.5; */
	}
`;

export const Image = styled.div`
	height: 220px;
	width: 220px;
	border-radius: 50%;
	padding: 3px;
	background: ${({ theme }) => theme.buttons};
`;
export const Logo = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 50%;
	border: 3px solid #fff;

	&:hover {
		/* width: 38vh;
        height: 44vh; */
		opacity: 0.5;
	}
`;
export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px;
	position: relative;
	/* z-index: 100; */
`;

export const InputImage = styled.input`
	display: none;
`;

export const LabelImage = styled.label`
	color: ${({ theme }) => theme.title};
	cursor: pointer;
	margin: 0;
	display: flex;
	justify-content: center;
	align-items: center;

	&svg {
		margin-left: 5%;
	}
`;

export const Social = styled.div`
	position: absolute;
	top: 15px;
	right: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;

	svg {
		/* color: #fff; */
		opacity: 0.8;
		margin-top: 10px;
		transition: all 0.3s ease;
		cursor: pointer;
	}
`;
export const NameSubject = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	/* margin-top: 10px; */
	color: white;
`;
export const Name = styled.span`
	font-size: 2rem;
	font-weight: 600;
	color: white;
`;
export const Subject = styled.span`
	font-size: 1.5rem;
	font-weight: 500;
	color: ${({ theme }) => theme.title};
`;

export const Buttons = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	margin-top: 15px;
`;

export const HireMe = styled.button`
	background: ${({ theme }) => theme.title};
	outline: none;
	border: 1px solid ${({ theme }) => theme.buttons};
	color: ${({ theme }) => theme.buttons};
	padding: 8px 22px;
	border-radius: 20px;
	font-size: 1.5rem;
	font-weight: 500;
	transition: all 0.3s ease;
	cursor: pointer;

	&:hover {
		background: #333;
		opacity: 0.5;
	}
`;

// Second Container

export const Bottom = styled.div`
	height: 50vh;
	width: 100vh;
	background-color: ${({ theme }) => theme.navbar};
	padding: 25px 30px;
	border-radius: 25px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
	/* bottom: -100%;
	transition: 850ms; */
`;

export const Title = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 25px;
	font-weight: 500;
	position: relative;
	color: ${({ theme }) => theme.title};
	height: 5vh;

	&::before {
		content: "";
		position: absolute;
		left: 50;
		bottom: 0;
		height: 3px;
		width: 150px;
		border-radius: 5px;
		background: linear-gradient(135deg, #71b7e6, #9b59b6);
	}
`;

export const Collection = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const UserDetails = styled.div`
	display: flex;
	/* flex-wrap: wrap; */
	align-items: center;
	justify-content: space-around;
	/* margin: 20px 0 12px 0; */
	width: 60vw;
	/* margin-top: 5%; */

	/* span {
		display: block;
		font-weight: 500;
		margin-bottom: 5px;
	} */

	/* input {
		margin-bottom: 15px;
		width: calc(100% / 2 - 20px);
	} */
`;

export const Left = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 30vw;
`;
export const Right = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 30vw;
`;

export const Controller = styled.div`
	display: flex;
	/* align-items: center; */
	flex-direction: column;
	/* justify-content: center; */
	width: 20vw;
	margin-top: 5%;

	span {
		display: flex;
		justify-content: start;
		margin-left: 5%;
		margin-bottom: 2%;
		font-size: 1.2rem;
		color: ${({ theme }) => theme.title};
	}
`;

export const ContainerInput = styled.div`
	position: relative;
	height: 45px;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.2);
	margin: auto;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
	border-radius: 25px;
	transition: all 0.3s ease;
	margin-bottom: 5%;
`;
export const InputName = styled.input`
	position: absolute;
	height: 45px;
	/* width: 300px; */
	width: 100%;
	border-radius: 25px;
	background: #fff;
	outline: none;
	padding-left: 20px;
	font-size: 16px;
	color: black;
	transition: background-color 0.5s ease-in;

	padding-left: 15px;
	border: 1px solid #ccc;
	border-bottom-width: 2px;
	transition: all 0.3s ease;

	&:focus {
		background-color: rgba(0, 0, 0, 0.1);
		color: #fff;
	}
`;

export const TextInput = styled.h3`
	position: absolute;
	right: -2px;
	top: 0;
	width: 50px;
	background-color: #4070f4;
	height: 100%;
	border-radius: 0 25px 25px 0;
	text-align: center;
	line-height: 50px;
	color: #fff;
	font-size: 20px;
`;

export const InputBox = styled.div`
	/* & input {
		height: 45px;
		width: 400px;
		outline: none;
		font-size: 16px;
		border-radius: 5px;
		padding-left: 15px;
		border: 1px solid #ccc;
		border-bottom-width: 2px;
		transition: all 0.3s ease;
	} */

	h3 {
		height: 45px;
		width: 400px;
		outline: none;
		font-size: 1.5rem;
		border-radius: 5px;
		padding-left: 15px;
		transition: all 0.3s ease;
		/* color: #94449e; */
	}
	span {
		color: ${({ theme }) => theme.title};
	}

	input:focus {
		border-color: ${({ theme }) => theme.buttons};
	}

	input:valid {
		border-color: ${({ theme }) => theme.buttons};
	}
`;

export const FacebookIcon = styled(IoLogoFacebook)`
	width: 30px;
	height: 30px;
`;
export const TwitterIcon = styled(IoLogoTwitter)`
	width: 30px;
	height: 30px;
`;
export const WhatsappIcon = styled(IoLogoWhatsapp)`
	width: 30px;
	height: 30px;
`;

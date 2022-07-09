import styled from "styled-components";
import {
	IoStar,
	IoLogoFacebook,
	IoLogoTwitter,
	IoLogoWhatsapp,
	IoCloseCircleOutline,
} from "react-icons/io5";

export const Container = styled.div`
	background: ${({ theme }) => theme.feed};
	border-radius: 20px;
	position: relative;
	margin: 20px 30px;
	height: 42vh;
	width: 36vh;
	cursor: pointer;
	transition: opacity 0.5s ease-out;
	border: 1px solid black;
	/* border: 1px solid black; */

	&::before {
		content: "";
		position: absolute;
		height: 43%;
		width: 100%;
		background: ${({ theme }) => theme.buttons};
		border-radius: 20px 20px 0 0;
	}

	&:hover {
		/* width: 38vh;
        height: 44vh; */
		/* opacity: 0.5; */
	}
`;
export const Image = styled.div`
	height: 200px;
	width: 200px;
	border-radius: 25px;
	padding: 3px;
	background: ${({ theme }) => theme.buttons};
`;
export const Logo = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 25px;
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
	z-index: 100;
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
export const NameSubject = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10px;
	color: ${({ theme }) => theme.title};
`;
export const Name = styled.span`
	font-size: 2rem;
	font-weight: 600;
`;
export const Subject = styled.span`
	font-size: 1.5rem;
	font-weight: 500;
`;
export const SubjectUl = styled.ul``;
export const Li = styled.li``;

export const Rating = styled.div`
	display: flex;
	align-items: center;
	margin-top: 18px;

	svg {
		font-size: 18px;
		margin: 0 2px;
	}
`;
export const Buttons = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	margin-top: 20px;
`;
export const HireMe = styled.button`
	background: ${({ theme }) => theme.buttons};
	outline: none;
	border: none;
	color: #fff;
	padding: 8px 22px;
	border-radius: 20px;
	font-size: 1rem;
	font-weight: 500;
	transition: all 0.3s ease;
	cursor: pointer;

	&:hover {
		background: #333;
	}
`;

export const StarIcon1 = styled(IoStar)`
	stroke: "ffffff";
	width: 30px;
	height: 30px;
	color: #94449e;

	&:hover {
		color: #94449e;
		opacity: 0.2;
	}
`;

export const StarIcon2 = styled(IoStar)`
	stroke: "#94449e";
	width: 30px;
	height: 30px;
	color: gray;
	opacity: 0.7;

	&:hover {
		color: #94449e;
		opacity: 0.9;
	}
`;
export const FacebookIcon = styled(IoLogoFacebook)`
	width: 20px;
	height: 20px;
`;
export const TwitterIcon = styled(IoLogoTwitter)`
	width: 20px;
	height: 20px;
`;
export const WhatsappIcon = styled(IoLogoWhatsapp)`
	width: 20px;
	height: 20px;
`;

export const IoCloseCircle = styled(IoCloseCircleOutline)`
	width: 30px;
	height: 30px;
`;

import styled from "styled-components";
import {
	IoHeartOutline,
	IoChatbubbleOutline,
	IoShareSocialOutline,
} from "react-icons/io5";

export const Li = styled.li`
	/* margin-bottom: 50px; */
	width: 81%;
	background: ${({ theme }) => theme.feed};
	border-radius: 10px;
	border-bottom: 1px solid black;
	border-left: 1px solid black;
	border-right: 1px solid black;
	padding: 25px;
	box-shadow: 1px 0 3px rgba(0, 0, 0, 0.5);
	.infoUserPost {
		display: flex;
		align-items: center;
	}

	.infoUserPost .imgUserPost {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background: #333;
	}

	.infoUserPost .nameAndHour {
		margin-left: 10px;
	}

	.infoUserPost .nameAndHour > strong {
		color: #23a0ff;
	}

	.infoUserPost .nameAndHour > p {
		font-size: 12px;
		color: gray;
	}

	p {
		width: 100%;
		margin: 20px 0;
		font-weight: bold;
		color: #23a0ff;
		text-align: center;
	}

	.actionBtnPost {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.actionBtnPost .filesPost {
		display: flex;
		align-items: center;
		justify-content: center;

		padding: 5px 20px;
		margin-right: 10px;

		border: 0;
		outline: none;
		border-radius: 10px;
		cursor: pointer;

		color: #fff;
		font-weight: bold;
		font-size: 16px;
		transition: background 0.2s;
	}
`;

export const IconHeart = styled(IoHeartOutline)`
	stroke: red;
	width: 15px;
	height: 15px;
`;

export const IconChat = styled(IoChatbubbleOutline)`
	stroke: #256ce1;
	width: 15px;
	height: 15px;
`;

export const IconSocial = styled(IoShareSocialOutline)`
	stroke: #256ce1;
	width: 15px;
	height: 15px;
`;

// Buttons Interaction
export const Interaction = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 3vh;
	width: 70vh;
	background-color: none;
`;
export const ButtonPrecin = styled.button`
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
	margin-right: 10px;

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

export const Image = styled.div`
	height: 55px;
	width: 55px;
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

export const Pharase = styled.h3`
	font-size: 1rem;
	margin-left: 2%;
	white-space: nowrap;
`;

export const InfoUser = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 250px;
`;

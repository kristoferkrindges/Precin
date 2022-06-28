import styled from "styled-components";
import {
	IoLogoFacebook,
	IoLogoTwitter,
	IoLogoWhatsapp,
	IoCameraOutline,
	IoPencilOutline,
} from "react-icons/io5";
import { FiUpload } from "react-icons/fi";

export const Container = styled.div`
	border-radius: 1rem;
	height: 100%;
	padding: 1rem;
	background-color: ${({ theme }) => theme.feedInter};
	width: 100%;
	box-shadow: red;
	transition: 0.4s ease-in-out;
	/* border: 8px solid purple; */
	&:hover {
		/* box-shadow: red;
		opacity: 0.8; */
	}

	&::before {
		content: "";
		position: absolute;
		height: 20%;
		width: 51.7%;
		background-color: ${({ theme }) => theme.buttons};
		border-radius: 20px 20px 0 0;
	}
	@media screen and (min-width: 320px) and (max-width: 1080px) {
		height: max-content;
		width: 80%;
		margin: 2rem 0;

		&::before {
			height: 20%;
			width: 45%;
		}
	}
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px;
	position: relative;
	/* z-index: 100; */
`;
export const NameProfession = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10px;
	color: ${({ theme }) => theme.title};
`;

export const Image = styled.div`
	height: 180px;
	width: 180px;
	border-radius: 50%;
	padding: 3px;
	background-color: ${({ theme }) => theme.buttons};

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-radius: 50%;
		border: 3px solid #fff;
	}
	img:hover {
		opacity: 0.5;
	}
`;

export const Icons = styled.div`
	position: absolute;
	top: 10px;
	right: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;

	svg {
		color: #fff;
		opacity: 0.6;
		margin-top: 10px;
		transition: all 0.3s ease;
		cursor: pointer;
	}

	svg:hover {
		opacity: 1;
	}
`;

export const Name = styled.div`
	margin-top: 10px;
	margin-bottom: 10px;
	font-size: 1.5rem;
	font-weight: 600;
	color: ${({ theme }) => theme.title};
	/* background-color: rgba(146, 166, 255, 0.3); */
	border-radius: 10px;
`;

export const Old = styled.span`
	font-size: 1rem;
	font-weight: 600;
	color: ${({ theme }) => theme.title};
	/* background-color: rgba(146, 166, 255, 0.3); */
	border-radius: 10px;
`;

export const InputImage = styled.input`
	display: none;
`;

export const LabelImage = styled.label`
	color: ${({ theme }) => theme.title};
	/* background-color: #4070f4;
	height: 50px;
	width: 10vh; */
	/* text-align: center; */
	/* border: 1px solid var(--select-border);
	border-radius: 25px; */
	/* padding: 0.25em 0.5em;
	font-size: 1.5rem; */
	cursor: pointer;
	/* line-height: 1.1; */
	margin: 0;
	/* position: absolute; */
	display: flex;
	justify-content: center;
	align-items: center;
	/* margin-bottom: 8%; */

	&svg {
		margin-left: 5%;
	}
`;

export const SendImage = styled.button`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;
	border: none;
	font-size: 18px;
	width: 40%;
	margin-top: 3%;
	padding: 2%;
	background: ${({ theme }) => theme.buttons};
	color: white;
	cursor: pointer;
	transition: background 0.5s;

	:hover {
		background: rgb(37, 108, 225, 0.7);
	}
`;

export const UploadIcon = styled(FiUpload)`
	font-size: 22px;
	margin-top: 3%;
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

export const IoCamera = styled(IoCameraOutline)`
	width: 20px;
	height: 20px;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoPencil = styled(IoPencilOutline)`
	width: 20px;
	height: 20px;

	&:hover {
		opacity: 0.5;
	}
`;

// ====================================================

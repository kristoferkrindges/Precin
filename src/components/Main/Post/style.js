import styled from "styled-components";
import { IoImagesOutline } from "react-icons/io5";

export const Container = styled.div`
	/* newPost */
	background: ${({ theme }) => theme.feed};
	width: 100%;
	height: 230px;
	margin: 0;
	padding: 3%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	color: ${({ theme }) => theme.title};
	border-radius: 10px;
	border-bottom: 1px solid black;
	border-left: 1px solid black;
	border-right: 1px solid black;

	/* border-radius: 10px; */

	/* box-shadow: 0 50px 70px -40px rgba(0, 0, 0, 0.8); */

	.formPost {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.formPost textarea {
		height: 80px;
		background: ${({ theme }) => theme.fundo};
		margin: 15px 0%;
		padding: 25px;
		border-radius: 10px;
		resize: none;
		outline: none;
		border: 0;
		font-size: 18px;
		font-weight: 600;
		border: 1px solid black;
	}

	.formPost ::placeholder {
		color: ${({ theme }) => theme.title};
	}

	.formPost .iconsAndButton {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.formPost .iconsAndButton .icons {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100px;
	}

	.formPost .iconsAndButton .icons button {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 15px;
		cursor: pointer;
		background: none;
		border: 0;
		outline: none;
	}

	.formPost .iconsAndButton button.btnSubmitForm {
		background: #256ce1;
		padding: 10px 50px;
		color: #ffff;
		font-weight: 500;
		outline: none;
		cursor: pointer;
		border: 0;
		border-radius: 5px;

		&:hover {
			transition: all 0.2s ease-in-out;
			background: #fff;
			color: #010606;
		}
	}

	.formPost .iconsAndButton button.btnSubmitForm:hover {
		background: white;
		color: black;
	}

	.formPost .iconsAndButton button.btnFileForme svg:hover {
		stroke: white;
	}
`;
export const ImgIcon = styled(IoImagesOutline)`
	stroke: #256ce1;
	width: 15px;
	height: 15px;
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
`;

export const InfoUser = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 200px;
`;

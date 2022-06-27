import styled from "styled-components";
import { IoDuplicateOutline } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

export const Image = styled.img`
	height: 200px;
	width: 300px;
	margin-bottom: 2%;
	border: 5px solid rgba(37, 108, 225, 1);
	background: ${({ theme }) => theme.buttons};
`;

export const InputImage = styled.input`
	display: none;
`;

export const LabelImage = styled.label`
	color: ${({ theme }) => theme.title};
	background-color: #4070f4;
	height: 50px;
	width: 10vh;
	border: 1px solid var(--select-border);
	border-radius: 25px;
	padding: 0.25em 0.5em;
	font-size: 1.5rem;
	cursor: pointer;
	margin: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 8%;

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
	width: 100%;
	margin-bottom: 5%;
	padding: 3%;
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

export const BarProgress = styled.h3``;

export const IoImage2 = styled(IoDuplicateOutline)`
	stroke: white;
	/* height: 100%;
    width: 100%;
    object-fit: cover; */
`;

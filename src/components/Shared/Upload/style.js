import styled from "styled-components";
import { FiUpload } from "react-icons/fi";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

export const Image = styled.img`
	height: 150px;
	width: 150px;
	border-radius: 50%;
	border: 5px solid rgba(37, 108, 225, 1);
	background: ${({ theme }) => theme.buttons};
`;

export const File = styled.input`
	margin: 5%;
	font-size: 18px;
	cursor: pointer;
`;

export const SendImage = styled.button`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;
	border: none;
	font-size: 18px;
	width: 40%;
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

import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Background = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalWrapper = styled.div`
	width: 1200px;
	height: 520px;
	box-shadow: 0 5px 40px rgba(0, 0, 0, 0.6);
	background: ${({ theme }) => theme.feed};
	color: ${({ theme }) => theme.title};
	display: grid;
	grid-template-columns: 1fr 1fr;
	position: relative;
	z-index: 5;
	border-radius: 10px;
	top: -300px;
`;

export const ModalImg = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 10px 0 0 10px;
	background: #000;
`;

export const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	line-height: 1.8;
	color: ${({ theme }) => theme.title};

	h1 {
		font-size: 1.5rem;
	}
	p {
		margin-bottom: 1rem;
	}
	button {
		padding: 15px 24px;
		background: ${({ theme }) => theme.buttons};
		color: #fff;
		border: none;
		border-radius: 20px;
		cursor: pointer;
		transition: all 0.3s ease;

		&:hover {
			background: #333;
		}
	}
`;

export const CloseModalButton = styled(MdClose)`
	cursor: pointer;
	position: absolute;
	top: 20px;
	right: 20px;
	width: 32px;
	height: 32px;
	padding: 0;
`;

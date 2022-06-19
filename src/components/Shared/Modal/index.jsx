import React from "react";
import {
	Background,
	ModalWrapper,
	ModalImg,
	ModalContent,
	CloseModalButton,
} from "./style";

export const Modal = ({ closeModal }) => {
	return (
		<>
			<Background>
				<ModalWrapper>
					<ModalImg
						src={require("../../../imagens/zaffari_modal.jpg")}
						alt="market"
					/>
					<ModalContent>
						<h1>Supermercado Zaffari Cabral</h1>
						<p>R. Cabral, 600 - Rio Branco, Porto Alegre - RS, 90420-121</p>
						<button>Abrir no Maps</button>
					</ModalContent>
					<CloseModalButton onClick={() => closeModal(false)} />
				</ModalWrapper>
			</Background>
		</>
	);
};

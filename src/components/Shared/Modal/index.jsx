import React from "react";
import {
	Background,
	ModalWrapper,
	ModalImg,
	ModalContent,
	CloseModalButton,
} from "./style";

export const Modal = ({ closeModal, market, address }) => {
	return (
		<>
			<Background>
				<ModalWrapper>
					<ModalImg
						src={require("../../../imagens/zaffari_modal.jpg")}
						alt="market"
					/>
					<ModalContent>
						<h1>Supermercado {market}</h1>
						{/* R. Cabral, 600 - Rio Branco, Porto Alegre - RS, 90420-121 */}
						<p>{address}</p>
						<button>Abrir no Maps</button>
					</ModalContent>
					<CloseModalButton onClick={() => closeModal(false)} />
				</ModalWrapper>
			</Background>
		</>
	);
};

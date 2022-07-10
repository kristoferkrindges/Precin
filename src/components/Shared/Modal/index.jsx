import React from "react";
import {
	Background,
	ModalWrapper,
	ModalImg,
	ModalContent,
	CloseModalButton,
} from "./style";
import Carrefour from "../../../imagens/carrefour_modal.png";
import Nacional from "../../../imagens/nacional_modal.png";
import Zaffari from "../../../imagens/zaffari_modal.jpg";
import Outros from "../../../imagens/outros_modal.png";

export const Modal = ({ closeModal, market, address }) => {
	let mark;
	if (market == "Zaffari") {
		mark = Zaffari;
	} else if (market == "Nacional") {
		mark = Nacional;
	} else if (market == "Carrefour") {
		mark = Carrefour;
	} else {
		mark = Outros;
	}
	return (
		<>
			<Background>
				<ModalWrapper>
					<ModalImg
						//{require("../../../imagens/zaffari_modal.jpg")}
						src={mark}
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

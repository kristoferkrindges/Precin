import React, { useState, useEffect } from "react";
import {
	Container,
	CardContent,
	Image,
	Logo,
	NameSubject,
	Name,
	Subject,
	SubjectUl,
	Li,
	Rating,
	Buttons,
	HireMe,
	Icons,
	StarIcon1,
	StarIcon2,
	FacebookIcon,
	TwitterIcon,
	WhatsappIcon,
	IoCloseCircle,
} from "./style";
import { GoLocation } from "react-icons/go";
import { Modal } from "../../Shared/Modal/index";
export default function ListShop({
	img,
	name,
	price,
	updateList,
	id,
	onClick,
}) {
	const eventClick = (event) => {
		event.stopPropagation();
		if (onClick) onClick(id);
	};
	const [openModal, setOpenModal] = useState(false);
	return (
		<li>
			<Container>
				<CardContent>
					<Image>
						<Logo src={img} />
					</Image>
					<Icons>
						<IoCloseCircle onClick={eventClick} />
					</Icons>
					<NameSubject>
						<Name>{name}</Name>
						<Subject>
							<SubjectUl>R$ {price}</SubjectUl>
						</Subject>
					</NameSubject>
					<Buttons>
						<HireMe
							onClick={() => {
								setOpenModal(true);
							}}
						>
							<GoLocation></GoLocation>
						</HireMe>
					</Buttons>
					{openModal && (
						<Modal closeModal={setOpenModal} market={""} address={""} />
					)}
				</CardContent>
			</Container>
		</li>
	);
}

import React, { useState, useEffect } from "react";
import {
	Feeder,
	Profile,
	Product,
	User,
	Icon,
	IoCart,
	Logo,
	Name,
	Photo,
	NameProduct,
	Register,
	Price,
	Buttons,
	HireMe,
	Icons,
	IoCloseCircle,
} from "./style";
import { GoLocation } from "react-icons/go";
import Zaffari from "../../../imagens/logo_zaffari.png";
import Carrefour from "../../../imagens/carrefour_logo.png";
import Nacional from "../../../imagens/nacional_logo.png";
import Outro from "../../../imagens/outros_mercados.png";
import { Modal } from "../../Shared/Modal/index";
import { useUserContext } from "../../../context/userContext";

export default function Feeds({
	id,
	name,
	img_user,
	img_product,
	product,
	price,
	market,
	address,
	onClick,
}) {
	const { user, photoURL } = useUserContext();

	const eventClick = (event) => {
		event.stopPropagation();
		if (onClick) onClick(id);
	};
	//Icone mercado
	let merk;
	if (market == "Zaffari") {
		merk = Zaffari;
	} else if (market == "Carrefour") {
		merk = Carrefour;
	} else if (market == "Nacional") {
		merk = Nacional;
	} else {
		merk = Outro;
	}

	return (
		<>
			<Feeder>
				<Profile>
					<User>
						<Logo>
							<img src={img_user}></img>
						</Logo>
						<Name>{name}</Name>
					</User>
					<Icons>
						<IoCloseCircle onClick={eventClick} />
					</Icons>
				</Profile>
				<Product>
					<Photo>
						<img
							src={
								img_product ||
								"https://camo.githubusercontent.com/b7b7dca15c743879821e7cfc14e8034ecee3588e221de0a6f436423e304d95f5/68747470733a2f2f7a7562652e696f2f66696c65732f706f722d756d612d626f612d63617573612f33363664616462316461323032353338616531333332396261333464393030362d696d6167652e706e67"
							}
						></img>
					</Photo>
					<NameProduct>{product}</NameProduct>
					<Register>
						<img src={merk}></img>
						<Price>R$ {price}</Price>
						<Buttons>
							<HireMe
							// onClick={() => {
							// 	setOpenModal(true);
							// }}
							>
								<GoLocation></GoLocation>
							</HireMe>
						</Buttons>
					</Register>
					{/* {openModal && (
							<Modal
								closeModal={setOpenModal}
								market={props.market}
								address={props.address}
							/>
						)} */}
				</Product>
			</Feeder>
		</>
	);
}

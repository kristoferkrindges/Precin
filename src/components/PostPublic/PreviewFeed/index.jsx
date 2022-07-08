import React, { useState, useEffect } from "react";
import {
	Lil,
	Header,
	User,
	CardContent,
	Image,
	Logo,
	Avatar,
	Name,
	Time,
	Buttons,
	HireMe,
	Product,
	Content,
	ImgProduct,
	Img,
	Info,
	NameInfo,
	Price,
	Interaction,
	ButtonPrecin,
	ButtonPrecao,
	ButtonComment,
	Market,
	Icon,
	InfoProduct,
	Change,
	Collection,
	Locate,
	IoCart,
	Lile,
} from "./style";
import {
	AiFillLike,
	AiFillDislike,
	AiOutlineShoppingCart,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BiCommentDetail } from "react-icons/bi";
import Zaffari from "../../../imagens/logo_zaffari.png";
import Carrefour from "../../../imagens/carrefour_logo.png";
import Nacional from "../../../imagens/nacional_logo.png";
import Outro from "../../../imagens/outros_mercados.png";
import { Modal } from "../../Shared/Modal";
import { usePostContext } from "../../../context/postContext";
// import Post from "../../Post";
// import Comment from "../../Comment";

export default function PreviewFeed(props) {
	//Icone mercado
	let merk;
	if (props.market == "Zaffari") {
		merk = Zaffari;
	} else if (props.market == "Carrefour") {
		merk = Carrefour;
	} else if (props.market == "Nacional") {
		merk = Nacional;
	} else {
		merk = Outro;
	}
	let c = true;
	if (props.comments == 0) {
		c = false;
	}
	const { preview } = usePostContext();

	// Modal
	const [openModal, setOpenModal] = useState(false);
	return (
		<>
			<Lile>
				<Header>
					<User>
						<CardContent>
							<Image>
								<Logo src={props.img_user} />
							</Image>
							<Avatar>
								<Name>{`${props.name}`}</Name>
								<Time>{props.time}</Time>
							</Avatar>
							<Icon src={merk}></Icon>
						</CardContent>
					</User>
					<Product>
						<Content>
							<ImgProduct>
								{!props.preview ? (
									<Img src={preview} />
								) : (
									<Img
										src={
											props.img_product ||
											"https://camo.githubusercontent.com/b7b7dca15c743879821e7cfc14e8034ecee3588e221de0a6f436423e304d95f5/68747470733a2f2f7a7562652e696f2f66696c65732f706f722d756d612d626f612d63617573612f33363664616462316461323032353338616531333332396261333464393030362d696d6167652e706e67"
										}
									/>
								)}
							</ImgProduct>
							<Locate>
								<IoCart />
							</Locate>
							<Collection>
								<Info>
									<NameInfo>{props.product}</NameInfo>
									<Price>R$ {props.price}</Price>
								</Info>
								<Buttons>
									<HireMe
										onClick={() => {
											setOpenModal(true);
										}}
									>
										<GoLocation></GoLocation>
									</HireMe>
								</Buttons>
							</Collection>
							{openModal && <Modal closeModal={setOpenModal} />}
						</Content>
					</Product>
				</Header>
				<Interaction>
					<ButtonPrecin type="button">
						<AiFillLike></AiFillLike>
						Precin
					</ButtonPrecin>
					<ButtonPrecao type="button">
						<AiFillDislike></AiFillDislike>
						Preção
					</ButtonPrecao>
					<ButtonComment type="button">
						<BiCommentDetail></BiCommentDetail>
						Comentários {props.comments}
					</ButtonComment>
				</Interaction>
			</Lile>
			{/* {props.openComment && commentButton && (
				<Post
					name="Kristofer"
					img_url={props.img_url}
					style={!commentButton ? { display: "none" } : {}}
				></Post>
			)}
			{props.openComment && c && commentButton && (
				<Comment style={!commentButton ? { display: "none" } : {}}></Comment>
			)} */}
		</>
	);
}

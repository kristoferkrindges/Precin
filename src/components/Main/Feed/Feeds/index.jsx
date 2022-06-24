import React, { useState } from "react";
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
} from "./style";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BiCommentDetail } from "react-icons/bi";
import postImage from "../../../../imagens/tomate2.jpg";
import userImage from "../../../../imagens/dog_sorridente.jpeg";
import Zaffari from "../../../../imagens/coelhao.png";
import { ListAlt } from "@mui/icons-material";
import { Modal } from "../../../Shared/Modal/index";

export default function Feeds(props) {
	const [openModal, setOpenModal] = useState(false);

	return (
		<Lil>
			<Header>
				<User>
					<CardContent>
						<Image>
							<Logo src={props.img_url} />
						</Image>
						<Avatar>
							<Name>{`${props.name}`}</Name>
							<Time>{props.time}</Time>
						</Avatar>
						<Icon src={Zaffari}></Icon>
					</CardContent>
				</User>
				<Product>
					<Content>
						<ImgProduct>
							<Img src={props.img_product} />
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
					<AiFillLike></AiFillLike>Precin {props.precin}
				</ButtonPrecin>
				<ButtonPrecao type="button">
					<AiFillDislike></AiFillDislike>Preção {props.precao}
				</ButtonPrecao>
				<ButtonComment type="button">
					<BiCommentDetail></BiCommentDetail>Comentários {props.comments}
				</ButtonComment>
			</Interaction>
		</Lil>
	);
}

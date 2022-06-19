import React, { useState } from "react";
// import { Li, IconHeart, IconChat, IconSocial } from "./style";
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
				{/* <Product>
					<Img src={"https://www.designi.com.br/images/preview/10002716.jpg"}/>
					<Content>
						<Info>
							<Market>
								<Icon></Icon>
								<InfoProduct>
									<NameInfo>{props.product}</NameInfo>
									<Price>R$ {props.price}</Price>
								</InfoProduct>
							</Market>
							
							<Change></Change>
						</Info>
					</Content>
				</Product> */}
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
					<AiFillLike></AiFillLike>Precin
				</ButtonPrecin>
				<ButtonPrecao type="button">
					<AiFillDislike></AiFillDislike>Preção
				</ButtonPrecao>
				<ButtonComment type="button">
					<BiCommentDetail></BiCommentDetail>Comentário
				</ButtonComment>
			</Interaction>
		</Lil>
	);
	// return (
	// 	<Li key={props.index}>
	// 		<div className="infoUserPost">
	// 			<img className="imgUserPost" src={userImage}></img>
	// 			<div className="nameAndHour">
	// 				<strong>{props.name}</strong>
	// 				<p>{props.time}</p>
	// 			</div>
	// 		</div>
	// 		<div className="infoPost">
	// 			<img className="postImage" src={postImage}></img>
	// 			<p>{props.public}</p>
	// 		</div>
	// 		<div className="priceLocationPost">
	// 			<div class="price">
	// 				<h1>R$ 5,00 Kg</h1>
	// 			</div>
	// 			<p clas>
	// 				Nacional
	// 				<br />
	// 				Rua Vicente da Fontoura, 356
	// 				<GoLocation className="locationIcon" />
	// 			</p>
	// 		</div>
	// 		<div className="actionBtnPost">
	// 			<button type="button" class="filesPost like">
	// 				<AiFillLike /> Precin
	// 				{/* <IconHeart></IconHeart> */}
	// 			</button>
	// 			<button type="button" class="filesPost comment">
	// 				<AiFillDislike /> Preção
	// 				{/* <IconChat></IconChat> */}
	// 			</button>
	// 			{/* <button type="button" class="filesPost share">
	// 				<IconSocial></IconSocial>Compartilhar
	// 			</button> */}
	// 		</div>
	// 		<div>
	// 			<BiCommentDetail className="comments" />
	// 			<p>18</p>
	// 		</div>
	// 	</Li>
	// );
}

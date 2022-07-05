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
import postImage from "../../../../imagens/tomate2.jpg";
import userImage from "../../../../imagens/dog_sorridente.jpeg";
import Zaffari from "../../../../imagens/logo_zaffari.png";
import Carrefour from "../../../../imagens/carrefour_logo.png";
import Nacional from "../../../../imagens/nacional_logo.png";
import Outro from "../../../../imagens/outros_mercados.png";
// import Outros from "../../../../imagens/outros.png";
import { Modal } from "../../../Shared/Modal/index";
import Post from "../../Post";
import Comment from "../../Comment";
import { usePostContext } from "../../../../context/postContext";
import { db } from "../../../../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Feeds(props) {
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
	const [openModal, setOpenModal] = useState(false);
	let controllerPrecin = props.precin;
	let controllerPrecao = props.precao;
	const [precin, setPrecin] = useState(controllerPrecin); //Aqui pega o context precin
	const [precao, setPrecao] = useState(controllerPrecao); //Aqui pega o context precao

	const [precinButton, setPrecinButton] = useState(false);
	const [precaoButton, setPrecaoButton] = useState(false);
	const [commentButton, setCommentButton] = useState(false);

	const { preview, productURL, image } = usePostContext();

	function HandlerButtonPrecin() {
		if (precinButton == false) {
			setPrecinButton(true);
			setPrecin(precin + 1);
			if (precaoButton == true) {
				setPrecaoButton(false);
				setPrecao(precao - 1);
			}
		} else {
			setPrecinButton(false);
			setPrecin(precin - 1);
		}
	}

	function HandlerButtonPrecao() {
		if (precaoButton == false) {
			setPrecaoButton(true);
			setPrecao(precao + 1);
			if (precinButton == true) {
				setPrecinButton(false);
				setPrecin(precin - 1);
			}
		} else {
			setPrecaoButton(false);
			setPrecao(precao - 1);
		}
	}

	function HandlerButtonComment() {
		if (commentButton == false) {
			setCommentButton(true);
		} else {
			setCommentButton(false);
		}
	}

	function ProductImage() {
		const [productImage, setProductImage] = useState([]);
		const productImageCollectionRef = collection(db, "posts");

		useEffect(() => {
			const getProductImage = async () => {
				const data = await getDocs(productImageCollectionRef);
				setProductImage(data.docs.map((doc) => ({ ...doc.data() })));
			};
			getProductImage();
		}, []);
	}

	if (props.openComment == false) {
		return (
			<>
				<Lil>
					<Header>
						<User>
							<CardContent>
								<Image>
									<Logo src={props.img_user} />
								</Image>
								<Avatar>
									<Name>{props.name}</Name>
									<Time>{props.time}</Time>
								</Avatar>
								<Icon src={merk}></Icon>
							</CardContent>
						</User>
						<Product>
							<Content>
								<ImgProduct>
									{/* {Feeds.productImage.map((productImage) => { */}
									<Img src={productURL} />
									{/* })} */}
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
						<ButtonPrecin type="button" onClick={HandlerButtonPrecin}>
							<AiFillLike
								style={precinButton ? { color: "black" } : {}}
							></AiFillLike>
							Precin {precin}
						</ButtonPrecin>
						<ButtonPrecao type="button" onClick={HandlerButtonPrecao}>
							<AiFillDislike
								style={precaoButton ? { color: "black" } : {}}
							></AiFillDislike>
							Preção {precao}
						</ButtonPrecao>
						<ButtonComment type="button" onClick={HandlerButtonComment}>
							<BiCommentDetail
								style={props.button ? { color: "black" } : {}}
							></BiCommentDetail>
							Comentários {props.comments}
						</ButtonComment>
					</Interaction>
				</Lil>
				{props.openComment && commentButton && (
					<Post name="Kristofer" img_url={props.img_url}></Post>
				)}
				{props.openComment && props.comments && commentButton && (
					<Comment></Comment>
				)}
			</>
		);
	} else {
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
									<Img src={preview} />
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
						<ButtonPrecin type="button" onClick={HandlerButtonPrecin}>
							<AiFillLike
								style={precinButton ? { color: "black" } : {}}
							></AiFillLike>
							Precin {precin}
						</ButtonPrecin>
						<ButtonPrecao type="button" onClick={HandlerButtonPrecao}>
							<AiFillDislike
								style={precaoButton ? { color: "black" } : {}}
							></AiFillDislike>
							Preção {precao}
						</ButtonPrecao>
						<ButtonComment type="button" onClick={HandlerButtonComment}>
							<BiCommentDetail
								style={props.button ? { color: "black" } : {}}
							></BiCommentDetail>
							Comentários {props.comments}
						</ButtonComment>
					</Interaction>
				</Lile>
				{props.openComment && commentButton && (
					<Post
						name="Kristofer"
						img_url={props.img_url}
						style={!commentButton ? { display: "none" } : {}}
					></Post>
				)}
				{props.openComment && c && commentButton && (
					<Comment style={!commentButton ? { display: "none" } : {}}></Comment>
				)}
			</>
		);
	}
}

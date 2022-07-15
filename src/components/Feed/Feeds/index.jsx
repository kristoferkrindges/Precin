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
	Interaction,
	ButtonPrecin,
	ButtonPrecao,
	ButtonComment,
	NameProduct,
	Register,
	Price,
	Buttons,
	HireMe,
	Let,
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
import { Modal } from "../../Shared/Modal/index";
import Post from "../../Main/Post";
import Comment from "../../Main/Comment";
import { usePostContext } from "../../../context/postContext";
import { db } from "../../../firebase";
import {
	collection,
	doc,
	getDocs,
	query,
	updateDoc,
	setDoc,
	orderBy,
	arrayUnion,
	arrayRemove,
} from "firebase/firestore";
import { useUserContext } from "../../../context/userContext";
import { Link } from "react-router-dom";
import Notification from "../../Shared/Notification";
import { toast } from "react-toastify";
import ModalImage from "../../Shared/ModalImage";

export default function Feeds(props) {
	const { user, photoURL } = useUserContext();
	// console.log(user);
	// console.log(photoURL);

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
	// Parte de feed NOVO lógica.
	// States array userP precin and precao
	const [userPrecin, setUserPrecin] = useState(props.userPrecin[0]);
	const [userPrecao, setUserPrecao] = useState(props.userPrecao[0]);
	// console.log(props.userPrecin[0]);
	let pres;
	let prec;
	if (Array.isArray(userPrecin) ? userPrecin.includes(props.id) : false) {
		pres = true;
	} else {
		pres = false;
	}

	if (Array.isArray(userPrecao) ? userPrecao.includes(props.id) : false) {
		prec = true;
	} else {
		prec = false;
	}
	if ((pres & prec) == true) {
		pres = false;
		prec = false;
	}
	// while (userPrecin != undefined) {}
	// if (userPrecin.includes(props.id)) {
	// 	pres = true;
	// } else {
	// 	pres = false;
	// }

	// if (userPrecao.includes(props.id)) {
	// 	prec = true;
	// } else {
	// 	prec = false;
	// }

	// Controller precin and precao
	const [precin, setPrecin] = useState(props.precin); //Aqui pega o context precin
	const [precao, setPrecao] = useState(props.precao); //Aqui pega o context precao
	if (precin <= -1) {
		setPrecin(0);
	}
	if (precao <= -1) {
		setPrecao(0);
	}

	const [precinButton, setPrecinButton] = useState(pres); // Colocar a let pres
	const [precaoButton, setPrecaoButton] = useState(prec); // Colocar a let prec
	// console.log(props.idP.toString());
	function HandlerButtonPrecin() {
		if (precinButton == false) {
			setPrecinButton(true);
			setPrecin(precin + 1);
			IncreseAvaiblePrecin(props.idP.toString(), props.id);
			decreseAvaiblePrecao(props.idP.toString(), props.id);
			updateIncreasePrecin(props.id, precin);
			if (precaoButton == true) {
				setPrecaoButton(false);
				if (precao == 0) {
					setPrecao(precao);
				} else {
					setPrecao(precao - 1);
				}
				updateDecreasePrecao(props.id, precao);
				decreseAvaiblePrecao(props.idP.toString(), props.id);
			}
		} else {
			setPrecinButton(false);
			if (precin == 0) {
				setPrecin(precin);
			} else {
				setPrecin(precin - 1);
			}
			updateDecreasePrecin(props.id, precin);
			decreseAvaiblePrecin(props.idP.toString(), props.id);
		}
	}

	function HandlerButtonPrecao() {
		if (precaoButton == false) {
			setPrecaoButton(true);
			setPrecao(precao + 1);
			updateIncreasePrecao(props.id, precao);
			decreseAvaiblePrecin(props.idP.toString(), props.id);
			IncreseAvaiblePrecao(props.idP.toString(), props.id);
			if (precinButton == true) {
				setPrecinButton(false);
				if (precin == 0) {
					setPrecin(precin);
				} else {
					setPrecin(precin - 1);
				}
				updateDecreasePrecin(props.id, precin);
				decreseAvaiblePrecin(props.idP.toString(), props.id);
			}
		} else {
			setPrecaoButton(false);
			if (precao == 0) {
				setPrecao(precao);
			} else {
				setPrecao(precao - 1);
			}
			updateDecreasePrecao(props.id, precao);
			decreseAvaiblePrecao(props.idP.toString(), props.id);
		}
	}

	const IncreseAvaiblePrecin = async (id, item) => {
		const postDoc = doc(db, "usersP", id);
		const newFields = { precin: arrayUnion(item) };
		await updateDoc(postDoc, newFields);
		console.log("Ex list!");
	};
	const decreseAvaiblePrecin = async (id, shop) => {
		const postDoc = doc(db, "usersP", id);
		const newFields = { precin: arrayRemove(shop) };
		await updateDoc(postDoc, newFields);
		console.log("Ex list!");
	};
	const IncreseAvaiblePrecao = async (id, item) => {
		const postDoc = doc(db, "usersP", id);
		const newFields = { precao: arrayUnion(item) };
		await updateDoc(postDoc, newFields);
		console.log("Ex list!");
	};
	const decreseAvaiblePrecao = async (id, shop) => {
		const postDoc = doc(db, "usersP", id);
		const newFields = { precao: arrayRemove(shop) };
		await updateDoc(postDoc, newFields);
		console.log("Ex list!");
	};
	//Firestore Update - IncreasePrecin & DecreasePrecin
	const updateIncreasePrecao = async (id, precao) => {
		const postDoc = doc(db, "posts", id);
		const newFields = { precao: precao + 1 };
		await updateDoc(postDoc, newFields);
		console.log("Precao increased!");
	};

	const updateDecreasePrecao = async (id, precao) => {
		const postDoc = doc(db, "posts", id);
		const newFields = { precao: precao - 1 };
		await updateDoc(postDoc, newFields);
		console.log("Precao decreased!");
	};

	//Firestore Update - IncreasePrecin & DecreasePrecin
	const updateIncreasePrecin = async (id, precin) => {
		const postDoc = doc(db, "posts", id);
		const newFields = { precin: precin + 1 };
		await updateDoc(postDoc, newFields);
		console.log("Precin increased!");
	};

	const updateDecreasePrecin = async (id, precin) => {
		const postDoc = doc(db, "posts", id);
		const newFields = { precin: precin - 1 };
		await updateDoc(postDoc, newFields);
		console.log("Precin decreased!");
	};
	// ========================================================
	// Modal
	const [openModal, setOpenModal] = useState(false);

	const [commentButton, setCommentButton] = useState(false);

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
	// ListShop
	function HandlerButtonShop() {
		if (
			Array.isArray(props.listShop) ? props.listShop.includes(props.id) : false
		) {
			console.log("not");
		} else {
			updateList(props.idP.toString(), props.id);
		}
		toast.success("Adicionado com sucesso!");
	}

	const updateList = async (id, shop) => {
		const postDoc = doc(db, "usersP", id);
		const newFields = { listShoop: arrayUnion(shop) };
		await updateDoc(postDoc, newFields);
		console.log("Add list!");
	};

	// Modal image
	const [openModalImg, setOpenModalImg] = useState(false);

	const [openModalImgP, setOpenModalImgP] = useState(false);

	if (props.openComment == false) {
		return (
			<>
				<Feeder>
					<Profile>
						<User>
							<Logo>
								<img
									src={props.img_user}
									onClick={() => {
										setOpenModalImg(true);
									}}
								></img>
							</Logo>
							<Name>{props.name}</Name>
						</User>
						<Icon>
							<IoCart
								onClick={() => {
									HandlerButtonShop();
								}}
							/>
						</Icon>
					</Profile>
					{openModalImg && (
						<ModalImage closeModal={setOpenModalImg} ground={props.img_user} />
					)}
					<Product>
						<Photo>
							<img
								src={
									props.img_product ||
									"https://camo.githubusercontent.com/b7b7dca15c743879821e7cfc14e8034ecee3588e221de0a6f436423e304d95f5/68747470733a2f2f7a7562652e696f2f66696c65732f706f722d756d612d626f612d63617573612f33363664616462316461323032353338616531333332396261333464393030362d696d6167652e706e67"
								}
								onClick={() => {
									setOpenModalImgP(true);
								}}
							></img>
						</Photo>
						<NameProduct>{props.product}</NameProduct>
						<Register>
							<img src={merk}></img>
							<Price>R$ {props.price}</Price>
							<Buttons>
								<HireMe
									onClick={() => {
										setOpenModal(true);
									}}
								>
									<GoLocation></GoLocation>
								</HireMe>
							</Buttons>
						</Register>
						{openModal && (
							<Modal
								closeModal={setOpenModal}
								market={props.market}
								address={props.address}
							/>
						)}
					</Product>
					{openModalImgP && (
						<ModalImage
							closeModal={setOpenModalImgP}
							ground={props.img_product}
						/>
					)}
					<Interaction>
						<Link to={user ? "" : "/login"}>
							<ButtonPrecin
								type="button"
								onClick={() => {
									HandlerButtonPrecin();
								}}
							>
								<AiFillLike
									style={precinButton ? { color: "black" } : {}}
								></AiFillLike>
								Precin {precin}
							</ButtonPrecin>
						</Link>
						<Link to={user ? "" : "/login"}>
							<ButtonPrecao type="button" onClick={HandlerButtonPrecao}>
								<AiFillDislike
									style={precaoButton ? { color: "black" } : {}}
								></AiFillDislike>
								Preção {precao}
							</ButtonPrecao>
						</Link>
						<Link to={user ? "" : "/login"}>
							<ButtonComment type="button" onClick={HandlerButtonComment}>
								<BiCommentDetail
									style={props.button ? { color: "black" } : {}}
								></BiCommentDetail>
								Comentários {props.comments}
							</ButtonComment>
						</Link>
					</Interaction>
				</Feeder>
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
				<Feeder>
					<Profile>
						<User>
							<Logo>
								<img src={props.img_user}></img>
							</Logo>
							<Name>{props.name}</Name>
						</User>
						<Icon>
							<IoCart
								onClick={() => {
									HandlerButtonShop();
								}}
							/>
						</Icon>
					</Profile>
					<Product>
						<Photo>
							<img
								src={
									props.img_product ||
									"https://camo.githubusercontent.com/b7b7dca15c743879821e7cfc14e8034ecee3588e221de0a6f436423e304d95f5/68747470733a2f2f7a7562652e696f2f66696c65732f706f722d756d612d626f612d63617573612f33363664616462316461323032353338616531333332396261333464393030362d696d6167652e706e67"
								}
							></img>
						</Photo>
						<NameProduct>{props.product}</NameProduct>
						<Register>
							<img src={merk}></img>
							<Price>R$ {props.price}</Price>
							<Buttons>
								<HireMe
									onClick={() => {
										setOpenModal(true);
									}}
								>
									<GoLocation></GoLocation>
								</HireMe>
							</Buttons>
						</Register>
						{openModal && (
							<Modal
								closeModal={setOpenModal}
								market={props.market}
								address={props.address}
							/>
						)}
					</Product>
					<Interaction>
						<Link to={user ? "" : "/login"}>
							<ButtonPrecin
								type="button"
								onClick={() => {
									HandlerButtonPrecin();
								}}
							>
								<AiFillLike
									style={precinButton ? { color: "black" } : {}}
								></AiFillLike>
								Precin {precin}
							</ButtonPrecin>
						</Link>
						<Link to={user ? "" : "/login"}>
							<ButtonPrecao type="button" onClick={HandlerButtonPrecao}>
								<AiFillDislike
									style={precaoButton ? { color: "black" } : {}}
								></AiFillDislike>
								Preção {precao}
							</ButtonPrecao>
						</Link>
						<Link to={user ? "" : "/login"}>
							<ButtonComment type="button" onClick={HandlerButtonComment}>
								<BiCommentDetail
									style={props.button ? { color: "black" } : {}}
								></BiCommentDetail>
								Comentários {props.comments}
							</ButtonComment>
						</Link>
					</Interaction>
				</Feeder>
				{props.openComment && commentButton && (
					<Post
						name={user ? user.displayName : ""}
						img_url={user ? photoURL : ""}
					></Post>
				)}
				{props.openComment && props.comments > 0 && commentButton && (
					<Comment></Comment>
				)}
			</>
		);
	}
}

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
import {
	collection,
	doc,
	getDocs,
	query,
	updateDoc,
	setDoc,
	orderBy,
	arrayUnion,
} from "firebase/firestore";
import { useUserContext } from "../../../../context/userContext";

export default function Feeds(props) {
	const { user } = useUserContext();
	// let dk;
	// const [users, setUsers] = useState([]);
	// const userCollectionRef = query(
	// 	collection(db, "usersP"),
	// 	orderBy("name", "desc")
	// );

	// useEffect(() => {
	// 	const getUsers = async () => {
	// 		const data = await getDocs(userCollectionRef);
	// 		setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
	// 		// console.log(data);
	// 	};

	// 	getUsers();
	// }, []);
	// console.log(users);

	// dk =
	// 	users.length > 0 &&
	// 	users
	// 		.filter((item) => item.email == user.email)
	// 		.map((value, key) => value.idP);
	// console.log(dk.toString());

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
	// Modal
	const [openModal, setOpenModal] = useState(false);

	// States array userP precin and precao
	const [userPrecin, setUserPrecin] = useState(props.userPrecin[0]);
	const [userPrecao, setUserPrecao] = useState(props.userPrecao[0]);
	//Setar fora
	// console.log(userPrecin);
	// console.log(userPrecao);
	let pres;
	let prec;
	// let arrayPrecin;
	// let arrayPrecao;
	let arrayPrecin = props.userPrecin[0];
	let arrayPrecao = props.userPrecao[0];
	// console.log(props.id);
	// console.log(arrayPrecin);
	if (Array.isArray(arrayPrecin) ? arrayPrecin.includes(props.id) : false) {
		pres = true;
	} else {
		pres = false;
	}

	if (Array.isArray(userPrecao) ? userPrecao.includes(props.id) : false) {
		prec = true;
	} else {
		prec = false;
	}

	// Controller precin and precao
	let controllerPrecin = props.precin;
	let controllerPrecao = props.precao;
	const [precin, setPrecin] = useState(controllerPrecin); //Aqui pega o context precin
	const [precao, setPrecao] = useState(controllerPrecao); //Aqui pega o context precao

	const [precinButton, setPrecinButton] = useState(pres); // Colocar a let pres
	const [precaoButton, setPrecaoButton] = useState(prec); // Colocar a let prec
	const [commentButton, setCommentButton] = useState(false);

	const { preview } = usePostContext();

	function HandlerButtonPrecin() {
		if (precinButton == false) {
			setPrecinButton(true);
			setPrecin(precin + 1);
			arrayPrecin.push(props.id);
			updateIncreasePrecin(props.id, precin);
			updatePrecin();
			if (precaoButton == true) {
				setPrecaoButton(false);
				setPrecao(precao - 1);
				updateDecreasePrecao(props.id, precao);
				arrayPrecao = arrayPrecao.filter((p) => p !== props.id);
				updatePrecao();
				// setUserPrecao(
				// 	Array.isArray(arrayPrecao)
				// 		? arrayPrecao.filter((p) => p !== props.id)
				// 		: arrayPrecao
				// );
			}
		} else {
			setPrecinButton(false);
			setPrecin(precin - 1);
			console.log(arrayPrecin);
			arrayPrecin = arrayPrecin.filter((p) => p !== props.id);
			console.log(arrayPrecin);
			updatePrecin();
			updateDecreasePrecin(props.id, precin);
		}
	}

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

	function HandlerButtonPrecao() {
		if (precaoButton == false) {
			setPrecaoButton(true);
			setPrecao(precao + 1);
			updateIncreasePrecao(props.id, precao);
			arrayPrecao.push(props.id);
			updatePrecao();
			if (precinButton == true) {
				setPrecinButton(false);
				setPrecin(precin - 1);
				updateDecreasePrecin(props.id, precin);
				arrayPrecin = arrayPrecin.filter((p) => p !== props.id);
				updatePrecin();
			}
		} else {
			setPrecaoButton(false);
			setPrecao(precao - 1);
			updateDecreasePrecao(props.id, precao);
			arrayPrecao = arrayPrecao.filter((p) => p !== props.id);
			console.log(arrayPrecao);
			updatePrecao();
		}
	}

	function HandlerButtonComment() {
		if (commentButton == false) {
			setCommentButton(true);
		} else {
			setCommentButton(false);
		}
	}

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
	// Arrays Precin and Precao Updates dk.toString()
	// const postsCollectionRef = doc(db, "usersP", props.idP[0]);
	let postsCollectionRef;
	if (user) {
		postsCollectionRef = doc(db, "usersP", props.idP.toString());
	} else {
		postsCollectionRef = doc(db, "usersP", "kJyjN2C2D8SzaeaoIsOx");
	}

	const updatePrecin = async () => {
		await setDoc(
			postsCollectionRef,
			{
				precin: arrayPrecin,
			},
			{ merge: true }
		);
	};

	const updatePrecao = async () => {
		await setDoc(
			postsCollectionRef,
			{
				precao: arrayPrecao,
			},
			{ merge: true }
		);
	};

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
	}

	const updateList = async (id, shop) => {
		const postDoc = doc(db, "usersP", id);
		const newFields = { listShoop: arrayUnion(shop) };
		await updateDoc(postDoc, newFields);
		console.log("Add list!");
	};

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
									<Img
										src={
											props.img_product ||
											"https://camo.githubusercontent.com/b7b7dca15c743879821e7cfc14e8034ecee3588e221de0a6f436423e304d95f5/68747470733a2f2f7a7562652e696f2f66696c65732f706f722d756d612d626f612d63617573612f33363664616462316461323032353338616531333332396261333464393030362d696d6167652e706e67"
										}
									/>
									{/* })} */}
								</ImgProduct>
								<Locate>
									<IoCart
										onClick={() => {
											HandlerButtonShop();
										}}
									/>
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
								{openModal && (
									<Modal
										closeModal={setOpenModal}
										market={props.market}
										address={props.address}
									/>
								)}
							</Content>
						</Product>
					</Header>
					<Interaction>
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
									<IoCart
										onClick={() => {
											HandlerButtonShop();
										}}
									/>
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
								{openModal && (
									<Modal
										closeModal={setOpenModal}
										market={props.market}
										address={props.address}
									/>
								)}
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

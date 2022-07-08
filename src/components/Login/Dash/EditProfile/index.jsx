import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../../Sidebar/index";
import {
	Container,
	Context,
	Top,
	Bottom,
	Layout,
	CardContent,
	Image,
	Logo,
	NameSubject,
	Name,
	Buttons,
	HireMe,
	FacebookIcon,
	TwitterIcon,
	WhatsappIcon,
	IoCamera,
	Social,
	InputImage,
	LabelImage,
	Title,
	UserDetails,
	InputBox,
	ButtonResult,
	Collection,
	IoClose,
	IoPencil,
} from "./style";
import { useUserContext } from "../../../../context/userContext";
import { usePostContext } from "../../../../context/postContext";
import logo from "../../../../imagens/logo.png";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../../../firebase";

function EditProfile(props) {
	const {
		user,
		photoURL,
		handlePreview,
		profilePreview,
		handleChange,
		handleClick,
	} = useUserContext();

	const [clickName, setClickName] = useState(false);
	const [clickPhone, setClickPhone] = useState(false);
	const [clickEmail, setClickEmail] = useState(false);
	const [clickYear, setClickYear] = useState(false);

	const [open, setOpen] = useState(false);

	const [users, setUsers] = useState([]);

	let id =
		users.length > 0 &&
		users
			.filter((item) => item.email == user.email)
			.map((value, key) => value.idP);

	// users.filter((value) => {
	// 	if (value.email == user.email) {
	// 		return value;
	// 	}
	// });

	const data = JSON.stringify(id);
	const data_replaced = data.replace("[", "");
	const data_replaced2 = data_replaced.replace("]", "");
	const data_replaced3 = data_replaced2.replace(/['"]+/g, "");

	// console.log(data_replaced3);

	function HandlerOpen() {
		if (open == false) {
			setOpen(true);
		} else {
			setOpen(false);
		}
	}

	function HandlerName() {
		if (clickName == false) {
			setClickName(true);
		} else {
			setClickName(false);
		}
	}

	function HandlerPhone() {
		if (clickPhone == false) {
			setClickPhone(true);
		} else {
			setClickPhone(false);
		}
	}

	function HandlerEmail() {
		if (clickEmail == false) {
			setClickEmail(true);
		} else {
			setClickEmail(false);
		}
	}

	function HandlerYear() {
		if (clickYear == false) {
			setClickYear(true);
		} else {
			setClickYear(false);
		}
	}

	// Update img_url collection usersP Firestore
	const userCollectionRef = collection(db, "usersP");

	useEffect(() => {
		const getUsers = async () => {
			const data = await getDocs(userCollectionRef);
			setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
		getUsers();
	}, []);

	// function updatePhotoURL() {
	const updateImgURL = async (id, photoURL) => {
		const userDoc = doc(db, "usersP", id);
		const newFields = { img_url: photoURL };
		await updateDoc(userDoc, newFields);
		console.log("photoURL updated!");
	};
	// 	updateImgURL(id, photoURL);
	// }

	return (
		<Container>
			<Sidebar logo={logo} name={user.displayName} type={props.type} msg={4} />
			<Context>
				<Layout style={!open ? { background: "none" } : {}}>
					<Top>
						<CardContent>
							<Image>
								{profilePreview ? (
									<Logo src={profilePreview} />
								) : (
									<Logo src={photoURL} />
								)}
								{/* <Logo src={profilePreview} /> */}
								<InputImage
									type="file"
									id="file"
									name="image"
									acceppt="image/*, png, jpeg, jpg"
									onChange={handlePreview}
								/>
								<LabelImage
									htmlFor="file"
									style={!open ? { display: "none" } : {}}
								>
									<IoCamera></IoCamera>
								</LabelImage>
							</Image>
							<Social>
								<FacebookIcon></FacebookIcon>
								<TwitterIcon></TwitterIcon>
								<WhatsappIcon></WhatsappIcon>
							</Social>
							<NameSubject>
								<Name style={open ? { margin: "20% 0% 0% 0%" } : {}}>
									{open ? user.displayName : user.displayName}
								</Name>
							</NameSubject>
							<Buttons
								onClick={HandlerOpen}
								style={open ? { display: "none" } : {}}
							>
								<HireMe>Editar</HireMe>
							</Buttons>
						</CardContent>
					</Top>
					<Bottom style={!open ? { display: "none" } : {}}>
						<Title>Editar perfil</Title>
						<Collection>
							<form>
								<UserDetails>
									<InputBox>
										<span class="details">Nome</span>

										<input
											type="text"
											placeholder="Digite seu Nome..."
											required
											value={user.displayName}
										/>
									</InputBox>
									<InputBox>
										<span class="details">Email</span>
										<input
											type="text"
											placeholder="Digite seu Email..."
											required
											value={user.email}
										/>
									</InputBox>
									<InputBox>
										<span class="details">Telefone</span>
										<input
											type="text"
											placeholder="Digite seu Telefone..."
											required
										/>
									</InputBox>
									<InputBox>
										<span class="details">Senha</span>
										<input
											type="text"
											placeholder="Digite seu Senha..."
											required
										/>
									</InputBox>
									{/* <ButtonResult>
										<input type="submit" value="Register" />
									</ButtonResult> */}
									<Buttons
										onClick={HandlerOpen}
										style={open ? { margin: "8% 0% 0% 0%" } : {}}
									>
										<HireMe
											onClick={() => {
												handleClick();
												updateImgURL(data_replaced3, photoURL);
											}}
										>
											Pronto
										</HireMe>
									</Buttons>
								</UserDetails>
							</form>
						</Collection>
					</Bottom>
				</Layout>
			</Context>
		</Container>
	);
}

export default EditProfile;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
	InputName,
	TextInput,
	Left,
	Right,
	ContainerInput,
	Controller,
	IoMail,
	IoLock,
	IoPerson,
	IoMail2,
	IoLock2,
	IoPerson2,
} from "./style";
import { useUserContext } from "../../../../context/userContext";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../../../firebase";

function EditProfile() {
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
								<IoPerson2></IoPerson2>
								<IoMail2></IoMail2>
								<IoLock2></IoLock2>
							</Social>
							<NameSubject>
								<Name style={open ? { display: "none" } : {}}>
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
						<UserDetails>
							<Left>
								<Controller>
									<span>Nome</span>
									<ContainerInput>
										<InputName
											type="text"
											placeholder="Nome do produto"
											value={user.displayName}
										/>
										<TextInput>
											<IoPerson></IoPerson>
										</TextInput>
									</ContainerInput>
								</Controller>
								<Controller>
									<span>Senha</span>
									<ContainerInput>
										<InputName
											type="text"
											placeholder="Nome"
											value={"**********"}
										/>
										<TextInput>
											<IoLock></IoLock>
										</TextInput>
									</ContainerInput>
								</Controller>
							</Left>
							<Right>
								<Controller>
									<span>Email</span>
									<ContainerInput>
										<InputName
											type="text"
											placeholder="Email"
											value={user.email}
										/>
										<TextInput>
											<IoMail></IoMail>
										</TextInput>
									</ContainerInput>
								</Controller>
								<Controller>
									<span>Confirmar senha</span>
									<ContainerInput>
										<InputName
											type="text"
											placeholder="Senha"
											value={"**********"}
										/>
										<TextInput>
											<IoLock></IoLock>
										</TextInput>
									</ContainerInput>
								</Controller>
							</Right>
						</UserDetails>
						<Buttons onClick={HandlerOpen} style={open ? {} : {}}>
							<HireMe
								onClick={() => {
									handleClick();
									updateImgURL(data_replaced3, photoURL);
								}}
							>
								Pronto
							</HireMe>
						</Buttons>
					</Bottom>
				</Layout>
			</Context>
		</Container>
	);
}

export default EditProfile;

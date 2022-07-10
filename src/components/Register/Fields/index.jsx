import React, { useState, useRef } from "react";
import {
	Container,
	LeftRegister,
	TextTitle,
	RightRegister,
	SubmitRegister,
	CardRegister,
	CardTitle,
	SingupImage,
	TextField,
	Field,
	LabelField,
	RegisterButton,
} from "./style";
import { useUserContext } from "../../../context/userContext";
import { db } from "../../../firebase/index";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { usePostContext } from "../../../context/postContext";
// import api from "../../../services/api";

// export default function Fields() {

const Signup = () => {
	const emailRef = useRef();
	const nameRef = useRef();
	const psdRef = useRef();
	const { registerUser } = useUserContext();
	const { photoURL } = usePostContext();

	const onSubmit = (e) => {
		e.preventDefault();
		const email = emailRef.current.value;
		const name = nameRef.current.value;
		const password = psdRef.current.value;
		if (email && name && password) registerUser(email, name, password);
		creatUserP();
	};
	const initialState = {
		type: "",
		name: "",
		lastname: "",
		email: "",
		password: "",
	};

	const [fields, setFields] = useState(initialState);

	const handleFieldsChange = (e) =>
		setFields({
			...fields,
			[e.currentTarget.name]: e.currentTarget.value,
		});

	// Create collection inside Firestore with inputs
	const usersPCollectionRef = doc(collection(db, "usersP"));

	const creatUserP = async () => {
		await setDoc(usersPCollectionRef, {
			name: nameRef.current.value,
			email: emailRef.current.value,
			precin: ["0"],
			precao: ["0"],
			listPublic: ["0"],
			listShoop: ["0"],
			idP: usersPCollectionRef.id,
			img_url: "",
		});
	};

	return (
		<Container>
			<LeftRegister>
				<TextTitle>Tenha acesso completo ao Precin</TextTitle>
				<SingupImage
					href="https://storyset.com/marketing"
					alt="Marketing illustrations by Storyset"
				/>
			</LeftRegister>
			<SubmitRegister onSubmit={onSubmit}>
				<RightRegister>
					<CardRegister>
						<CardTitle>Cadastro</CardTitle>
						<TextField>
							{/* Nome */}
							<LabelField for="name">Nome</LabelField>
							<Field
								placeholder="Nome"
								id="name"
								type="name"
								ref={nameRef}
								onChange={handleFieldsChange}
							/>
							{/* Email */}
							<LabelField for="email">Email</LabelField>
							<Field
								placeholder="Email"
								id="email"
								name="email"
								type="email"
								ref={emailRef}
								onChange={handleFieldsChange}
							/>
							{/* Senha */}
							<LabelField for="senha">Senha</LabelField>
							<Field
								placeholder="Senha"
								id="password"
								name="password"
								type="password"
								ref={psdRef}
								onChange={handleFieldsChange}
							/>
						</TextField>
						<RegisterButton type="submit">Cadastrar</RegisterButton>
					</CardRegister>
				</RightRegister>
			</SubmitRegister>
		</Container>
	);
};

export default Signup;

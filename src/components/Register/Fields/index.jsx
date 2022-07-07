import React, { useState, useRef } from "react";
import { Container } from "./style";
import { useUserContext } from "../../../context/userContext";
import { BsPerson } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
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
			<div className="form">
				<h2>Cadastro</h2>
				<form onSubmit={onSubmit}>
					<BsPerson className="formIcons" />
					<input
						placeholder="Nome"
						id="name"
						name="name"
						type="name"
						ref={nameRef}
						value={fields.name}
						onChange={handleFieldsChange}
					/>
					<AiOutlineMail className="formIcons" />
					<input
						placeholder="Email"
						id="email"
						name="email"
						type="email"
						ref={emailRef}
						/*value={fields.email}*/
						onChange={handleFieldsChange}
					/>
					<RiLockPasswordLine className="formIcons" />
					<input
						placeholder="Senha"
						id="password"
						name="password"
						type="password"
						ref={psdRef}
						/*value={fields.password}*/
						onChange={handleFieldsChange}
					/>
					{/* <input
						placeholder="Confirmar Senha"
						id="confirm-password"
						name="confirm-password"
						type="password"
						value={""}
					/> */}
					<button type="submit">Registrar</button>
				</form>
			</div>
		</Container>
	);
};

export default Signup;

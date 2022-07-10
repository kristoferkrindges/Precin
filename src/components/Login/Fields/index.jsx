import React, { useRef } from "react";
import {
	Container,
	BackgroundImage,
	LeftLogin,
	TextTitle,
	RightLogin,
	CardLogin,
	CardTitle,
	SubmitLogin,
	TextField,
	Field,
	LabelField,
	LoginButton,
	ProductHunt,
	ForgotPassword,
} from "./style";
import { useUserContext } from "../../../context/userContext";

const Signin = () => {
	const emailRef = useRef();
	const psdRef = useRef();
	const { signInUser, forgotPassword } = useUserContext();

	const onSubmit = (e) => {
		e.preventDefault();
		const email = emailRef.current.value;
		const password = psdRef.current.value;
		if (email && password) signInUser(email, password);
	};

	const forgotPasswordHandler = () => {
		const email = emailRef.current.value;
		if (email)
			forgotPassword(email).then(() => {
				emailRef.current.value = "";
				alert("Email enviado para a sua caixa de entrada!");
			});
	};

	return (
		<Container>
			<LeftLogin>
				<TextTitle>Entre e aproveite os melhores Precinhos</TextTitle>
				<ProductHunt
					href="https://storyset.com/marketing"
					alt="Marketing illustrations by Storyset"
				/>
			</LeftLogin>
			<SubmitLogin onSubmit={onSubmit}>
				<RightLogin>
					<CardLogin>
						<CardTitle>Login</CardTitle>
						<TextField>
							{/* Usuário */}
							<LabelField for="usuario">Usuário</LabelField>
							<Field placeholder="Email" type="email" ref={emailRef} />
							{/* Senha */}
							<LabelField for="senha">Senha</LabelField>
							<Field placeholder="Senha" type="password" ref={psdRef} />
						</TextField>
						<LoginButton type="submit">Entrar</LoginButton>
						<ForgotPassword onClick={forgotPasswordHandler}>
							Esqueceu a senha?
						</ForgotPassword>
					</CardLogin>
				</RightLogin>
			</SubmitLogin>
		</Container>
	);
};

export default Signin;

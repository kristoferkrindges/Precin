import React, { useState, useEffect } from "react";
import { Container, ImgIcon, Image, Logo, Pharase, InfoUser } from "./style";

export default function Post(props) {
	const [text, setText] = useState("");
	const handleChange = (event) => setText(event.target.value);

	const handleSubmit = (event) => {};

	return (
		// newPost
		<Container>
			<InfoUser>
				<Image>
					<Logo src={props.img_url} />
				</Image>
				<Pharase>
					<strong>{props.name}</strong>
				</Pharase>
			</InfoUser>
			{/* Form de publicação */}
			<form className="formPost" addFeed={props.addFeed}>
				<textarea
					name="textarea"
					placeholder="Poste seu comentário"
					value={text}
					onChange={handleChange}
				></textarea>
				<div className="iconsAndButton">
					<div className="icons">
						<button className="btnFileForme">
							<ImgIcon></ImgIcon>
						</button>
					</div>
					<button className="btnSubmitForm">Publicar</button>
				</div>
			</form>
		</Container>
	);
}

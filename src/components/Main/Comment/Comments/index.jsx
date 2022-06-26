import React, { useState } from "react";
import {
	Li,
	IconHeart,
	IconChat,
	IconSocial,
	Interaction,
	ButtonPrecin,
	ButtonPrecao,
	ButtonComment,
	Image,
	Logo,
	Pharase,
	InfoUser,
} from "./style";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";

export default function Comments(props) {
	let controllerPrecin = props.precin;
	let controllerPrecao = props.precao;
	const [precin, setPrecin] = useState(controllerPrecin); //Aqui pega o context precin
	const [precao, setPrecao] = useState(controllerPrecao); //Aqui pega o context precao
	console.log(precin);

	const [precinButton, setPrecinButton] = useState(false);
	const [precaoButton, setPrecaoButton] = useState(false);

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
	return (
		<Li>
			<InfoUser>
				<Image>
					<Logo src={props.img_url} />
				</Image>
				<Pharase>
					<strong>{props.name}</strong>
				</Pharase>
			</InfoUser>
			{/* <div className="infoUserPost">
				<div className="imgUserPost"></div>
				<div className="nameAndHour">
					<strong>{props.name}</strong>
					<p>{props.time}</p>
				</div>
			</div> */}
			<p>{props.public}</p>
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
				{/* <ButtonComment type="button">
					<BiCommentDetail></BiCommentDetail>Comentários {props.comments}
				</ButtonComment> */}
			</Interaction>
		</Li>
	);
}

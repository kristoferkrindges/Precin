import React from "react";
import { Li, IconHeart, IconChat, IconSocial } from "./style";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BiCommentDetail } from "react-icons/bi";
import postImage from "../../../../imagens/tomate2.jpg";
import userImage from "../../../../imagens/dog_sorridente.jpeg";

export default function Feeds(props) {
	return (
		<Li key={props.index}>
			<div className="infoUserPost">
				<img className="imgUserPost" src={userImage}></img>
				<div className="nameAndHour">
					<strong>{props.name}</strong>
					<p>{props.time}</p>
				</div>
			</div>
			<div className="infoPost">
				<img className="postImage" src={postImage}></img>
				<p>{props.public}</p>
			</div>
			<div className="priceLocationPost">
				<div class="price">
					<h1>R$ 5,00 Kg</h1>
				</div>
				<p clas>
					Nacional
					<br />
					Rua Vicente da Fontoura, 356
					<GoLocation className="locationIcon" />
				</p>
			</div>
			<div className="actionBtnPost">
				<button type="button" class="filesPost like">
					<AiFillLike /> Precin
					{/* <IconHeart></IconHeart> */}
				</button>
				<button type="button" class="filesPost comment">
					<AiFillDislike /> Preção
					{/* <IconChat></IconChat> */}
				</button>
				{/* <button type="button" class="filesPost share">
					<IconSocial></IconSocial>Compartilhar
				</button> */}
			</div>
			<div>
				<BiCommentDetail className="comments" />
				<p>18</p>
			</div>
		</Li>
	);
}

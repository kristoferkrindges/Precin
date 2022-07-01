import React, { useState, useEffect } from "react";
import { User } from "../../../Main/Feed/Feeds/style";
// import AvatarImage from "../../../../assets/logo.jpeg";
import {
	Container,
	Card,
	Image,
	NameProfession,
	Name,
	Old,
	FacebookIcon,
	TwitterIcon,
	WhatsappIcon,
	Icons,
	IoPencil,
} from "./style";

function Profile(props) {
	return (
		<Container>
			<Card>
				<Image>
					<img className="logo" src={props.img} />
				</Image>
				<Icons>
					<FacebookIcon></FacebookIcon>
					<TwitterIcon></TwitterIcon>
					<WhatsappIcon></WhatsappIcon>
				</Icons>
				<NameProfession>
					<Name>{props.name}</Name>
					<Old>{props.email}</Old>
					<Old>Membro desde: {props.time}</Old>
					<IoPencil></IoPencil>
				</NameProfession>
			</Card>
		</Container>
	);
}

export default Profile;

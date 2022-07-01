import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
					<img className="logo" src={""} />
				</Image>
				<Icons>
					<FacebookIcon></FacebookIcon>
					<TwitterIcon></TwitterIcon>
					<WhatsappIcon></WhatsappIcon>
				</Icons>
				<NameProfession>
					<Name>{props.name}</Name>
					<Old>{props.email}</Old>
					<Old>Membro desde: {""}</Old>
					<Link to="/editprofile">
						<IoPencil></IoPencil>
					</Link>
				</NameProfession>
			</Card>
		</Container>
	);
}

export default Profile;

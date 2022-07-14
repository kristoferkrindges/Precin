import React from "react";
import { Container, Logo, IoClose, CardContent, Image, Icons } from "./style";

function ModalImage(props) {
	return (
		<Container>
			<CardContent>
				<Image>
					<Logo src={props.ground} />
				</Image>
				<Icons>
					<IoClose onClick={() => props.closeModal(false)} />
				</Icons>
				{/* <Logo>
				<img src={props.ground} />
			</Logo> */}
			</CardContent>
		</Container>
	);
}

export default ModalImage;

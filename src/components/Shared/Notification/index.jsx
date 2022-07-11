import React from "react";
import {
	Container,
	Content,
	IoClose,
	IoCart,
	Message,
	Progress,
} from "./style";

export default function Notification() {
	return (
		<Container>
			<Content>
				<IoCart></IoCart>
				<Message>
					<span class="text text-1">Sucesso</span>
					<span class="text text-2">Adicionado a sua lista!</span>
				</Message>
			</Content>
			<IoClose></IoClose>
			<Progress></Progress>
		</Container>
	);
}

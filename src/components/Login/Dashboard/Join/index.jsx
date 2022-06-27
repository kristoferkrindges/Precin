import React from "react";
import { Link } from "react-router-dom";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import {
	JoinChannel,
	CardContent,
	Slack,
	SlackLogo,
	SlackText,
	SlackHead,
	SlackFoot,
	SlackJoin,
} from "./style";
export default function Join() {
	return (
		<JoinChannel>
			{/* flex={true} */}
			<CardContent>
				<Slack>
					<SlackLogo>
						<IoExtensionPuzzleOutline />
					</SlackLogo>
					<SlackText>
						<SlackHead>Faça uma publicação</SlackHead>
						<SlackFoot>#TáNoPrecin</SlackFoot>
					</SlackText>
				</Slack>
				<Link to="/publication">
					<SlackJoin>Publicar</SlackJoin>
				</Link>
			</CardContent>
		</JoinChannel>
	);
}

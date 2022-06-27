import React from "react";
import { Container } from "./style";
import Post from "../Main/Post";
import Feed from "../Main/Feed";

export default function Main() {
	return (
		<Container>
			<Feed filter="timestamp" order="desc" comments={false} />
		</Container>
	);
}

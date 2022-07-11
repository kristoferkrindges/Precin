import React, { useState, useEffect } from "react";
import { Container, ImgIcon, SLayout } from "./style";
import Menu from "../Shared/Menu";
import Sidebar from "../Sidebar";
import Post from "./Post";

export default function PostPublic() {
	return (
		<Container>
			<Menu type="logado" search="não" />
			<SLayout>
				<Sidebar name="Kristofer Krindges" />
				<Post></Post>
			</SLayout>
		</Container>
	);
}

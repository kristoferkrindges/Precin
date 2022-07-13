import React from "react";
import { Layout, Controller, Direction } from "./styles";
import Menu from "../Shared/Menu";
import Sidebar from "../Sidebar";
import Suggestion from "../Suggestion";
import Feed from "../Feed";
import BottomBar from "../BottomBar";

export default function Home() {
	return (
		<>
			<Menu type="logado" search="home" />
			<Sidebar name="Desconhecido"></Sidebar>
			<Layout>
				<Controller>
					<Direction>
						<Feed filter="timestamp" order="desc" comments={false} />
						<Suggestion></Suggestion>
					</Direction>
				</Controller>
			</Layout>
			{/* <BottomBar></BottomBar> */}
		</>
		// <Container>
		//     <Menu type="logado" search="home"/>
		//     <Layout></Layout>
		//     {/* <BottomBar></BottomBar> */}
		// </Container>
	);
}

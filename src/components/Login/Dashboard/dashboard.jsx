import React from "react";
import { useUserContext } from "../../../context/userContext";
import {
	Container,
	Layout,
	Controller,
	LineOne,
	LineTwo,
	LProfile,
	Update,
} from "./style";
import UploadImage from "../../Shared/Upload";
import Sidebar from "../../Sidebar";

const Dashboard = () => {
	const { user, logoutUser } = useUserContext();
	return (
		// <Layout>
		// 	<Sidebar></Sidebar>
		// 	<Controller>
		// 		<LineOne>
		// 			<LProfile>
		// 				<h1>Oi</h1>
		// 			</LProfile>
		// 			<Update>
		// 				<h1>Oi</h1>
		// 			</Update>
		// 		</LineOne>
		// 		<LineTwo></LineTwo>
		// 	</Controller>
		// </Layout>
		<Container>
			<div className="dashboard">
				<h1>Perfil</h1>
				<UploadImage />
				<h2>{user.displayName}</h2>
				<h2>{user.email}</h2>
				<h2>Membro desde: 01/03/2022</h2>
				<button className="logout" onClick={logoutUser}>
					Sair
				</button>
			</div>
		</Container>
	);
};

export default Dashboard;

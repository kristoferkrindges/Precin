import React from "react";
import { useUserContext } from "../../../context/userContext";
import { Container } from "./style";
import ProfileImage from "../ProfileImage";
import {
	Container,
	Layout,
	ControllerUp,
	ControllerDown,
	LineLeft,
	LineRight,
	LineLeftDown,
	LineRightDown,
	LinerLeft,
	LinerRight,
	LProfile,
	Update,
} from "./style";
import UploadImage from "../../Shared/Upload";
import Sidebar from "../../Sidebar";
import Profile from "./Profile";
import Info from "./Info";
import Join from "./Join";
import Alert from "./Alert";
import Slice from "./Slice";

const Dashboard = () => {
	const { user, logoutUser } = useUserContext();
	// logoutUser={logoutUser}
	return (

// 		<Container>
// 			<div className="dashboard">
// 				<h1>Perfil</h1>
// 				{user && <ProfileImage />}
// 				<h2>{user.displayName}</h2>
// 				<h2>{user.email}</h2>
// 				<h2>Membro desde: {user.metadata.creationTime}</h2>
// 				<button className="logout" onClick={logoutUser}>
// 					Sair
// 				</button>
// 			</div>
// 		</Container>
		<Layout>
			<Sidebar name={user.displayName}></Sidebar>
			<ControllerUp>
				<LineLeft>
					<Profile name={user.displayName} email={user.email}></Profile>
				</LineLeft>
				<LineRight>
					<Info digit1={4} info1={"Precin"} digit2={2} info2={"Preção"}></Info>
				</LineRight>
				<LinerLeft>
					<Join></Join>
				</LinerLeft>
				{/* <LinerLeft>
					<h1>LinerRight</h1>
				</LinerLeft> */}
			</ControllerUp>
			<ControllerDown>
				<LineLeftDown>
					<Alert></Alert>
				</LineLeftDown>
				<LineRightDown>
					<Slice></Slice>
				</LineRightDown>
				{/* <LinerDown>
					<h1>Liner</h1>
				</LinerDown> */}
			</ControllerDown>
		</Layout>
		// <Container>
		// 	<div className="dashboard">
		// 		<h1>Perfil</h1>
		// 		<UploadImage />
		// 		<h2>{user.displayName}</h2>
		// 		<h2>{user.email}</h2>
		// 		<h2>Membro desde: 01/03/2022</h2>
		// 		<button className="logout" onClick={logoutUser}>
		// 			Sair
		// 		</button>
		// 	</div>
		// </Container>
	);
};

export default Dashboard;

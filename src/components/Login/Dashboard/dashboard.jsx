import React from "react";
import { useUserContext } from "../../../context/userContext";
import {
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
		<Layout>
			<Sidebar name="Desconhecido" />
			<ControllerUp>
				<LineLeft>
					{user && <Profile name={user.displayName} email={user.email} />}
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
	);
};

export default Dashboard;

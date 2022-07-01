import React from "react";
import { useUserContext } from "../../../context/userContext";
import { Layout, Content } from "./style";
import Sidebar from "../../Sidebar";
import Navbar from "./Navbar";
import Options from "./Options";
import Join from "./Join";

const Dash = () => {
	const { user, logoutUser, photoURL } = useUserContext();
	// logoutUser={logoutUser}
	return (
		<Layout>
			<Sidebar name="Desconhecido" total={true} />
			<Content>
				<Navbar />
				<Options />
				{/* <Join></Join> */}
			</Content>
		</Layout>
	);
};

export default Dash;

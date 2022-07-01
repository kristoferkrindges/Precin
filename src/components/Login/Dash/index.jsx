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
				<Navbar img={photoURL} />
				<Options
					img={photoURL}
					name={user.displayName}
					email={user.email}
					time={user.metadata.creationTime}
				/>
				{/* <Join></Join> */}
			</Content>
		</Layout>
	);
};

export default Dash;

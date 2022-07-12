import React, { useState, useEffect } from "react";
import { useUserContext } from "../../context/userContext";
import { Layout, Content, Option, Title } from "./style";
import Sidebar from "../Sidebar";
import Navbar from "../Login/Dash/Navbar";
import EditProfile from "../Login/Dash/EditProfile";

const Edit = () => {
	const { photoURL } = useUserContext();
	return (
		<Layout>
			<Sidebar name="Desconhecido" total={true} />
			<Content>
				<Navbar img={photoURL} />
				<Option>
					{/* <Title>
						Mude seus <span>Dados</span>
					</Title> */}
					<EditProfile></EditProfile>
				</Option>
			</Content>
		</Layout>
	);
};

export default Edit;

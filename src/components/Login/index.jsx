import React from "react";
import Menu from "../Shared/Menu";
import Footer from "../Shared/Footer";
import NoFooter from "../Shared/NoFooter";
import { useUserContext } from "../../context/userContext";
import Auth from "./Auth/auth";
import Dashboard from "./Dashboard/dashboard";
import Dash from "./Dash";
import { Container } from "./style";

function Login() {
	const { loading, error, user } = useUserContext();
	return (
		<Container>
			<div className="container">
				{/* <Menu type="não" search="não" /> */}
				{error && <p className="error"> {error}</p>}
				{loading ? (
					<h2 className="carregando">Carregando...</h2>
				) : (
					// <> {user ? <Dashboard /> : <Auth />} </>
					<> {user ? <Dash /> : <Auth />} </>
				)}
				{user ? <NoFooter /> : <Footer />}
				{/* <Footer></Footer> */}
			</div>
		</Container>
	);
}

export default Login;

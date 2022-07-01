import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import HomeScreen from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import ErrorPage from "./Pages/ErrorPage";
import SearchResultScreen from "./Pages/SearchResult";
import Post from "./Pages/Post";
import { isAuthenticated } from "./auth";
import { UserContextProvider } from "./context/userContext";
import { PrivateRouter } from "./context/PrivateRouter";
import EditProfileScreen from "./Pages/EditProfile";

// const PrivateRoute = ({ component: Component, ...rest }) => (
// 	<Route
// 		{...rest}
// 		render={(props) =>
// 			isAuthenticated() ? (
// 				<Component {...props} />
// 			) : (
// 				<Navigate to={{ pathname: "/", state: { from: props.location } }} />
// 			)
// 		}
// 	/>
// );

export default function Routess() {
	return (
		<UserContextProvider>
			<Router>
				<Routes>
					<Route path="/" element={<HomeScreen />} />
					<Route path="/login" element={<Login />} />
					<Route path="/about" element={<About />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/editprofile" element={<PrivateRouter />}>
						<Route path="/editprofile" element={<EditProfileScreen />} />
					</Route>
					<Route path="/profile/:username" element={<Profile />} />
					{/* <Route path="/publication" element={<Post />} /> */}
					<Route path="/publication" element={<PrivateRouter />}>
						<Route path="/publication" element={<Post />}></Route>
					</Route>
					<Route path="/search_result" element={<SearchResultScreen />} />
					<Route
						path="/search_result/:product"
						element={<SearchResultScreen />}
					/>
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</Router>
		</UserContextProvider>
	);
}

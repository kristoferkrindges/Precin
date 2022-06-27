import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "./userContext";

// export const PrivateRouter = (props) => {
// 	const { component: RouteComponent, ...other } = props;
// 	const { user } = useUserContext();

// 	return (
// 		<Route
// 			{...other}
// 			render={(routeProps) =>
// 				!!user ? <RouteComponent {...routeProps} /> : <Navigate to="/login" />
// 			}
// 		/>
// 	);
// };

export const PrivateRouter = () => {
	const { user } = useUserContext();

	return user ? <Outlet /> : <Navigate to="/login" />;
};

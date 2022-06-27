import React, { useContext, useRef, useState, useEffect } from "react";
import { useUserContext } from "./context/userContext";
// export default function isAuthenticated() {
// 	const { user } = useUserContext();
// 	if (user == true) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

export const isAuthenticated = () => true;

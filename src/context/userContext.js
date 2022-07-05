import { createContext, useState, useEffect } from "react";
import {
	createUserWithEmailAndPassword,
	updateProfile,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import { storage } from "../firebase/index";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [photo, setPhoto] = useState(null);
	const [photoURL, setPhotoURL] = useState(
		"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
	);
	const [profilePreview, setProfilePreview] = useState();
	const [loading, setLoading] = useState();
	const [error, setError] = useState("");

	async function upload(file, user, setLoading) {
		if (photo == null) return;
		const fileRef = ref(storage, "images/users/" + user.uid);

		setLoading(true);

		const snapshot = await uploadBytes(fileRef, file);

		const photoURL = await getDownloadURL(fileRef);

		updateProfile(user, {
			photoURL,
		});

		setLoading(false);
		window.location.reload();
	}

	function handleChange(e) {
		if (e.target.files[0]) {
			setPhoto(e.target.files[0]);
			handlePreview();
		}
	}

	function handlePreview(e) {
		const file = e.target.files[0];
		if (file && file.type.substr(0, 5) === "image") {
			setPhoto(file);
			console.log(file);
		} else {
			setPhoto(null);
		}
	}

	function handleClick() {
		upload(photo, user, setLoading);
	}

	useEffect(() => {
		if (user?.photoURL) {
			setPhotoURL(user.photoURL);
			setProfilePreview();
		}
	}, [user]);

	useEffect(() => {
		if (photo) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setProfilePreview(reader.result);
			};
			reader.readAsDataURL(photo);
		} else {
			setProfilePreview(null);
		}
	}, [photo]);

	useEffect(() => {
		setLoading(true);
		const unsubscribe = onAuthStateChanged(auth, (res) => {
			res ? setUser(res) : setUser(null);
			setError("");
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	const registerUser = (email, name, password) => {
		///
		setLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then(() => {
				return updateProfile(auth.currentUser, {
					displayName: name,
				});
			})
			.then((res) => console.log(res))
			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
	};

	const signInUser = (email, password) => {
		setLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((res) => console.log(res, auth.currentUser.uid))
			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
	};

	async function handleRefreshClick() {
		caches.keys().then((keyList) => {
			return Promise.all(
				keyList.map((key) => {
					return caches.delete(key);
				})
			);
		});
		setTimeout(() => {
			window.location.reload();
		}, 5);
	}

	const logoutUser = () => {
		//
		setTimeout(() => {
			signOut(auth);
		}, 3);
		handleRefreshClick();
	};

	const forgotPassword = (email) => {
		//
		return sendPasswordResetEmail(auth, email);
	};

	const contextValue = {
		user,
		photo,
		photoURL,
		profilePreview,
		loading,
		error,
		registerUser,
		signInUser,
		logoutUser,
		forgotPassword,
		handleChange,
		handleClick,
	};
	return (
		<UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
	);
};

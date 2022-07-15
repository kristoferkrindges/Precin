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

	//Registering the user inside Firebase Authentication
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

	//Logging the user into the app using authentication
	const signInUser = (email, password) => {
		setLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((res) => console.log(res, auth.currentUser.uid))
			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
	};
	// Problem is null
	useEffect(() => {
		setLoading(true);
		const unsubscribe = onAuthStateChanged(auth, (res) => {
			res ? setUser(res) : setUser(null);
			setError("");
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	//Recovering the user's password
	const forgotPassword = (email) => {
		//
		return sendPasswordResetEmail(auth, email);
	};

	//Logging out the user from application
	const logoutUser = () => {
		//
		setTimeout(() => {
			signOut(auth);
		}, 3);
		handleRefreshClick();
	};

	//Refreshing the page without cache
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

	// Preview image and handle the file
	function handlePreview(e) {
		const file = e.target.files[0];
		if (file && file.type.substr(0, 5) === "image") {
			setPhoto(e.target.files[0]);
			console.log(file);
		} else {
			setPhoto(null);
		}
	}

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

	//Upload the image and get the URL
	async function upload(file, user, setLoading) {
		if (photo == null) return;
		const fileRef = ref(storage, "images/users/" + user.uid);

		setLoading(true);

		const snapshot = await uploadBytes(fileRef, file);

		const photoURL = await getDownloadURL(fileRef);

		updateProfile(user, {
			photoURL,
		});
		console.log(photoURL);

		setLoading(false);
		setTimeout(() => {
			window.location.reload();
		}, 100);
	}

	useEffect(() => {
		if (user?.photoURL) {
			setPhotoURL(user.photoURL);
		}
	}, [user]);

	//Upload event to trigger the async function of profile image
	function handleClick() {
		upload(photo, user, setLoading);
	}

	const contextValue = {
		user,
		photo,
		photoURL,
		handlePreview,
		profilePreview,
		loading,
		error,
		registerUser,
		signInUser,
		logoutUser,
		forgotPassword,
		handleClick,
	};
	return (
		<UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
	);
};

import { createContext, useContext, useState, useEffect } from "react";
import { storage } from "../firebase/index";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { db } from "../firebase/index";

const PostContext = createContext({});

export const usePostContext = () => useContext(PostContext);

export const PostContextProvider = ({ children }) => {
	const [image, setImage] = useState();
	const [preview, setPreview] = useState();
	const [productURL, setProductURL] = useState(
		"https://camo.githubusercontent.com/b7b7dca15c743879821e7cfc14e8034ecee3588e221de0a6f436423e304d95f5/68747470733a2f2f7a7562652e696f2f66696c65732f706f722d756d612d626f612d63617573612f33363664616462316461323032353338616531333332396261333464393030362d696d6167652e706e67"
	);
	const [loadingImage, setLoadingImage] = useState();

	function handleImage(e) {
		const productImage = e.target.files[0];
		if (productImage && productImage.type.substr(0, 5) === "image") {
			setImage(e.target.files[0]);
			console.log(productImage);
		} else {
			setImage(null);
		}
	}

	useEffect(() => {
		if (image) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreview(reader.result);
			};
			reader.readAsDataURL(image);
		} else {
			setPreview(null);
		}
	}, [image]);

	function deleteImage(e) {
		setImage(null);
	}

	async function uploadProductImage(file, setLoadingImage) {
		if (image === null) return;
		const productRef = ref(storage, `images/products/${file.name + v4()}`);

		setLoadingImage(true);

		const snapshot = await uploadBytes(productRef, file);

		const productURL = await getDownloadURL(productRef);

		setProductURL(productURL);
		console.log(productURL);

		setLoadingImage(false);
	}

	function handleUpload() {
		uploadProductImage(image, setLoadingImage);
	}

	const contextValue = {
		preview,
		productURL,
		image,
		loadingImage,
		handleImage,
		deleteImage,
		handleUpload,
	};
	return (
		<PostContext.Provider value={contextValue}>{children}</PostContext.Provider>
	);
};

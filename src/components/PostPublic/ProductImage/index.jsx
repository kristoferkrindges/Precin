// import React, { useEffect, useState } from "react";
// import {
// 	Container,
// 	SubmitFile,
// 	Image,
// 	InputImage,
// 	LabelImage,
// 	SendImage,
// 	UploadIcon,
// 	BarProgress,
// 	IoImage2,
// } from "./style";
// import { storage } from "../../../firebase/index";
// import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
// import { v4 } from "uuid";

// function ProductImage() {
// 	const [productImg, setProductImg] = useState([]);
// 	const [progress, setProgress] = useState(0);

// 	const formHandler = (e) => {
// 		e.preventDefault();
// 		const file = e.target[0].files[0];
// 		console.log(file);
// 	};

// 	const uploadFile = (file) => {
// 		if (!file) return;
// 		const storageRef = ref(storage, `images/products/${file.name + v4()}`);
// 		const uploadTask = uploadBytesResumable(storageRef, file);

// 		uploadTask.on(
// 			"state_changed",
// 			(snapshot) => {
// 				const prog = Math.round(
// 					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
// 				);

// 				setProgress(prog);
// 			},
// 			(err) => console.log(err),
// 			() => {
// 				getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url));
// 			}
// 		);
// 	};

import React, { useState, useEffect } from "react";
import {
	Container,
	Image,
	DeleteImage,
	DeleteIcon,
	InputImage,
	LabelImage,
	SendImage,
	UploadIcon,
	BarProgress,
	IoImage2,
} from "./style";
import { storage } from "../../../firebase/index";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { usePostContext } from "../../../context/postContext";

function ProductImage() {
	const { preview, handleImage, deleteImage } = usePostContext();
	// const [imageUpload, setImageUpload] = useState(null);
	// const [imageList, setImageList] = useState([]);
	// const [imageURL, setImageURL] = useState();

	// const imageListRef = ref(storage, "images/products");

	// const uploadImage = () => {
	// 	if (imageUpload == null) return;

	// 	const imageRef = ref(storage, `images/products/${imageUpload.name + v4()}`);

	// 	uploadBytes(imageRef, imageUpload).then((snaphsot) => {
	// 		getDownloadURL(snaphsot.ref).then((url) => {
	// 			setImageList((prev) => [...prev, url]);
	// 			console.log(imageURL);
	// 		});
	// 	});
	// };

	// useEffect(() => {
	// 	listAll(imageListRef).then((response) => {
	// 		response.items.forEach((item) => {
	// 			getDownloadURL(item).then((url) => {
	// 				setImageList((prev) => [...prev, url]);
	// 			});
	// 		});
	// 	});
	// }, []);

	return (
		<Container>
			{preview ? (
				<>
					<Image src={preview} />
					<DeleteImage>
						<DeleteIcon onClick={deleteImage} />
					</DeleteImage>
				</>
			) : (
				<LabelImage htmlFor="file">
					<IoImage2></IoImage2>
				</LabelImage>
			)}
			<InputImage
				type="file"
				id="file"
				acceppt="image/*, png, jpeg, jpg"
				// value={productImg}
				onChange={handleImage}
			/>

			{/* <SendImage onClick={uploadImage}>
				Enviar Imagem
				<UploadIcon />
			</SendImage> */}
			{/* <BarProgress>Enviado {progress} %</BarProgress> */}
		</Container>
	);
}

export default ProductImage;

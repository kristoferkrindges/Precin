import React, { useState, useEffect } from "react";
import { Container, Image, File, SendImage, UploadIcon } from "./style";
import { storage } from "../../../firebase/index";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

function UploadImage() {
	const [imageUpload, setImageUpload] = useState(null);
	const [imageList, setImageList] = useState([]);

	const imageListRef = ref(storage, "images/users");

	const uploadImage = () => {
		if (imageUpload == null) return;
		const imageRef = ref(storage, `images/users/${imageUpload.name + v4()}`);
		uploadBytes(imageRef, imageUpload).then((snaphsot) => {
			getDownloadURL(snaphsot.ref).then((url) => {
				setImageList((prev) => [...prev, url]);
				alert("Imagem enviada!");
			});
		});
	};

	useEffect(() => {
		listAll(imageListRef).then((response) => {
			response.items.forEach((item) => {
				getDownloadURL(item).then((url) => {
					setImageList((prev) => [...prev, url]);
				});
			});
		});
	}, []);

	return (
		<Container>
			{imageList.map((url) => {
				return <Image src={url} />;
			})}
			<File
				type="file"
				onChange={(event) => {
					setImageUpload(event.target.files[0]);
				}}
			/>
			<SendImage onClick={uploadImage}>
				Enviar Imagem
				<UploadIcon />
			</SendImage>
		</Container>
	);
}

export default UploadImage;

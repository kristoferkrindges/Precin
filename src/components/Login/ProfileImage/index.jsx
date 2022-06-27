// import React, { useState, useEffect } from "react";
// import { Container, Image, InputFile, SendImage, UploadIcon } from "./style";
// import { storage } from "../../../firebase/index";
// import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
// import { v4 } from "uuid";

import React, { useState, useEffect } from "react";
import { Container, Image, InputFile, SendImage, UploadIcon } from "./style";
import { useUserContext } from "../../../context/userContext";
import { storage } from "../../../firebase/index";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { updateProfile } from "firebase/auth";

function ProfileImage() {
	const { user } = useUserContext();
	const [photo, setPhoto] = useState(null);
	const [loading, setLoading] = useState(false);
	const [photoURL, setPhotoURL] = useState(
		"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
	);

	async function upload(file, user, setLoading) {
		if (photo == null) return;
		const fileRef = ref(storage, "images/users/" + user.uid + ".png");

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
		}
	}

	function handleClick() {
		upload(photo, user, setLoading);
	}

	useEffect(() => {
		if (user?.photoURL) {
			setPhotoURL(user.photoURL);
			console.log(user.photoURL);
		}
	}, [user]);

	// 	const [imageUpload, setImageUpload] = useState(null);
	// 	const [imageList, setImageList] = useState([]);

	// 	const imageListRef = ref(storage, "images/users");

	// 	const uploadImage = () => {
	// 		if (imageUpload == null) return;
	// 		const imageRef = ref(storage, `images/users/${imageUpload.name + v4()}`);
	// 		uploadBytes(imageRef, imageUpload).then((snaphsot) => {
	// 			getDownloadURL(snaphsot.ref).then((url) => {
	// 				setImageList((prev) => [...prev, url]);
	// 				alert("Imagem enviada!");
	// 			});
	// 		});
	// 	};

	// 	useEffect(() => {
	// 		listAll(imageListRef).then((response) => {
	// 			response.items.forEach((item) => {
	// 				getDownloadURL(item).then((url) => {
	// 					setImageList((prev) => [...prev, url]);
	// 				});
	// 			});
	// 		});
	// 	}, []);

	return (
		<Container>
			<Image src={photoURL} />
			<InputFile type="file" onChange={handleChange} />
			<SendImage disabled={loading || !photo} onClick={handleClick}>
				Enviar Imagem
				<UploadIcon></UploadIcon>
			</SendImage>
		</Container>
		// <Container>
		// 	{imageList.map((url) => {
		// 		return <Image src={url} />;
		// 	})}
		// 	<InputFile
		// 		type="file"
		// 		onChange={(event) => {
		// 			setImageUpload(event.target.files[0]);
		// 		}}
		// 	/>
		// 	<SendImage onClick={uploadImage}>
		// 		Enviar Imagem
		// 		<UploadIcon />
		// 	</SendImage>
		// </Container>
	);
}

export default ProfileImage;

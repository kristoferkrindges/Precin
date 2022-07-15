import React, { useState, useEffect } from "react";
// import AvatarImage from "../../../../assets/logo.jpeg";
import {
	Container,
	Card,
	Image,
	NameProfession,
	Name,
	Old,
	FacebookIcon,
	TwitterIcon,
	WhatsappIcon,
	Icons,
	IoCamera,
	InputImage,
	LabelImage,
	SendImage,
	UploadIcon,
	IoPencil,
} from "./style";
import { useUserContext } from "../../../../context/userContext";
import { storage } from "../../../../firebase/index";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { updateProfile } from "firebase/auth";

function Profile(props) {
	const { user, logoutUser } = useUserContext();
	const [photo, setPhoto] = useState(null);
	const [loading, setLoading] = useState(false);
	const [photoURL, setPhotoURL] = useState(
		"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
	);

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
		}
	}

	function handleClick() {
		upload(photo, user, setLoading);
	}

	useEffect(() => {
		if (user?.photoURL) {
			setPhotoURL(user.photoURL);
			// console.log(user.photoURL);
		}
	}, [user]);

	return (
		<Container>
			<Card>
				<Image>
					<InputImage
						type="file"
						id="file"
						acceppt="image/*"
						onChange={handleChange}
					/>
					<LabelImage htmlFor="file">
						<IoCamera></IoCamera>
					</LabelImage>
					<img className="logo" src={photoURL} />
				</Image>

				<Icons>
					<FacebookIcon></FacebookIcon>
					<TwitterIcon></TwitterIcon>
					<WhatsappIcon></WhatsappIcon>
				</Icons>
				<NameProfession>
					<Name>{props.name}</Name>
					<Old>{props.email}</Old>
					<Old>Membro desde: {user.metadata.creationTime}</Old>
					<IoPencil></IoPencil>
					<SendImage disabled={loading || !photo} onClick={handleClick}>
						Enviar Imagem
						<UploadIcon></UploadIcon>
					</SendImage>
				</NameProfession>
			</Card>
		</Container>
	);
}

export default Profile;

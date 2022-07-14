import React, { useState, useEffect } from "react";
import { useUserContext } from "../../context/userContext";
import { Layout, Content, InfoData, Option, Title } from "./style";
import Sidebar from "../Sidebar";
import Navbar from "../Login/Dash/Navbar";
// import ListShop from "./ListShop/Index";
import { db } from "../../firebase/index";
import {
	collection,
	doc,
	getDocs,
	query,
	updateDoc,
	orderBy,
	deleteDoc,
} from "firebase/firestore";
import NewFeed from "./NewFeed";

const Public = () => {
	const { user, logoutUser, photoURL } = useUserContext();

	const [posts, setPosts] = useState([]);
	const postsCollectionRef = query(
		collection(db, "posts"),
		orderBy("product", "desc")
	);
	useEffect(() => {
		const getPosts = async () => {
			const data = await getDocs(postsCollectionRef);
			setPosts(
				data.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}))
			);
		};
		getPosts();
	}, []);

	const [users, setUsers] = useState([]);
	const userCollectionRef = query(
		collection(db, "usersP"),
		orderBy("name", "desc")
	);

	useEffect(() => {
		const getUsers = async () => {
			const data = await getDocs(userCollectionRef);
			setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};

		getUsers();
	}, []);

	function HandlerButtonShop(id) {
		deletePublic(id);
		const r = posts.filter((item) => item.id !== id);
		setPosts(r);
	}
	const deletePublic = async (id) => {
		const postDoc = doc(db, "posts", id);
		await deleteDoc(postDoc);
		console.log("Excluido!");
	};
	return (
		<Layout>
			<Sidebar name="Desconhecido" total={true} />
			<Content>
				<Navbar img={photoURL} />
				<Option>
					<Title>
						Suas <span>Publicações</span>
					</Title>
					<InfoData>
						{posts.length > 0 &&
							posts
								.filter((item) => item.user_email == user.email)
								.map((value, key) => (
									<NewFeed
										key={key}
										id={value.id}
										name={
											users.length > 0 &&
											users
												.filter((item) => item.email == value.user_email)
												.map((value, key) => value.name)
										}
										time={"2h"}
										img_user={
											users.length > 0 &&
											users
												.filter((item) => item.email == value.user_email)
												.map((value, key) => value.img_url)
										}
										img_product={value.product_image}
										product={value.product}
										price={value.price}
										market={value.market}
										address={value.address}
										onClick={HandlerButtonShop}
									/>
								))}
					</InfoData>
				</Option>
			</Content>
		</Layout>
	);
};

export default Public;

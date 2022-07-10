import React, { useState, useEffect } from "react";
import { useUserContext } from "../../context/userContext";
import { Layout, Content, InfoData, Option, Title } from "./style";
import Sidebar from "../Sidebar";
import Navbar from "../Login/Dash/Navbar";
import ListShop from "./ListShop/Index";
import Tomate from "../../imagens/tomate2.jpg";
import { db } from "../../firebase/index";
import {
	collection,
	doc,
	getDocs,
	query,
	updateDoc,
	setDoc,
	orderBy,
	arrayUnion,
	arrayRemove,
	getDoc,
	where,
} from "firebase/firestore";

const List = () => {
	const { user, logoutUser, photoURL } = useUserContext();

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

	const arrayy =
		users.length > 0 &&
		users
			.filter((item) => item.email == user.email)
			.map((value, key) => value.listShoop);

	const close =
		users.length > 0 &&
		users
			.filter((item) => item.email == user.email)
			.map((value, key) => value.idP);

	function HandlerButtonShop(id) {
		updateList(close.toString(), id);
		const r = posts.filter((item) => item.id !== id);
		setPosts(r);
	}
	const updateList = async (id, shop) => {
		const postDoc = doc(db, "usersP", id);
		const newFields = { listShoop: arrayRemove(shop) };
		await updateDoc(postDoc, newFields);
		console.log("Ex list!");
	};
	return (
		<Layout>
			<Sidebar name="Desconhecido" total={true} />
			<Content>
				<Navbar img={photoURL} />
				{/* <Options
					img={photoURL}
					name={user.displayName}
					email={user.email}
					time={user.metadata.creationTime}
				/> */}
				<Option>
					<Title>
						Sua <span>Lista</span>
					</Title>
					<InfoData>
						{posts.length > 0 &&
							posts
								.filter((item) => true == arrayy[0].includes(item.id))
								.map((value, key) => (
									<ListShop
										key={key}
										id={value.id}
										img={value.product_image}
										name={value.product}
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

export default List;

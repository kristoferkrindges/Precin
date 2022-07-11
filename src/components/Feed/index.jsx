import React, { useContext, useState, useEffect } from "react";
import { Ul, Ulex } from "./style";
import { db } from "../../firebase/index";
import {
	collection,
	getDocs,
	query,
	orderBy,
	doc,
	getDoc,
	where,
} from "firebase/firestore";
import Post from "../Main/Post";
import { useUserContext } from "../../context/userContext";
import Feeds from "./Feeds";

export default function Feed(props) {
	const { user } = useUserContext();
	const [posts, setPosts] = useState([]);
	const postsCollectionRef = query(
		collection(db, "posts"),
		orderBy(props.filter, props.order)
	);
	let email;
	if (user == undefined) {
		email = "z";
	} else {
		email = user.email;
	}

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

	//Reading the usersP collection from Firestore
	const [users, setUsers] = useState([]);
	const userCollectionRef = query(
		collection(db, "usersP"),
		orderBy("name", props.order)
	);

	useEffect(() => {
		const getUsers = async () => {
			const data = await getDocs(userCollectionRef);
			setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};

		getUsers();
	}, []);
	let x;

	let result;

	if (props.product != undefined) {
		result = props.product;
	} else {
		result = "";
	}
	if (props.comments == true) {
		return (
			<Ulex>
				{posts.length > 0 &&
					posts
						.filter((value) => {
							if (result === "") {
								return value;
							} else if (
								value.product.toLowerCase().includes(result.toLowerCase())
							) {
								return value;
							}
						})
						.map((value, key) => (
							<>
								<Feeds
									className="join"
									key={key}
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
									idP={
										users.length > 0 &&
										users
											.filter((item) => item.email == email)
											.map((value, key) => value.idP)
									}
									userPrecin={
										users.length > 0 &&
										users
											.filter((item) => item.email == email)
											.map((value, key) => value.precin)
									}
									userPrecao={
										users.length > 0 &&
										users
											.filter((item) => item.email == email)
											.map((value, key) => value.precao)
									}
									listShop={
										users.length > 0 &&
										users
											.filter((item) => item.email == email)
											.map((value, key) => value.listShoop)
									}
									product={value.product}
									price={value.price}
									market={value.market}
									address={value.address}
									precin={value.precin}
									precao={value.precao}
									comments={value.comments}
									openComment={true}
									img_product={value.product_image}
									preview={true}
									id={value.id}
									email_product={value.user_email}
									// button={commentButton}
									// setButton={setCommentButton}
								/>
								{/* {props.comments && commentButton && (
									<Post name="Kristofer" img_url={props.img_url}></Post>
								)}
								{props.comments && commentButton && <Comment></Comment>} */}
							</>
							// if (users.includes(value.email) == true) {
							// 	x = users.indexOf(value.email);
							// } else {
							// }
						))}
			</Ulex>
		);
	} else {
		return (
			<Ul>
				{posts.length > 0 &&
					posts
						.filter((value) => {
							if (result === "") {
								return value;
							} else if (
								value.product.toLowerCase().includes(result.toLowerCase())
							) {
								return value;
							}
						})
						.map((value, key) => (
							<>
								<Feeds
									key={key}
									name={
										users.length > 0 &&
										users
											.filter((item) => item.email == value.user_email)
											.map((value, key) => value.name)
									}
									img_user={
										users.length > 0 &&
										users
											.filter((item) => item.email == value.user_email)
											.map((value, key) => value.img_url)
									}
									idP={
										users.length > 0 &&
										users
											.filter((item) => item.email == email)
											.map((value, key) => value.idP)
									}
									userPrecin={
										users.length > 0 &&
										users
											.filter((item) => item.email == email)
											.map((value, key) => value.precin)
									}
									userPrecao={
										users.length > 0 &&
										users
											.filter((item) => item.email == email)
											.map((value, key) => value.precao)
									}
									listShop={
										users.length > 0 &&
										users
											.filter((item) => item.email == email)
											.map((value, key) => value.listShoop)
									}
									time={"2h"}
									product={value.product}
									price={value.price}
									market={value.market}
									address={value.address}
									precin={value.precin}
									precao={value.precao}
									comments={value.comments}
									openComment={false}
									img_product={value.product_image}
									id={value.id}
								/>
								{props.comments && <Post name="Kristofer"></Post>}
								{/* {props.comments && <Comments></Comments>} */}
							</>
						))}
			</Ul>
		);
	}
}

import React, { useContext, useState, useEffect } from "react";
import { Ul, Ulex } from "./style";
import Feeds from "../Feed/Feeds";
import { db } from "../../../firebase/index";
import { SearchContext } from "../../../context/searchContext";
import { IoTabletLandscapeSharp } from "react-icons/io5";
import {
	collection,
	getDocs,
	query,
	orderBy,
	doc,
	getDoc,
	where,
} from "firebase/firestore";
import Post from "../Post";
import Comment from "../Comment";
import Tomate from "../../../imagens/tomate2.jpg";

// async function getFeeds() {
// 	let response = await fetch(`http://localhost:3000/api/feeds.json`);
// 	let data = await response.json();
// 	return data;
// }

// export default function Feed() {
// 	const [feeds, setFeed] = useState([]);
export default function Feed(props) {
	//Reading the posts collection from Firestore
	const [posts, setPosts] = useState([]);
	const postsCollectionRef = query(
		collection(db, "posts"),
		orderBy(props.filter, props.order)
		// orderBy(props.filter, "desc")
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
			// console.log(data);
		};

		getUsers();
	}, []);

	// const [commentButton, setCommentButton] = useState(false);
	//Loader
	const [removeLoading, setRemoveLoading] = useState(false);

	let x;

	let result;

	if (props.product != undefined) {
		result = props.product;
	} else {
		result = "";
	}

	// const { tokenProduct, setTokenProduct } = useContext(SearchContext);
	// console.log(tokenProduct);

	// useEffect(()=> {
	// 	setProductName(productName)
	// }, [productName])

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

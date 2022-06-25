import React, { useContext, useState, useEffect } from "react";
import { Ul } from "./style";
import Feeds from "../Feed/Feeds";
import { db } from "../../../firebase/index";
import { collection, getDocs } from "firebase/firestore";
import { SearchContext } from "../../../context/searchContext";
import { IoTabletLandscapeSharp } from "react-icons/io5";

async function getFeeds() {
	let response = await fetch(`http://localhost:3000/api/feeds.json`);
	let data = await response.json();
	return data;
}

export default function Feed() {
	const [feeds, setFeed] = useState([]);
	//Getting the posts collection from Firestore
	const [posts, setPosts] = useState([]);
	const postsCollectionRef = collection(db, "posts");

	const { tokenProduct, setTokenProduct } = useContext(SearchContext);
	console.log(tokenProduct);

	// useEffect(()=> {
	// 	setProductName(productName)
	// }, [productName])

	useEffect(() => {
		const getPosts = async () => {
			const data = await getDocs(postsCollectionRef);
			setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
			// console.log(data);
		};

		getPosts();
	}, []);
	//

	useEffect(() => {
		getFeeds().then((data) => {
			setFeed(data["feeds"]);
		});
	}, []);

	return (
		<Ul>
			{posts.length > 0 &&
				posts
					.filter((value) => {
						if (tokenProduct === "") {
							return value;
						} else if (
							value.product.toLowerCase().includes(tokenProduct.toLowerCase())
						) {
							return value;
						}
					})
					.map((value, key) => (
						<Feeds
							key={key}
							product={value.product}
							price={value.price}
							market={value.market}
							address={value.address}
							precin={value.precin}
							precao={value.precao}
							comments={value.comments}
						/>
					))}
			{/* {posts.map((posts, index) => (
				<Feeds
					key={index}
					product={posts.product}
					price={posts.price}
					market={posts.market}
					address={posts.address}
					precin={posts.precin}
					precao={posts.precao}
					comments={posts.comments}
				/>
			))} */}
		</Ul>
	);
}

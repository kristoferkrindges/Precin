import React, { useState, useEffect } from "react";
import { Ul } from "./style";
import Feeds from "../Feed/Feeds";
import { db } from "../../../firebase/index";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

async function getFeeds() {
	let response = await fetch(`http://localhost:3000/api/feeds.json`);
	let data = await response.json();
	return data;
}

export default function Feed() {
	const [feeds, setFeed] = useState([]);
	//Getting the posts collection from Firestore
	const [posts, setPosts] = useState([]);
	const postsCollectionRef = query(
		collection(db, "posts"),
		orderBy("date", "desc")
	);

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

	const addFeed = (new_feed) => {
		setFeed([...feeds, new_feed]);
	};

	return (
		<Ul>
			{posts.map((posts) => (
				<Feeds
					product={posts.product}
					price={posts.price}
					market={posts.market}
					address={posts.address}
					precin={posts.precin}
					precao={posts.precao}
					comments={posts.comments}
				/>
			))}
			{/* {feeds.map((feed, index) => (
				<Feeds
					key={index}
					name={feed.name}
					time={feed.time}
					public={feed.public}
					product={feed.product}
					price={feed.price}
					img_url={feed.img_url}
					img_product={feed.img_product}
				/>
			))} */}
		</Ul>
	);
}

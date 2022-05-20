import React, { useState, useEffect } from "react";
import { Ul } from "./style";
import Feeds from "../Feed/Feeds";

async function getFeeds() {
	let response = await fetch(`http://localhost:3000/api/feeds.json`);
	let data = await response.json();
	return data;
}

export default function Feed() {
	const [feeds, setFeed] = useState([]);

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
			{feeds.map((feed, index) => (
				<Feeds
					key={index}
					name={feed.name}
					time={feed.time}
					public={feed.public}
				/>
			))}
		</Ul>
	);
}

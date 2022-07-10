import React, { useState, useEffect } from "react";
import {
	Controller,
	Container,
	Context,
	TitleCont,
	Ul,
	TitleWrapper,
	Title,
} from "./style";
import Carrousel from "react-elastic-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import tomate from "../../../../imagens/dog_sorridente.jpeg";
import List from "../../../List/ListShop/Index";
import { db } from "../../../..//firebase/index";
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
import { useUserContext } from "../../../../context/userContext";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

function Slider(props) {
	const { user } = useUserContext();

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
	const breakPoints = [
		{ width: 500, itemsToShow: 1 },
		{ width: 768, itemsToShow: 2 },
		{ width: 1200, itemsToShow: 2 },
	];
	return (
		<Container>
			<Context>
				<Carrousel breakPoints={breakPoints}>
					{posts.length > 0 &&
						posts
							.filter((item) => true == arrayy[0].includes(item.id))
							.map((value, key) => (
								<List
									key={key}
									id={value.id}
									img={value.product_image}
									name={value.product}
									price={value.price}
									market={value.market}
									address={value.address}
									type={"slide"}
								/>
							))}
				</Carrousel>
			</Context>
		</Container>
	);
	// return (
	// 	<Controller>
	// 		<Container>
	// 			{/* <TitleWrapper>
	// 				<TitleCont>
	// 					<Title>Sua Lista</Title>
	// 				</TitleCont>
	// 			</TitleWrapper> */}
	// 			<Swiper
	// 				modules={[EffectCoverflow, Pagination, Navigation]}
	// 				navigation={true}
	// 				effect={"coverflow"}
	// 				centeredSlides={true}
	// 				slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
	// 				loop={true}
	// 				coverflowEffect={{
	// 					rotate: 50,
	// 					stretch: 0,
	// 					depth: 100,
	// 					modifier: 1,
	// 					slideShadows: true,
	// 				}}
	// 				pagination={{
	// 					clickable: true,
	// 				}}
	// 				className="mySwiper"
	// 			>
	// 				<SwiperSlide>
	// 					<List market={"Zaffari"} type={"slide"}></List>
	// 					<List market={"Zaffari"} type={"slide"}></List>
	// 					<List market={"Zaffari"} type={"slide"}></List>
	// 					{/* <img src={tomate}></img> */}
	// 				</SwiperSlide>
	// 			</Swiper>
	// 		</Container>
	// 	</Controller>
	// );
}

export default Slider;

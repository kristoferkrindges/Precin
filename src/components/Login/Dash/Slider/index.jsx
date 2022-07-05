import React from "react";
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

import SmallFeed from "../SmallFeed";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

function Slider(props) {
	// const breakPoints = [{ width: 500, itemsToShow: 1 }];
	// return (
	// 	<Container>
	// 		<Context>
	// 			<Carrousel breakPoints={breakPoints}>
	// 				<SmallFeed market={"Zaffari"}></SmallFeed>
	// 				<SmallFeed market={"Carrefour"}></SmallFeed>
	// 				<SmallFeed market={"Nacional"}></SmallFeed>
	// 				<SmallFeed market={"Outro"}></SmallFeed>
	// 				<SmallFeed market={"Zaffari"}></SmallFeed>
	// 			</Carrousel>
	// 		</Context>
	// 	</Container>
	// );
	return (
		<Controller>
			<Container>
				<TitleWrapper>
					<TitleCont>
						<Title>Sua Lista</Title>
					</TitleCont>
				</TitleWrapper>
				<Swiper
					modules={[EffectCoverflow, Pagination, Navigation]}
					navigation={true}
					effect={"coverflow"}
					centeredSlides={true}
					slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
					loop={true}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true,
					}}
					pagination={{
						clickable: true,
					}}
					className="mySwiper"
				>
					<SwiperSlide>
						<SmallFeed market={"Zaffari"}></SmallFeed>
						{/* <img src={tomate}></img> */}
					</SwiperSlide>
					<SwiperSlide>
						{/* <img src={tomate}></img> */}
						<SmallFeed market={"Zaffari"}></SmallFeed>
					</SwiperSlide>
					<SwiperSlide>
						<SmallFeed market={"Carrefour"}></SmallFeed>
						{/* <img src={tomate}></img> */}
					</SwiperSlide>
					<SwiperSlide>
						<SmallFeed market={"Carrefour"}></SmallFeed>
						{/* <img src={tomate}></img> */}
					</SwiperSlide>
					<SwiperSlide>
						<SmallFeed market={"Carrefour"}></SmallFeed>
						{/* <img src={tomate}></img> */}
					</SwiperSlide>
					<SwiperSlide>
						<SmallFeed market={"Carrefour"}></SmallFeed>
						{/* <img src={tomate}></img> */}
					</SwiperSlide>
				</Swiper>
			</Container>
		</Controller>
	);
}

export default Slider;

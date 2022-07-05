import styled from "styled-components";

// export const Container = styled.div`
/* border-radius: 1rem;
	height: 100%;
	padding: 3rem;
	background-color: ${({ theme }) => theme.feedInter};
	width: 100%;
	box-shadow: red;
	transition: 0.4s ease-in-out; */
/* background-color: ${({ theme }) => theme.feedInter};
	width: 100%;
	height: 100%;
	border-radius: 1rem; */
// `;

export const Controller = styled.div`
	border-radius: 1rem;
	height: 100%;
	padding: 1rem;
	background-color: ${({ theme }) => theme.feedInter};
	width: 100vh;
`;

export const Container = styled.div`
	position: relative;
	width: 99vh;
	height: 100%;
	/* background-color: ${({ theme }) => theme.buttons}; */
	padding: 1rem;
	display: block;
	& .swiper-slide {
		background-position: center;
		background-size: cover;
		width: 200px;
		height: 300px;

		img {
			display: block;
			width: 100%;
			height: 100%;
			-o-object-fit: cover;
			object-fit: cover;
		}

		@media (max-width: 768px) {
			.swiper-slide {
				width: 250px;
				height: auto;
			}
		}
	}

	& .swiper-pagination-fraction {
		bottom: 0;
	}

	.swiper-pagination-bullet {
		width: 25px;
		height: 5px;
		border-radius: 5px;
	}

	& .swiper-container {
		width: 70%;
		position: absolute;
		left: 50%;
		bottom: -16vw;
		-webkit-transform: translateX(-50%);
		transform: translateX(-50%);
		z-index: 2;
		padding-bottom: 3vw;

		@media (max-width: 768px) {
			bottom: -58vw;
			padding-bottom: 8vw;
		}
	}
`;

export const TitleWrapper = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	-ms-flex-line-pack: center;
	align-content: center;
	padding: 3vw 0 2vw 0;

	@media (max-width: 768px) {
		padding-top: 13vw;
	}
`;

export const TitleCont = styled.div`
	color: #fff;
	text-align: left;
	font-size: 2vw;

	@media (max-width: 768px) {
		font-size: 7vw;
	}
`;

export const Title = styled.span`
	display: block;
`;

export const Context = styled.div``;

// export const Context = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	width: 100%;
// 	height: 100%;
// 	padding: 2%;
// `;

// export const Ul = styled.ul`
// 	& li {
// 		margin-top: 0%;
// 		margin-bottom: 0%;
// 	}
// `;

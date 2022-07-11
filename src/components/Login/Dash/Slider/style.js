import styled from "styled-components";

export const Container = styled.div`
	/* border-radius: 1rem; */
	/* padding: 3rem; */
	/* background-color: ${({ theme }) => theme.feedInter}; */
	/* box-shadow: red; */
	/* transition: 0.4s ease-in-out;
	background-color: ${({ theme }) => theme.feedInter};
	width: 100%;
	height: 100%; */
	width: 90vh;

	@media (max-width: 965px) {
		width: 103%;
	}
`;
export const Context = styled.div`
	width: 100%;
	button.rec-dot {
		background-color: ${({ theme }) => theme.buttons};
		/* box-shadow: 0 0 1px 3px rgba(235, 16, 16, 0.5); */
	}
	button.rec-dot:hover {
		border-color: ${({ theme }) => theme.title};
	}

	button.rec-dot:hover,
	button.rec-dot:active,
	button.rec-dot:focus {
		box-shadow: 0 0 1px 3px ${({ theme }) => theme.title};
	}
	.rec.rec-arrow {
		color: ${({ theme }) => theme.title};
		background-color: ${({ theme }) => theme.buttons};
	}
	.rec.rec-arrow:hover {
		opacity: 0.5;
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const Controller = styled.div`
	border-radius: 1rem;
	height: 100%;
	padding: 1rem;
	background-color: ${({ theme }) => theme.feedInter};
	width: 100vh;
	& .swiper-slide {
		background-position: center;
		background-size: cover;
		width: 300px;
		height: 450px;

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
	.swiper-pagination-fraction {
		bottom: 0;
	}

	.swiper-pagination-bullet {
		width: 25px;
		height: 5px;
		border-radius: 5px;
	}
`;

// export const Container = styled.div`
// 	position: relative;
// 	width: 100%;
// 	height: 60vh;
// 	/* background-color: #000; */
// 	display: block;

// 	& .swiper-container {
// 		width: 70%;
// 		position: absolute;
// 		left: 50%;
// 		bottom: -16vw;
// 		-webkit-transform: translateX(-50%);
// 		transform: translateX(-50%);
// 		z-index: 2;
// 		padding-bottom: 3vw;
// 	}

// 	@media (max-width: 768px) {
// 		.swiper-container {
// 			bottom: -58vw;
// 			padding-bottom: 8vw;
// 		}
// 	}
// `;

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

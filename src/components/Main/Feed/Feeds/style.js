import styled from "styled-components";
import {
	IoHeartOutline,
	IoChatbubbleOutline,
	IoShareSocialOutline,
	IoCartOutline,
} from "react-icons/io5";

export const Lil = styled.li`
	margin-top: 3%;
	margin-bottom: 50px;
	width: 100%;
	height: 40vh;
	width: 70vh;
	/* background: #fff; */
	border-radius: 10px;
	padding: 3%;
	box-shadow: 0 50px 70px -40px rgba(0, 0, 0, 0.8);
	border: 1px solid black;
	background: ${({ theme }) => theme.feed};

	/* display: flex; */
	/* flex-wrap: wrap; */
	/* justify-content: center;
	background: radial-gradient(
		ellipse at left bottom,
		rgba(22, 24, 47, 1) 0%,
		rgba(8, 37, 84, 1) 59%,
		rgba(22, 24, 47, 1) 100%
	);
	border-radius: 10px;
	margin-top: 3%;
	padding: 3%;
	max-height: 350px;
	box-shadow: 0 50px 70px -40px rgba(0, 0, 0, 0.8);
	border: 1px solid black; */
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	height: 32vh;
	width: 68vh;
	/* height: 40vh;
    width: 70vh; */
`;

// ===============================
// User
export const User = styled.div`
	background-color: none;
	/* border-radius: 20px; */
	/* position: relative; */
	/* margin: 10px 0; */
	height: 34vh;
	width: 15vh;
	/* height: 34vh;
    width: 70vh; */
	cursor: pointer;
	transition: opacity 0.5s ease-out;

	&::before {
		content: "";
		/* position: absolute; */
		height: 25%;
		width: 100%;
		background: ${({ theme }) => theme.buttons};
		border-radius: 20px 20px 0 0;
	}

	&:hover {
		/* width: 38vh;
        height: 44vh; */
		/* opacity: 0.5; */
	}
`;
export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px;
	/* position: relative; */
	z-index: 100;
`;
export const Image = styled.div`
	height: 70px;
	width: 70px;
	border-radius: 50%;
	padding: 3px;
	background: ${({ theme }) => theme.buttons};

	&:hover {
		/* width: 38vh;
        height: 44vh; */
		opacity: 0.5;
	}
`;
export const Logo = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 50%;
	border: 3px solid #fff;
`;

export const Avatar = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10px;
	color: ${({ theme }) => theme.title};
`;

export const Name = styled.span`
	font-size: 0.8rem;
	white-space: nowrap;
	font-weight: 600;
`;
export const Time = styled.span`
	font-size: 0.7rem;
	font-weight: 500;
`;

export const Buttons = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	/* margin-top: 90px; */
`;
export const HireMe = styled.button`
	background: ${({ theme }) => theme.buttons};
	outline: none;
	border: none;
	color: #fff;
	padding: 10px 20px;
	border-radius: 20px;
	font-size: 1.5rem;
	font-weight: 500;
	transition: all 0.3s ease;
	cursor: pointer;

	&:hover {
		background: #333;
	}
`;
// ==========================================
// Product
// export const Product = styled.div`
// 	background: #FFF;
//   	border-radius: 1rem;
//   	box-shadow: 0px 40px 40px -20px rgba(13, 48, 189, 0.151826);
// 	height: 12vh;
// 	width: 16vh;
// `
// export const Content = styled.div`
//     display: flex;
//   	align-items: center;
//   	flex-direction: column;

//   	padding: 0 2rem;
//   	height: 100%;
//   	width: 100%;
// `
// export const Market = styled.div`
//     display: flex;
//   	align-items: center;
// `

// export const InfoProduct = styled.div`
// 	display: flex;
//   	flex-direction: column;
//  	margin-left: 1rem;
// `
// export const Img = styled.img`
//     border-radius: 1rem 1rem 0 0;
//   	width: 100%;
// `

// export const Icon = styled.img`
//     width: 3rem;
//   	height: 3rem;
// `
// export const Change = styled.a`

// `

// export const Info = styled.div`
//     display: flex;
//   	align-items: center;
//   	justify-content: space-between;
// 	margin: 2rem 0;
// 	background: #F7F9FF;
// 	padding: 1.5rem 1rem;
// 	width: 100%;
// 	border-radius: 0.8rem;
// `

// export const NameInfo = styled.span`
//     font-size: 1.5rem;
//     font-weight: 600;
// `
// export const Price = styled.span`
//     font-size: 2.0rem;
//     font-weight: 500;
// `

export const Product = styled.div`
	/* background-color: no-color; */
	/* background: ${({ theme }) => theme.buttons}; */
	/* border-radius: 20px; */
	position: relative;
	/* margin-left: 2%; */
	/* margin: 10px 0; */
	height: 30vh;
	width: 55vh;
	/* height: 34vh;
    width: 55vh; */
	cursor: pointer;
	transition: opacity 0.5s ease-out;

	&::before {
		/* content: "";
        position: absolute;
        height: 22.8%;
        width: 100%;
        background: ${({ theme }) => theme.buttons}; */
		/* border-radius: 20px 20px 0 0; */
	}

	&:hover {
		/* width: 38vh;
        height: 44vh; */
		/* opacity: 0.5; */
	}
`;
export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 5px;
	max-width: 45vh;
	/* background-color: green; */
	/* position: relative; */
	/* z-index: 100; */
`;
export const ImgProduct = styled.div`
	margin-top: 2%;
	height: 150px;
	width: 350px;
	/* border-radius: 20%; 1rem 1rem 0 0 */
	/* padding: 3px; */
	/* background: ${({ theme }) => theme.buttons}; */

	&:hover {
		/* width: 38vh;
        height: 44vh; */
		opacity: 0.5;
	}
`;
export const Img = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	/* border-radius: 20%; */
	/* border: 3px solid ${({ theme }) => theme.buttons}; */
`;
export const Collection = styled.div`
	display: flex;
	align-items: center;
	height: 10vh;
	width: 38vh;
	/* background: rgba(8, 141, 241, 0.4); */
	border-radius: 0.8rem;
	padding: 5% 5%;
	/* padding: 10px; */
	margin-left: 12%;
	margin-top: 2%;
`;
export const Icon = styled.img`
	width: 4.5rem;
	height: 4.5rem;
	margin-top: 50%;
	/* margin-left: 4px;
	margin-right: 26px; */
`;
export const Locate = styled.div`
	position: absolute;
	width: 5vh;
	top: 10px;
	right: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	& svg {
		/* stroke: ${({ theme }) => theme.text}; */
	}

	& svg:hover {
		opacity: 0.5;
	}
`;

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	/* margin-top: 10px; */
	color: ${({ theme }) => theme.title};
`;

export const NameInfo = styled.span`
	font-size: 1.2rem;
	white-space: nowrap;
	font-weight: 600;
`;
export const Price = styled.span`
	white-space: nowrap;
	font-size: 2.5rem;
	font-weight: 700;
`;
// ==========================================
// Buttons Interaction
export const Interaction = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 3vh;
	width: 70vh;
	/* height: 34vh;
    width: 70vh; */
	background-color: none;
`;
export const ButtonPrecin = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	padding: 8px 20px;
	margin-right: 10px;

	border: 0;
	outline: none;
	border-radius: 10px;
	cursor: pointer;

	color: #fff;
	font-weight: bold;
	font-size: 16px;
	transition: background 0.2s;

	background: rgba(37, 108, 225, 1);

	& svg {
		margin-right: 5px;
		stroke: white;
	}

	&:hover {
		opacity: 0.4;
	}
`;

export const ButtonPrecao = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	padding: 8px 20px;
	margin-right: 10px;

	border: 0;
	outline: none;
	border-radius: 10px;
	cursor: pointer;

	color: #fff;
	font-weight: bold;
	font-size: 16px;
	transition: background 0.2s;

	background: rgba(225, 37, 37);

	& svg {
		margin-right: 5px;
		stroke: white;
	}

	&:hover {
		opacity: 0.4;
	}
`;

export const ButtonComment = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	padding: 8px 20px;
	margin-right: 10px;

	border: 0;
	outline: none;
	border-radius: 10px;
	cursor: pointer;

	color: #fff;
	font-weight: bold;
	font-size: 16px;
	transition: background 0.2s;

	background: rgb(245, 180, 0);

	& svg {
		margin-right: 5px;
		stroke: white;
	}

	&:hover {
		opacity: 0.4;
	}
`;

// =======================================

export const Li = styled.li`
	display: flex;
	/* flex-wrap: wrap; */
	justify-content: center;
	background: radial-gradient(
		ellipse at left bottom,
		rgba(22, 24, 47, 1) 0%,
		rgba(8, 37, 84, 1) 59%,
		rgba(22, 24, 47, 1) 100%
	);
	border-radius: 10px;
	margin-top: 3%;
	padding: 3%;
	max-height: 350px;
	box-shadow: 0 50px 70px -40px rgba(0, 0, 0, 0.8);
	border: 1px solid black;

	.infoUserPost {
		width: 10%;
	}

	.infoUserPost .imgUserPost {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		margin-bottom: 2%;
		background: rgba(50, 50, 50, 1);
		cursor: pointer;
		border: 2px solid rgba(37, 108, 225);
	}

	.infoUserPost .nameAndHour {
		/* margin-left: 2%; */
		/* padding-bottom: 2%; */
	}

	.infoUserPost .nameAndHour > strong {
		color: white;
	}

	.infoUserPost .nameAndHour > p {
		font-size: 15px;
		color: white;
	}

	.infoPost {
		flex: 1;
		max-width: 20%;

		p {
			text-align: center;
		}
	}

	.priceLocationPost {
		flex: 2;
		width: 40%;

		.price {
			background: rgba(255, 255, 255, 1);
			width: 80%;
			text-align: center;
			border-radius: 5px;
			margin-top: 10%;
			margin-left: 10%;
			/* margin-right: 15%; */
			color: rgba(22, 24, 47, 1);
		}

		.price h1 {
			font-size: 3vh;
		}

		p {
			font-weight: bold;
			color: white;
			margin-left: 10%;
			padding: 2%;
		}

		.locationIcon {
			margin-left: 1%;
			font-size: 20px;
			/* cursor: pointer; */
		}
	}

	.postImage {
		max-height: 150px;
		max-width: 170px;
		border-radius: 10px;
	}

	p {
		width: 100%;
		margin: 3%;
		font-weight: bold;
		color: white;
	}

	.actionBtnPost {
		width: 30%;
		/* margin-left: 10%; */
		/* margin: 5%; */
	}
	.actionBtnPost .filesPost {
		padding: 10px 15px;
		margin: 3%;
		border: 0;
		outline: none;
		border-radius: 5px;
		cursor: pointer;
		color: #fff;
		font-weight: bold;
		font-size: 16px;
		transition: background 0.2s;
	}

	.actionBtnPost .filesPost svg {
		/* margin-right: 5px; */
		/* stroke: white; */
	}

	.like {
		background: rgba(37, 108, 225);
	}

	.like:hover {
		background: rgb(37, 108, 225, 0.7);
	}

	.comment {
		background: rgba(225, 37, 37);
	}

	.comment:hover {
		background: rgba(225, 37, 37, 0.7);
	}

	/* .share {
		background: #23a0ff;
	}

	.share:hover {
		background: rgba(8, 141, 241);
	} */

	.comments {
		color: white;
		font-size: 20px;
		cursor: pointer;
	}
`;

// export const IconHeart = styled(IoHeartOutline)`
/* stroke: red; */
/* width: 30px;
	height: 20px; */
// `;

// // export const IconChat = styled(IoChatbubbleOutline)`;
// 	stroke: #256ce1;
// 	width: 15px;
// 	height: 15px;
// `;

// export const IconSocial = styled(IoShareSocialOutline)`
// 	stroke: #256ce1;
// 	width: 15px;
// 	height: 15px;
// `;

export const IoCart = styled(IoCartOutline)`
	stroke: #256ce1;
	width: 25px;
	height: 25px;
`;

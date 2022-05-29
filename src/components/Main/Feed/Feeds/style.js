import styled from "styled-components";
import {
	IoHeartOutline,
	IoChatbubbleOutline,
	IoShareSocialOutline,
} from "react-icons/io5";

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

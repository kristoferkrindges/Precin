import styled from "styled-components";
import { IoCloseCircleOutline } from "react-icons/io5";

export const Container = styled.div`
	background: rgba(0, 0, 0, 0.7);
	width: 100vw;
	height: 100vh;
	position: fixed; //absolute
	z-index: 999;
	top: 0px;
	right: 0px;
`;

export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 30px;
	width: 100%;
	height: 100%;
	margin-left: 1.5%;
	/* position: relative;
	z-index: 100; */
`;

export const Image = styled.div`
	height: 650px;
	width: 650px;
	/* width: 40vw;
	height: 70vh; */
	border-radius: 25px;
	padding: 3px;
	background: ${({ theme }) => theme.buttons};

	@media (max-width: 768px) {
		height: 350px;
		width: 350px;
	}
`;
export const Logo = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 25px;
	border: 3px solid #fff;
`;

export const Icons = styled.div`
	position: absolute;
	/* top: 20px;
	right: -300px; */
	top: 80px;
	right: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;

	svg {
		color: white;
		/* opacity: 1; */
		/* margin-top: 10px; */
		transition: all 0.3s ease;
		cursor: pointer;
	}

	svg:hover {
		opacity: 1;
		transform: rotate(-180deg);
	}
`;

// export const Logo = styled.div`
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	margin-left: 3%;
// 	width: 30vw;

// 	img {
// 		width: 100%;
// 		height: 100%;
// 	}
// `;

export const IoClose = styled(IoCloseCircleOutline)`
	width: 30px;
	height: 30px;
	/* display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	top: 100px;
	right: 400px;
	position: absolute;
	width: 30px;
	height: 30px;
	cursor: pointer;
	color: white;
	stroke: white;
	&:hover {
		color: #94449e;
		opacity: 0.2;
	} */
`;

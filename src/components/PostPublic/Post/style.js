import styled from "styled-components";
import {
	IoFastFoodOutline,
	IoCartOutline,
	IoPricetagOutline,
	IoLocationOutline,
	IoImagesOutline,
	IoDuplicateOutline,
	IoArrowDownOutline,
	IoAlarmOutline,
	IoBrushOutline,
} from "react-icons/io5";

export const Container = styled.main`
	width: 100vw;
	height: 100vh;
	font-size: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: fixed;

	@media only screen and (max-width: 1024px) {
		align-items: flex-end;
	}
`;

export const Description = styled.div`
	width: 100%;
	margin: 2%;
`;

export const Title = styled.h1`
	text-align: center;
	font-size: 2em;
	font-weight: 700;
	color: ${({ theme }) => theme.title};

	@media only screen and (max-width: 1024px) {
		text-align: right;
		margin-right: 7%;
	}

	@media only screen and (max-width: 968px) {
		text-align: right;
		margin-right: 5%;
	}

	@media only screen and (max-width: 880px) {
		text-align: right;
		margin-right: 3%;
	}

	@media only screen and (max-width: 824px) {
		text-align: right;
		margin-right: 0%;
	}

	@media only screen and (max-width: 824px) {
		font-size: 1.9em;
	}

	@media only screen and (max-width: 768px) {
		font-size: 1.8em;
	}

	@media only screen and (max-width: 730px) {
		font-size: 1.7em;
	}

	@media only screen and (max-width: 698px) {
		font-size: 1.6em;
	}

	@media only screen and (max-width: 660px) {
		font-size: 1.5em;
	}

	@media only screen and (max-width: 630px) {
		font-size: 1.4em;
	}

	@media only screen and (max-width: 600px) {
		font-size: 1.3em;
	}

	@media only screen and (max-width: 560px) {
		font-size: 1.2em;
	}

	@media only screen and (max-width: 530px) {
		font-size: 1.1em;
	}

	@media only screen and (max-width: 500px) {
		font-size: 1em;
	}
`;
// Cards
export const Sliders = styled.div`
	width: 60%;
	height: 100%;

	@media only screen and (max-width: 1800px) {
		width: 65%;
	}

	@media only screen and (max-width: 1600px) {
		width: 70%;
	}

	@media only screen and (max-width: 1200px) {
		width: 75%;
	}

	@media only screen and (max-width: 1024px) {
		width: 85%;
	}

	/* @media only screen and (max-width: 630px) {
		width: 90%;
	} */

	/* @media only screen and (max-width: 540px) {
		width: 100%;
	} */

	.rec.rec-dot {
		background: #256ce1;
		border: 2px white solid;
	}

	.rec.rec-dot_active {
		background: #59fd59;
		box-shadow: 0 0 1px 3px #256ce1 !important;
	}

	.rec.rec-dot_hover {
		box-shadow: 0 0 1px 3px #256ce1 !important;
	}

	.rec.rec-dot_focus {
		box-shadow: 0 0 1px 3px #256ce1 !important;
	}

	.rec-arrow {
		background-color: #256ce1;
		color: white;

		@media only screen and (max-width: 665px) {
			display: none;
		}
	}
	.rec-arrow:hover {
		background-color: #256ce1;
		transition: all 0.2s ease-in-out;
		background: ${({ theme }) => theme.buttons_hover};
	}
	.rec-arrow:active {
		background-color: #256ce1;
		transition: all 0.2s ease-in-out;
		background: ${({ theme }) => theme.buttons_hover};
	}
	.rec-arrow:focus {
		background-color: #256ce1;
	}
`;
export const Controller = styled.div`
	width: 100%;
	height: 100%;

	@media only screen and (max-width: 665px) {
		width: 90%;
		margin-left: 10%;
	}

	@media only screen and (max-width: 580px) {
		width: 85%;
		margin-left: 13%;
	}

	@media only screen and (max-width: 500px) {
		width: 80%;
		margin-left: 15%;
	}

	@media only screen and (max-width: 480px) {
		margin-left: 20%;
	}
`;

// export const SliderContainer = styled.div`
// 	max-width: 1120px;
// 	width: 100%;
// 	padding: 40px 0;
// `;

// export const SlideContent = styled.div`
// 	margin: 0 40px;
// 	overflow: hidden;
// 	border-radius: 25px;
// `;

export const CardWrapper = styled.div`
	border-radius: 25px;
	background-color: #fff;
	width: 100%;
	height: 75vh;
	border: 1px solid black;
	background: ${({ theme }) => theme.navbar};

	@media only screen and (max-width: 1900px) {
		height: 73vh;
	}

	@media only screen and (max-width: 1600px) {
		height: 70vh;
	}

	/* @media only screen and (max-width: 1200px) {
		height: 65vh;
	} */

	/* @media only screen and (max-width: 963px) {
		height: 60vh;
	} */
`;

export const Card = styled.div`
	border-radius: 25px;
`;

export const ImageContent = styled.div`
	position: relative;
	row-gap: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #4070f4;
	border-radius: 25px 25px 0 25px;
`;

export const Overlay = styled.span`
	height: 22vh;
	background-color: #4070f4;
	border-radius: 25px 25px 0 25px;
	/* position: absolute; */
	/* left: 0;
	top: 0; */
	/* width: 100%; */

	@media only screen and (max-width: 824px) {
		height: 20vh;
	}

	@media only screen and (max-width: 768px) {
		height: 18vh;
	}

	&::before,
	&::after {
		content: "";
		position: absolute;
		right: 0;
		bottom: -40px;
		height: 40px;
		width: 40px;
		border: none;
		outline: none;
		background-color: #4070f4;
	}

	&::after {
		border-radius: 0 25px 0 0;
		background: ${({ theme }) => theme.navbar};
	}
`;

export const CardImage = styled.div`
	height: 150px;
	width: 150px;

	/* position: relative; */
	/* border-radius: 50%;
    background: ${({ theme }) => theme.navbar}; */
	/* padding: 3px; */

	@media only screen and (max-width: 824px) {
		height: 120px;
		width: 120px;
	}

	/* & img {
		width: 180px;
		height: 180px;
		border-radius: 50%;
		object-fit: cover;
		background-color: green;
	} */
`;

export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	& .precin {
		width: 140px;
		height: 140px;
		border-radius: 50%;
		object-fit: cover;
		margin-top: 5%;

		@media (max-width: 480px) {
			width: 120px;
			height: 120px;
		}
	}
`;

export const NameProduct = styled.h2`
	font-size: 2em;
	font-weight: 900;
	color: ${({ theme }) => theme.title};
	/* margin: 3%; */
	margin-top: 1%;
	margin-bottom: 1%;
	text-align: center;

	@media only screen and (max-width: 824px) {
		font-size: 1.9em;
	}

	@media only screen and (max-width: 768px) {
		font-size: 1.8em;
	}

	@media only screen and (max-width: 730px) {
		font-size: 1.7em;
	}

	@media only screen and (max-width: 698px) {
		font-size: 1.6em;
	}

	@media only screen and (max-width: 660px) {
		font-size: 1.5em;
	}

	@media only screen and (max-width: 630px) {
		font-size: 1.4em;
	}

	@media only screen and (max-width: 600px) {
		font-size: 1.3em;
	}

	@media only screen and (max-width: 560px) {
		font-size: 1.2em;
	}

	@media only screen and (max-width: 530px) {
		font-size: 1.1em;
	}

	@media only screen and (max-width: 500px) {
		font-size: 1em;
	}
`;

// export const Instruction = styled.p`
// 	font-size: 1.5rem;
// 	color: ${({ theme }) => theme.title};
// 	text-align: center;
// 	margin-top: 2%;
// `;

export const ContainerInput = styled.div`
	position: relative;
	height: 50px;
	width: 70%;
	background-color: rgba(0, 0, 0, 0.2);
	margin: auto;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
	border-radius: 25px;
	transition: all 0.3s ease;
	margin-bottom: 5%;

	@media only screen and (max-width: 768px) {
		width: 60%;
	}

	@media only screen and (max-width: 768px) {
		width: 60%;
	}
`;

export const InputName = styled.input`
	position: absolute;
	height: 50px;
	width: 100%;
	border-radius: 25px;
	background: #fff;
	outline: none;
	border: none;
	padding-left: 20px;
	font-size: 1em;
	color: black;
	transition: background-color 0.5s ease-in;

	@media only screen and (max-width: 500px) {
		font-size: 0.9em;
	}

	@media only screen and (max-width: 490px) {
		font-size: 0.8em;
	}

	@media only screen and (max-width: 456px) {
		font-size: 0.7em;
	}

	@media only screen and (max-width: 420px) {
		font-size: 0.6em;
	}

	&:focus {
		background-color: rgba(0, 0, 0, 0.1);
		color: #fff;
	}
`;

export const TextInput = styled.h3`
	position: absolute;
	right: -2px;
	top: 0;
	width: 50px;
	background-color: #4070f4;
	height: 100%;
	border-radius: 0 25px 25px 0;
	text-align: center;
	line-height: 50px;
	color: #fff;
	font-size: 20px;
`;

export const Writer = styled.span`
	text-align: center;
	font-size: 3em;
	font-weight: bold;
	color: #4070f4;

	/* display: flex; */
	/* align-items: center;
	justify-content: center; */
	/* position: relative; */
	/* height: 70px; */
	/* margin-top: 15%; */
	/* width: 65vh; */
	/* margin: auto; */
`;

export const SelectMarket = styled.select`
	height: 50px;
	width: 70vh;
	border: 1px solid black;
	border-radius: 25px;
	padding: 0.25em 0.5em;
	/* margin-top: 5%; */
	font-size: 1.25rem;
	cursor: pointer;
	line-height: 1.1;
	background-color: ${({ theme }) => theme.title};
	background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
	text-align-last: center;
	z-index: 10;
`;

// Select Dinamic
export const SelectMenu = styled.div`
	width: 50%;

	@media only screen and (max-width: 1600px) {
		width: 60%;
	}

	@media only screen and (max-width: 1200px) {
		width: 70%;
	}

	@media only screen and (max-width: 836px) {
		width: 80%;
	}
`;

export const SelectBtn = styled.div`
	display: flex;
	height: 50px;
	width: 100%;
	background: #fff;
	padding: 20px;
	font-size: 18px;
	font-weight: 400;
	border-radius: 8px;
	align-items: center;
	cursor: pointer;
	justify-content: space-between;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
	/* border: 1px solid black; */
`;

export const BtnText = styled.span`
	color: black;
`;

export const Options = styled.ul`
	position: relative;
	padding: 20px;
	margin-top: 10px;
	border-radius: 8px;
	background: #fff;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
	z-index: 15;
	/* display: none; */
`;
export const Option = styled.li`
	display: flex;
	height: 55px;
	cursor: pointer;
	padding: 0 16px;
	border-radius: 8px;
	align-items: center;
	background: #fff;

	& img {
		width: 40px;
		height: 40px;
	}

	&:hover {
		background: #f2f2f2;
	}
`;

export const OptionText = styled.span`
	font-size: 1.1rem;
	color: black;
	margin-left: 1%;
`;
export const IoArrowDown = styled(IoArrowDownOutline)`
	stroke: black;
	font-size: 1.5rem;
	transition: 0.3s;
	/* height: 100%;
    width: 25%;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid #4070F4; */
`;

// export const Option = styled.option`

// `

export const InputImage = styled.input`
	display: none;
`;

export const LabelImage = styled.label`
	color: ${({ theme }) => theme.title};
	background-color: #4070f4;
	height: 50px;
	width: 10vh;
	/* text-align: center; */
	border: 1px solid var(--select-border);
	border-radius: 25px;
	padding: 0.25em 0.5em;
	font-size: 1.5rem;
	cursor: pointer;
	/* line-height: 1.1; */
	margin: 0;
	/* position: absolute; */
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 8%;

	&svg {
		margin-left: 5%;
	}
`;

export const Ul = styled.ul`
	/* margin-top: 6%; */
`;

export const Result = styled.h2`
	color: ${({ theme }) => theme.title};
	font-size: 2rem;
	font-weight: 900;
	white-space: nowrap;
	margin-top: 10%;
	margin-right: 25px;
`;

export const Button = styled.button`
	height: 60px;
	width: 20%;
	border: none;
	font-size: 2rem;
	font-weight: 700;
	color: white;
	padding: 8px 16px;
	background-color: #4070f4;
	border-radius: 25px;
	margin: 0;
	margin-top: 2%;
	cursor: pointer;
	transition: all 0.3s ease;
	display: flex;
	justify-content: center;
	align-items: center;

	@media only screen and (max-width: 1200px) {
		width: 22%;
	}

	@media only screen and (max-width: 900px) {
		width: 25%;
	}

	@media only screen and (max-width: 768px) {
		width: 27%;
	}

	@media only screen and (max-width: 700px) {
		width: 30%;
	}

	@media only screen and (max-width: 600px) {
		width: 32%;
	}

	@media only screen and (max-width: 560px) {
		width: 35%;
	}

	@media only screen and (max-width: 500px) {
		width: 40%;
	}

	@media only screen and (max-width: 480px) {
		width: 50%;
	}

	&:hover {
		background: #265df2;
	}
`;

export const IconProduct = styled(IoFastFoodOutline)`
	stroke: #fff;
	height: 100%;
	width: 100%;
	object-fit: cover;
	/* border-radius: 50%;
    border: 4px solid #4070F4; */
`;

export const IconProduct2 = styled(IoFastFoodOutline)`
	/* stroke: #fff;
	height: 100%;
    width: 25%;
    object-fit: cover; */
	/* border-radius: 50%;
    border: 4px solid #4070F4; */
`;

export const IoCart = styled(IoCartOutline)`
	stroke: #fff;
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const IoCart2 = styled(IoCartOutline)`
	stroke: green;
	font-size: 1.5rem;
	margin-right: 12px;
	/* height: 100%;
    width: 100%;
    object-fit: cover; */
`;
export const IoPrice = styled(IoPricetagOutline)`
	stroke: #fff;
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const IoPrice2 = styled(IoPricetagOutline)`
	/* stroke: #fff;
	height: 100%;
    width: 100%;
    object-fit: cover; */
`;

export const IoEarth = styled(IoLocationOutline)`
	stroke: #fff;
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const IoEarth2 = styled(IoLocationOutline)`
	/* stroke: #fff;
	height: 100%;
    width: 100%;
    object-fit: cover; */
`;

export const IoImage = styled(IoImagesOutline)`
	stroke: #fff;
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const IoImage2 = styled(IoDuplicateOutline)`
	stroke: white;
	/* height: 100%;
    width: 100%;
    object-fit: cover; */
`;
export const IoAlarm = styled(IoAlarmOutline)`
	stroke: #fff;
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const IoBrush = styled(IoBrushOutline)`
	stroke: #fff;
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

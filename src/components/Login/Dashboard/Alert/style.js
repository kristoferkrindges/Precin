import styled from "styled-components";

export const Container = styled.div`
	padding: 1rem;
	background-color: ${({ theme }) => theme.feedInter};
	transition: 0.4s ease-in-out;
	width: 100%;
	border-radius: 1rem;
	height: 100%;
	box-shadow: red;
	transition: 0.4s ease-in-out;
	&:hover {
		box-shadow: red;
	}
	h1 {
		text-align: center;
	}
	@media screen and (min-width: 320px) and (max-width: 1080px) {
		width: 80%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const CardContent = styled.div`
	@media screen and (min-width: 320px) and (max-width: 1080px) {
		margin: 2rem 0;
	}
`;

export const Invoice = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin: 0.4rem;
	padding-top: 0.6rem;
	@media screen and (min-width: 320px) and (max-width: 1080px) {
		flex-direction: column;
		gap: 1rem;
	}
`;

export const Info = styled.div`
	display: flex;
	align-items: center;
	width: 50%;
	@media screen and (min-width: 320px) and (max-width: 1080px) {
		flex-direction: column;
		width: 100%;
		text-align: center;
	}
`;

export const Avatar = styled.div`
	img {
		height: 3.5rem;
		width: 3.5rem;
		border-radius: 3.5rem;
		border: 1px solid white;
	}
`;

export const TextContainer = styled.div`
	margin-left: 1rem;
	color: ${({ theme }) => theme.title};
`;

export const Title = styled.h4``;

export const SubTitle = styled.h5`
	font-weight: 400;
	color: ${({ theme }) => theme.title};
`;

export const InvoicesContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 30%;
	align-items: center;
	@media screen and (min-width: 320px) and (max-width: 1080px) {
		width: 100%;
		flex-direction: column;
		gap: 0.6rem;
	}
`;

export const Price = styled.div`
	color: ${({ theme }) => theme.title};
`;

export const Pay = styled.span`
	padding: 0.3rem 1rem;
	border-radius: 1rem;
	font-weight: 500;
	color: white;
	background-color: #70e00041;
	color: #70e000;
	cursor: pointer;
`;

export const NoPay = styled.span`
	padding: 0.3rem 1rem;
	border-radius: 1rem;
	font-weight: 500;
	color: white;
	background-color: #ff595e41;
	color: #ff595e;
	cursor: pointer;
`;

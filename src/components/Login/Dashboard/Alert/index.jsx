import React from "react";
// import Badge from "./Badge";
// import AvatarImage from "../../../../assets/logo.jpeg";
import {
	Container,
	CardContent,
	Invoice,
	Info,
	Avatar,
	TextContainer,
	Title,
	SubTitle,
	InvoicesContainer,
	Price,
	Pay,
	NoPay,
} from "./style";

function Invoices() {
	return (
		<Container>
			<CardContent>
				<Invoice>
					<Info>
						<Avatar>
							<img
								alt=""
								src={
									"https://images.lacucinaitaliana.it/wp-content/uploads/2017/09/10193410/uva-fragola1.jpg"
								}
							/>
						</Avatar>
						<TextContainer>
							<Title>Uva</Title>
							<SubTitle>#frutas</SubTitle>
						</TextContainer>
					</Info>
					<InvoicesContainer>
						<Pay>Média</Pay>
						{/* <Badge content="Paid" paid /> */}
						<Price>R$ 3,43</Price>
					</InvoicesContainer>
				</Invoice>
				<Invoice>
					<Info>
						<Avatar>
							<img
								alt=""
								src={
									"https://tse1.mm.bing.net/th?id=OIP.wpq5aNGEE49dXPXvrfrIBwHaE8&pid=Api&P=0&w=267&h=178"
								}
							/>
						</Avatar>
						<TextContainer>
							<Title>Milho</Title>
							<SubTitle>#Verduras</SubTitle>
						</TextContainer>
					</Info>
					<InvoicesContainer>
						<Pay>Média</Pay>
						{/* <Badge content="Late" late /> */}
						<Price>R$ 4,13</Price>
					</InvoicesContainer>
				</Invoice>
				<Invoice>
					<Info>
						<Avatar>
							<img
								alt=""
								src={
									"https://tse2.mm.bing.net/th?id=OIP.Ij6iyiDi9CIMp-V0uZXJqwHaE8&pid=Api&P=0&w=281&h=187"
								}
							/>
						</Avatar>
						<TextContainer>
							<Title>Chocolate</Title>
							<SubTitle>#doces</SubTitle>
						</TextContainer>
					</Info>
					<InvoicesContainer>
						<Pay>Média</Pay>
						{/* <Badge content="Paid" paid /> */}
						<Price>R$ 3,43</Price>
					</InvoicesContainer>
				</Invoice>
				<Invoice>
					<Info>
						<Avatar>
							<img
								alt=""
								src={
									"https://flatheadbeacon.com/wp-content/uploads/2019/06/AdobeStock_94921053.jpeg"
								}
							/>
							{/* src={AvatarImage} */}
						</Avatar>
						<TextContainer>
							<Title>FastFood</Title>
							<SubTitle>Hambúrguer</SubTitle>
						</TextContainer>
					</Info>
					<InvoicesContainer>
						<Pay>Média</Pay>
						{/* <Badge content="Paid" paid /> */}
						<Price>R$ 3,43</Price>
					</InvoicesContainer>
				</Invoice>
			</CardContent>
		</Container>
	);
}

export default Invoices;

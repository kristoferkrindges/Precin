import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	Container,
	Description,
	Title,
	Sliders,
	SliderContainer,
	SlideContent,
	CardWrapper,
	Card,
	ImageContent,
	Overlay,
	CardImage,
	IconProduct,
	Controller,
	CardContent,
	NameProduct,
	Instruction,
	ContainerInput,
	InputName,
	IconProduct2,
	TextInput,
	SelectMarket,
	Option,
	IoCart,
	IoPrice,
	IoPrice2,
	IoEarth,
	IoEarth2,
	InputImage,
	LabelImage,
	IoImage,
	IoImage2,
	Button,
	Ul,
	SelectMenu,
	SelectBtn,
	BtnText,
	Options,
	OptionText,
	IoArrowDown,
	IoCart2,
	Writer,
	Result,
	IoAlarm,
	IoBrush,
} from "./style";

import Carrousel from "react-elastic-carousel";
import { Typewriter } from "react-simple-typewriter";
import Feeds from "../../Main/Feed/Feeds";
import Coelhao from "../../../imagens/logo_zaffari.png";
import Nacional from "../../../imagens/nacional_logo.png";
import Carrefour from "../../../imagens/carrefour_logo.png";
import Outro from "../../../imagens/outros_mercados.png";
import logo from "../../../imagens/logo.png";
import { db } from "../../../firebase/index";
import {
	collection,
	addDoc,
	serverTimestamp,
	doc,
	getDoc,
	setDoc,
	getFirestore,
} from "firebase/firestore";
import ProductImage from "../ProductImage";
import { useUserContext } from "../../../context/userContext";
import { usePostContext } from "../../../context/postContext";

export default function Post() {
	const [productName, setProductName] = useState("");
	const [productPrice, setProductPrice] = useState();
	const [productLocate, setProductLocate] = useState("");

	// Select state
	const [click, setClick] = useState(false);

	const [market, setMarket] = useState("");

	// Carrousel
	const breakPoints = [{ width: 500, itemsToShow: 1 }];

	// Create collection inside Firestore with inputs
	const postsCollectionRef = doc(collection(db, "posts"));

	const createPost = async () => {
		await setDoc(postsCollectionRef, {
			product: productName,
			price: productPrice,
			market: market,
			address: productLocate,
			precin: 0,
			precao: 0,
			comments: 0,
			timestamp: serverTimestamp(),
			user_uid: user.uid,
			user_email: user.email,
			product_image: preview,
			id: postsCollectionRef.id,
		});
	};

	// Navigate to other route
	const navigate = useNavigate();

	// Get the userUID from userContext
	const { user, photoURL } = useUserContext();

	// Get image product preview in card
	const { preview, productURL, setProductURL, handleUpload } = usePostContext();

	return (
		<Container>
			<Description>
				<Title>Siga os passos para fazer sua publicação!</Title>
			</Description>
			<Sliders>
				<Carrousel breakPoints={breakPoints}>
					<Controller>
						<CardWrapper>
							<Card>
								<ImageContent>
									<Overlay></Overlay>
									<CardImage>
										<IconProduct></IconProduct>
									</CardImage>
								</ImageContent>
								<CardContent>
									<NameProduct>Nome do Produto</NameProduct>
									{/* <Instruction>Digite o nome do seu produto...</Instruction> */}
									<ContainerInput>
										<InputName
											type="text"
											placeholder="Nome do produto"
											value={productName}
											onChange={(e) => {
												setProductName(e.target.value);
											}}
										/>
										<TextInput>
											<IconProduct2></IconProduct2>
										</TextInput>
									</ContainerInput>
									<Writer>
										{/* Style will be inherited from the parent element */}
										<Typewriter
											loop={5}
											cursor
											cursorStyle="🍅"
											typeSpeed={90}
											deleteSpeed={60}
											delaySpeed={800}
											// onLoopDone={handleDone}
											// onType={handleType}
											words={["Tomate", "Alface", "Cenoura", "Ovos"]}
										/>
									</Writer>
								</CardContent>
							</Card>
						</CardWrapper>
					</Controller>
					<Controller>
						<CardWrapper>
							<Card>
								<ImageContent>
									<Overlay></Overlay>
									<CardImage>
										<IoPrice></IoPrice>
									</CardImage>
								</ImageContent>
								<CardContent>
									<NameProduct>Preço do produto</NameProduct>
									{/* <Instruction>Digite o nome do seu produto...</Instruction> */}
									<ContainerInput>
										<InputName
											type="number"
											placeholder="Preço do produto"
											value={productPrice}
											onChange={(e) => {
												setProductPrice(e.target.value);
											}}
										/>
										<TextInput>
											<IoPrice2></IoPrice2>
										</TextInput>
									</ContainerInput>
									<Writer>
										{/* Style will be inherited from the parent element */}
										<Typewriter
											loop={5}
											cursor
											cursorStyle="💲"
											typeSpeed={90}
											deleteSpeed={60}
											delaySpeed={800}
											// onLoopDone={handleDone}
											// onType={handleType}
											words={["3,00", "4,00", "2,00", "7,00"]}
										/>
									</Writer>
								</CardContent>
							</Card>
						</CardWrapper>
					</Controller>
					<Controller>
						<CardWrapper>
							<Card>
								<ImageContent>
									<Overlay></Overlay>
									<CardImage>
										<IoCart></IoCart>
									</CardImage>
								</ImageContent>
								<CardContent>
									<NameProduct>Mercado</NameProduct>
									<SelectMenu>
										<SelectBtn
											isOpen={click}
											onClick={() => setClick((p) => !p)}
										>
											<BtnText>{market}</BtnText>
											<IoArrowDown
												style={!click ? { transform: "rotate(-180deg)" } : {}}
											></IoArrowDown>
										</SelectBtn>
										<Options style={!click ? { display: "none" } : {}}>
											<Option
												isOpen={click}
												onClick={() => {
													setMarket("Zaffari");
													setClick((p) => !p);
												}}
											>
												<img src={Coelhao}></img>
												<OptionText> Zaffari</OptionText>
											</Option>
											<Option
												isOpen={click}
												onClick={() => {
													setMarket("Nacional");
													setClick((p) => !p);
												}}
											>
												<img src={Nacional}></img>
												<OptionText> Nacional</OptionText>
											</Option>
											<Option
												isOpen={click}
												onClick={() => {
													setMarket("Carrefour");
													setClick((p) => !p);
												}}
											>
												<img src={Carrefour}></img>
												<OptionText> Carrefour</OptionText>
											</Option>
											<Option
												isOpen={click}
												onClick={() => {
													setMarket("Outro");
													setClick((p) => !p);
												}}
											>
												<img src={Outro}></img>
												<OptionText> Outros</OptionText>
											</Option>
										</Options>
									</SelectMenu>
									{/* <SelectMarket 
                                        onChange={(e)=> setProductMarket(e.target.value)}
                                    >
                                        <Option value="">Escolha</Option>
                                        <Option value="Zaffari">Zaffari</Option>
                                        <Option value="Nacional">Nacional</Option>
                                        <Option value="Carrefour">Carrefour</Option>
                                        <Option value="Big">Big</Option>
                                        <Option value="Outros">Outros</Option>
                                    </SelectMarket> */}
								</CardContent>
							</Card>
						</CardWrapper>
					</Controller>
					<Controller>
						<CardWrapper>
							<Card>
								<ImageContent>
									<Overlay></Overlay>
									<CardImage>
										<IoEarth></IoEarth>
									</CardImage>
								</ImageContent>
								<CardContent>
									<NameProduct>Endereço</NameProduct>
									{/* <Instruction>Digite o nome do seu produto...</Instruction> */}
									<ContainerInput>
										<InputName
											type="text"
											placeholder="Endereço..."
											value={productLocate}
											onChange={(e) => {
												setProductLocate(e.target.value);
											}}
										/>
										<TextInput>
											<IoEarth2></IoEarth2>
										</TextInput>
									</ContainerInput>
									<Writer>
										{/* Style will be inherited from the parent element */}
										<Typewriter
											loop={5}
											cursor
											cursorStyle="🌍"
											typeSpeed={90}
											deleteSpeed={60}
											delaySpeed={800}
											// onLoopDone={handleDone}
											// onType={handleType}
											words={[
												"R. Cabral, 600 - 90420-121",
												"R. Cabral, 600 - 90420-121",
												"R. Cabral, 600 - 90420-121",
												"R. Cabral, 600 - 90420-121",
											]}
										/>
									</Writer>
								</CardContent>
							</Card>
						</CardWrapper>
					</Controller>
					<Controller>
						<CardWrapper>
							<Card>
								<ImageContent>
									<Overlay></Overlay>
									<CardImage>
										<IoImage></IoImage>
									</CardImage>
								</ImageContent>
								<CardContent>
									<NameProduct>Escolha uma foto</NameProduct>
									{/* <Instruction>Digite o nome do seu produto...</Instruction> */}
									<ProductImage />
									{/* <InputImage
										type="file"
										id="file"
										acceppt="image/*"
										value={productImg}
										onChange={(e) => {
											setProductImg(e.target.value);
										}}
									/>
									<LabelImage htmlFor="file">
										<IoImage2></IoImage2>
									</LabelImage> */}
									{/* <UploadImage /> */}
									{preview ? (
										<></>
									) : (
										<Writer>
											{/* Style will be inherited from the parent element */}
											<Typewriter
												loop={5}
												cursor
												cursorStyle="🍉"
												typeSpeed={90}
												deleteSpeed={60}
												delaySpeed={800}
												// onLoopDone={handleDone}
												// onType={handleType}
												words={["", "", "", ""]}
											/>
										</Writer>
									)}
								</CardContent>
							</Card>
						</CardWrapper>
					</Controller>
					<Controller>
						<CardWrapper>
							<Card>
								<ImageContent>
									<Overlay></Overlay>
									<CardImage>
										<IoBrush></IoBrush>
										{/* <Result>Como ficou</Result> */}
									</CardImage>
								</ImageContent>
								<CardContent>
									<Ul>
										<Feeds
											name={user.displayName}
											time={"1h"}
											public={""}
											product={productName}
											price={productPrice}
											market={market}
											img_user={photoURL}
											// product_image={productURL}
										/>
									</Ul>
								</CardContent>
							</Card>
						</CardWrapper>
					</Controller>
					<Controller>
						<CardWrapper>
							<Card>
								<ImageContent>
									<Overlay></Overlay>
									<CardImage>
										<IoAlarm></IoAlarm>
									</CardImage>
								</ImageContent>
								<CardContent>
									<NameProduct>Chegou a hora de Publicar!</NameProduct>
									<Button
										onClick={() => {
											handleUpload();
											createPost();
											navigate("/");
										}}
									>
										Pronto
									</Button>
									<img className="precin" src={logo}></img>
								</CardContent>
							</Card>
						</CardWrapper>
					</Controller>
				</Carrousel>
			</Sliders>
		</Container>
	);
}

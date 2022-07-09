import React, { useContext, useState, useEffect } from "react";
import {
	Layout,
	Title,
	BreadCrumbs,
	InfoData,
	Data,
	ContentData,
} from "./style";
import { Link } from "react-router-dom";
import Tags from "../Tags";
import {
	IoCartOutline,
	IoFileTrayFull,
	IoIdCardOutline,
	IoExtensionPuzzleOutline,
} from "react-icons/io5";
import Profile from "../Profile";
import Join from "../Join";
import Slider from "../Slider";
const doc = [
	{
		card: "Editar perfil",
		icon: <IoIdCardOutline />,
		link: "/editprofile",
	},
	{
		card: "Postar",
		icon: <IoExtensionPuzzleOutline />,
		link: "/publication",
	},
	{
		card: "Suas publicações",
		icon: <IoFileTrayFull />,
		link: "",
	},
	{
		card: "Sua lista",
		icon: <IoCartOutline />,
		link: "/listshop",
	},
];

const Options = (props) => {
	return (
		<Layout>
			<Title>
				Bem-vindo <span>{props.name}</span>
			</Title>
			{/* <BreadCrumbs>
				<li>
					<Link to="#">Home</Link>
				</li>
				<li className="divider">/</li>
				<li>
					<Link to="#" className="active">
						Dashboard
					</Link>
				</li>
			</BreadCrumbs> */}
			<InfoData>
				{doc.map((value, key) => (
					<Link to={value.link}>
						<Tags key={key} value={value.card} icon={value.icon} />
					</Link>
				))}
			</InfoData>
			<Data>
				<ContentData>
					<Profile
						name={props.name}
						email={props.email}
						img={props.img}
						time={props.time}
					></Profile>
				</ContentData>
				<ContentData>
					<Slider></Slider>
				</ContentData>
			</Data>
			<Join></Join>
		</Layout>
	);
};

export default Options;

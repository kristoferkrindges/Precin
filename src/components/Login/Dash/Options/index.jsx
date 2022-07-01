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
const doc = [
	{
		card: "Editar perfil",
		icon: <IoIdCardOutline />,
		link: "",
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
		link: "",
	},
];

const Options = (props) => {
	return (
		<Layout>
			<Title>
				Bem-vindo <span>Kristofer</span>
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
					<Profile></Profile>
				</ContentData>
				<ContentData></ContentData>
			</Data>
			{/* <div class="data">
				<div class="content-data">
					<div class="head">
						<h3>Sales Report</h3>
						<div class="menu">
							<i class='bx bx-dots-horizontal-rounded icon'></i>
							<ul class="menu-link">
								<li><a href="#">Edit</a></li>
								<li><a href="#">Save</a></li>
								<li><a href="#">Remove</a></li>
							</ul>
						</div>
					</div>
					<div class="chart">
						<div id="chart"></div>
					</div>
				</div>
				<div class="content-data">
					<div class="head">
						<h3>Chatbox</h3>
						<div class="menu">
							<i class='bx bx-dots-horizontal-rounded icon'></i>
							<ul class="menu-link">
								<li><a href="#">Edit</a></li>
								<li><a href="#">Save</a></li>
								<li><a href="#">Remove</a></li>
							</ul>
						</div>
					</div>
					<div class="chat-box">
						<p class="day"><span>Today</span></p>
						<div class="msg">
							<img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
							<div class="chat">
								<div class="profile">
									<span class="username">Alan</span>
									<span class="time">18:30</span>
								</div>
								<p>Hello</p>
							</div>
						</div>
						<div class="msg me">
							<div class="chat">
								<div class="profile">
									<span class="time">18:30</span>
								</div>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatum eos quam dolores eligendi exercitationem animi nobis reprehenderit laborum! Nulla.</p>
							</div>
						</div>
						<div class="msg me">
							<div class="chat">
								<div class="profile">
									<span class="time">18:30</span>
								</div>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, architecto!</p>
							</div>
						</div>
						<div class="msg me">
							<div class="chat">
								<div class="profile">
									<span class="time">18:30</span>
								</div>
								<p>Lorem ipsum, dolor sit amet.</p>
							</div>
						</div>
					</div> */}
			{/* <form action="#">
						<div class="form-group">
							<input type="text" placeholder="Type..."/>
							<button type="submit" class="btn-send"><i class='bx bxs-send' ></i></button>
						</div>
					</form>
				</div> */}
			{/* </div> */}
		</Layout>
	);
};

export default Options;

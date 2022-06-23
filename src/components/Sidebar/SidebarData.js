import {
	AiOutlineHome,
	AiOutlineSetting,
} from "react-icons/ai";
import { MdLogout, } from "react-icons/md";
import {
	IoPersonCircleOutline,
	IoHelpCircleOutline,
	IoCartOutline,
	IoBookmarkOutline,
	IoExtensionPuzzleOutline
} from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
export const SidebarData = [
	{
		label: "Precinhos",
		icon: <AiOutlineHome />,
		to: "/",
		notification: 5,
	},
	{
		label: "Publicar",
		icon: <IoExtensionPuzzleOutline />,
		to: "/publication",
		notification: 0,
	},
	{
		label: "Perfil",
		icon: <IoPersonCircleOutline />,
		to: "/login",
		notification: 0,
	},
	{
		label: "Publicações",
		icon: <IoBookmarkOutline />,
		to: "/public",
		notification: 0,
	},
	{
		label: "Minha Lista",
		icon: <IoCartOutline />,
		to: "/list",
		notification: 1,
	},
];

export const Settings = [
	{
		label: "Configurações",
		icon: <AiOutlineSetting />,
	},
	{
		label: "Suporte",
		icon: <IoHelpCircleOutline />,
	},
	{
		label: "Sair",
		icon: <MdLogout />,
	},
];

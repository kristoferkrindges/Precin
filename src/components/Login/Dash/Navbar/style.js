import styled from "styled-components";
import {
	IoLogoFacebook,
	IoLogoTwitter,
	IoLogoWhatsapp,
	IoCameraOutline,
	IoPencilOutline,
	IoNotificationsOutline,
	IoExtensionPuzzleOutline,
	IoSearchOutline,
} from "react-icons/io5";

export const IoExtensionPuzzle = styled(IoExtensionPuzzleOutline)`
	width: 20px;
	height: 20px;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoSearch = styled(IoSearchOutline)`
	width: 20px;
	height: 20px;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoNotifications = styled(IoNotificationsOutline)`
	width: 20px;
	height: 20px;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoCamera = styled(IoCameraOutline)`
	width: 20px;
	height: 20px;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoFacebook = styled(IoLogoFacebook)`
	width: 20px;
	height: 20px;
	font-size: 18px;
	cursor: pointer;

	&:hover {
		opacity: 0.5;
	}
`;

export const Content = styled.nav`
	background-color: ${({ theme }) => theme.navbar};
	/* height: 64px; */
	height: 100px;
	padding: 0 20px;
	display: flex;
	align-items: center;
	grid-gap: 28px;
	position: sticky;
	top: 0;
	left: 0;
	z-index: 100;
	/* margin-left: 15%; */

	& form {
		max-width: 400px;
		width: 100%;
		margin-right: auto;
	}
	.nav-link {
		position: relative;
	}

	.nav-link svg {
		font-size: 18px;
		color: ${({ theme }) => theme.title};
	}

	.logo {
		width: 50px;
		height: 50px;
		border-radius: 15px;
	}
`;

export const Precin = styled.h1`
	font-size: 2rem;
	color: ${({ theme }) => theme.title};
	width: 100%;
	/* background: gray; */
	border-radius: 5px;
	border: none;
	outline: none;
	padding: 10px 36px 10px 16px;
	transition: all 0.3s ease;
`;

export const FormGroup = styled.div`
	position: relative;
	input {
		width: 100%;
		background: ${({ theme }) => theme.title};
		border-radius: 5px;
		border: none;
		outline: none;
		padding: 10px 36px 10px 16px;
		transition: all 0.3s ease;
	}

	input:focus {
		box-shadow: 0 0 0 1px var(--blue), 0 0 0 4px var(--light-blue);
	}
	svg {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 16px;
		color: black;
	}
`;

export const Profile = styled.div`
	position: relative;

	img {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		object-fit: cover;
		cursor: pointer;
	}
`;

export const Badge = styled.span`
	position: absolute;
	top: -12px;
	right: -12px;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 2px solid ${({ theme }) => theme.navbar};
	background-color: ${({ theme }) => theme.navbar};
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => theme.title};
	font-size: 10px;
	font-weight: 700;
`;

export const Divider = styled.span`
	width: 1px;
	background: gray;
	height: 12px;
	display: block;
`;

export const ProfileLink = styled.ul`
	position: absolute;
	top: calc(100% + 10px);
	right: 0;
	background: ${({ theme }) => theme.navbar};
	padding: 10px 0;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	width: 160px;
	opacity: 1;
	pointer-events: none;
	transition: all 0.3s ease;
`;
// nav .profile .profile-link.show {
// 	opacity: 1;
// 	pointer-events: visible;
// 	top: 100%;
// }

export const Li = styled.li`
	& a {
		padding: 10px 16px;
		display: flex;
		grid-gap: 10px;
		font-size: 14px;
		color: ${({ theme }) => theme.title};
		align-items: center;
		transition: all 0.3s ease;
	}

	a:hover {
		background: var(--grey);
	}
`;

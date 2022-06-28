import React from "react";
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SidebarRoute,
} from "./style";

export default function Burguer({ isOpen, toggle }) {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon></CloseIcon>
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="/" onClick={toggle}>
						Home
					</SidebarLink>
					<SidebarLink to="/publication" onClick={toggle}>
						Públicar
					</SidebarLink>
					<SidebarLink to="/login" onClick={toggle}>
						Perfil
					</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<SidebarRoute to="/login">Entrar</SidebarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
}

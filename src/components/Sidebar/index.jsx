import React, { useContext, useRef, useState } from "react";
import {
    Container,
    SDivider,
    SLink,
    SLinkContainer,
    SLinkIcon,
    SLinkLabel,
    SLinkNotification,
    Logo,
    Img,
    Name,
    Context,
    Button,
    STheme,
    SThemeLabel,
    SThemeToggler,
    SToggleThumb,
} from "./style";
import { SidebarData, Settings } from "./SidebarData"

import logo from "../../imagens/dog_sorridente.jpeg"

import {
    AiOutlineApartment,
    AiOutlineHome,
    AiOutlineLeft,
    AiOutlineSetting,
} from "react-icons/ai";
import { MdLogout, MdOutlineAnalytics } from "react-icons/md";
import { BsPeople } from "react-icons/bs";

import { ThemeContext } from "./../../App";
import { useLocation } from "react-router-dom";

function Sidebar(props){
    const searchRef = useRef(null);
    const { setTheme, theme } = useContext(ThemeContext);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { pathname } = useLocation();

    return (
        <Container>
            <Context isOpen={sidebarOpen}>
                <>
                    <Button isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
                        <AiOutlineLeft />
                    </Button>
                </>
                <Logo>
                    <Img src={logo} alt="logo"></Img>
                    <Name style={!sidebarOpen ? { width: 0, padding: 0, display: "none" } : {}}>
                        {props.name}
                    </Name>
                </Logo>
                <SDivider />
                {SidebarData.map(({ icon, label, notification, to }) => (
                    <SLinkContainer key={label} isActive={pathname === to}>
                        <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                            <SLinkIcon>{icon}</SLinkIcon>
                            {sidebarOpen && (
                                <>
                                    <SLinkLabel>{label}</SLinkLabel>
                                    {/* if notifications are at 0 or null, do not display */}
                                    {!!notification && (
                                        <SLinkNotification>{notification}</SLinkNotification>
                                    )}
                                </>
                            )}
                        </SLink>
                    </SLinkContainer>
                ))}
                <SDivider />
                {Settings.map(({ icon, label }) => (
                    <SLinkContainer key={label}>
                        <SLink to="/" style={!sidebarOpen ? { width: `fit-content` } : {}}>
                            <SLinkIcon>{icon}</SLinkIcon>
                            {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
                        </SLink>
                    </SLinkContainer>
                ))}
                <SDivider />
                <STheme>
                    {sidebarOpen && <SThemeLabel>Modo escuro</SThemeLabel>}
                    <SThemeToggler
                        isActive={theme === "dark"}
                        onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
                    >
                        <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
                    </SThemeToggler>
                </STheme>
            </Context>
        </Container>
    );
};
export default Sidebar;
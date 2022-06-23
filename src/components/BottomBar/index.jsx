import React, { useState } from "react";
import {
    Container, 
    Nav, 
    NavContent,
    NavItem,
    NavLink,
    LinkText,
    Indicator,

} from "./style";
import { SidebarData, Settings } from "../Sidebar/SidebarData";

export default function BottomBar(){
    
    const [click, setClick] = useState(false)

    return(
        <Container>
        <Nav>
            <NavContent>
                {SidebarData.map(({ icon, label, to, }) => (
                    <NavItem>
                        {/* <NavLink to={to}>
                            {icon}
                            <LinkText>{label}</LinkText>
                        </NavLink> */}
                    </NavItem>
                ))}
                {Settings.map(({ icon, label, to, }) => (
                    <NavItem>
                        {/* <NavLink to={to}>
                            {icon}
                            <LinkText>{label}</LinkText>
                        </NavLink> */}
                    </NavItem>
                ))}
                <Indicator></Indicator>
            </NavContent>
        </Nav>
        </Container>
    )
}
import React from "react";
import Sidebar from "../Sidebar";
import { SLayout, SMain } from "./style";
import Main from "../Main"
import Header from "../Shared/Header"
import Suggestion from "../Suggestion";

function Layout({ children }){
    return (
        <SLayout>
            <Sidebar 
                name="Kristofer Krindges"
            />
            <Main></Main>
            <Suggestion></Suggestion>
            {/* <SMain>{children}</SMain> */}
        </SLayout>
    );
};

export default Layout;
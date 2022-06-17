import React from "react";
import Sidebar from "../Sidebar";
import { SLayout, SMain } from "./style";
import Main from "../Main"
import Header from "../Shared/Header"
import Suggestion from "../Suggestion";

function Layout({ children }){
    return (
        <>
        {/* <Header></Header> */}
        <SLayout>

            {/* <SMain> */}
                <Sidebar 
                    name="Kristofer Krindges"
                />
                <Main></Main>
                <Suggestion></Suggestion>
            {/* </SMain> */}
            {/* <SMain>{children}</SMain> */}
        </SLayout>
        </>
    );
};

export default Layout;
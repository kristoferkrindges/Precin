import React from "react";
import Sidebar from "../Sidebar";
import { SLayout, SMain } from "./style";
import Main from "../Main"
import Suggestion from "../Suggestion";

function Layout({ children }){
    return (
        <>
        <SLayout>
                <Sidebar 
                    name="Kristofer Krindges"
                />
                <Main></Main>
                <Suggestion></Suggestion>
        </SLayout>
        </>
    );
};

export default Layout;
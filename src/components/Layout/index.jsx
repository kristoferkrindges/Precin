import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { SLayout, SMain } from "./style";
import Main from "../Main"
import Suggestion from "../Suggestion";
import { SearchContext } from "../../context/searchContext";


function Layout({ children }){
    const [tokenProduct, setTokenProduct] = useState("")
    return (
        <>
        <SLayout>
        <SearchContext.Provider value={{setTokenProduct, tokenProduct}}>
                <Sidebar 
                    name="Kristofer Krindges"
                />
                <Main></Main>
                <Suggestion></Suggestion>
        </SearchContext.Provider>
        </SLayout>

        </>
    );
};

export default Layout;
import React from "react";
import Feeds from "../Main/Feed/Feeds";
import Menu from "../Shared/Menu/index";
import Sidebar from "../Sidebar/index";
import { Container } from "./style";
import { useParams } from "react-router-dom";

function SearchResult() {
    let { product } = useParams();
    return (
        <>
            <Menu />
            <Sidebar />
            <Container>
                <h2>Resultado para: {product}</h2>
                <Feeds />
            </Container>
        </>
    );
}

export default SearchResult;
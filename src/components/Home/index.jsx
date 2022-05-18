import React from "react";
import Header from "../Shared/Header"
import Footer from "../Shared/Footer"
import Article from "./Article"
import { Container } from "./styles";

export default function Home(){
    return(
            <Container>
                <Header></Header>
                <Article></Article>
                <Footer></Footer>
            </Container>
    )
}
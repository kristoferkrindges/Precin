import React from "react";
import Header from "../Shared/Header"
import Footer from "../Shared/Footer"
import { Container } from "./styles";
import Main from "../Main"
import Layout from "../Layout"

export default function Home(){
    return(
            <Container>
                <Header></Header>
                {/* <Main></Main> */}
                <Layout></Layout>
                {/* <Footer></Footer> */}
            </Container>
    )
}
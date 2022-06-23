import React from "react";
import { Container } from "./styles";
import Layout from "../Layout"
import Menu from "../Shared/Menu";
import BottomBar from "../BottomBar";

export default function Home(){
    return(
            <Container>
                <Menu type="logado" search="home"/>
                <Layout></Layout>
                {/* <BottomBar></BottomBar> */}
            </Container>
    )
}
import React from "react";
import { Container } from "./styles";
import Layout from "../Layout"
import Menu from "../Shared/Menu";

export default function Home(){
    return(
            <Container>
                <Menu type="não" search="home"/>
                <Layout></Layout>
            </Container>
    )
}
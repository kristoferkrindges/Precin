import React, { useContext, useRef, useState } from "react";
import {
    Container,
    Context,
    Divider,
    Search,
    SearchIcon,
    IoSearch,
    Trends,
    Trend,
    List,
    Item

    
} from "./style";

function Suggestion(props){
    return(
        <Container>
            <Context>
                <Search>
                    <SearchIcon>
                        <IoSearch/>
                    </SearchIcon>
                    <input placeholder="Search"/>
                </Search>
                <Divider/>
                <Trends>
                    <Trend>Em Alta</Trend>
                    <List>
                        <Item>🍅 Tomate</Item>
                        <Item>🍇 Uva</Item>
                        <Item>🍍 Abacaxi</Item>
                        <Item>🍕 Pizza</Item>
                        <Item>🍫 Chocolate</Item>
                        <Item>🧄 Alho</Item>
                    </List>
                </Trends>
                <Divider/>
                <h1>© Todos os direitos Reservados</h1>
            </Context>
        </Container>
    )
}

export default Suggestion
import React, { useContext, useEffect, useRef, useState } from "react";
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
import { SearchContext } from "../../context/searchContext";

function Suggestion(props){
    const {tokenProduct, setTokenProduct} = useContext(SearchContext);
    console.log(tokenProduct)
    
    useEffect(()=> {}, [])
    return(
            <Container>
                <Context>
                    <Search>
                        <SearchIcon>
                            <IoSearch/>
                        </SearchIcon>
                        <input 
                            placeholder="Search"
                            onChange={(e)=> setTokenProduct(e.target.value)}
                        />
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
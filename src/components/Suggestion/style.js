import styled from "styled-components";
import { btnReset, v } from "../../styles/variables";
import { 
    IoSearchOutline, 

} from "react-icons/io5";

export const Container = styled.div`
    /* background: ${({ theme }) => theme.navbar}; */
    height: 85vh;
    width: 24vh;
    border-radius: 25px;
    margin-top: 1.5%;
    margin-right: 18%;
    /* margin-right: 1%; */
`

export const Context = styled.div`
    /* display:flex;
    justify-content: center; */
    /* align-items: center; */
    /* margin-top: 2%; */
    position: fixed;
    height: 80vh;
    width: 24vh;
    border-radius: 25px;
    padding: ${v.lgSpacing};
    /* background: ${({ theme }) => theme.navbar}; */
    /* margin-right: 20px; */
`;

export const Divider = styled.div`
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.bg3};
    margin: ${v.lgSpacing} 0;
`;

export const Search = styled.div`
    background: ${({ theme }) => theme.bgAlpha};
    border: 1px solid ${({ theme }) => theme.bg3};
    border-radius: ${v.borderRadius};
    input {
        padding: 0 ${v.smSpacing};
        font-family: inherit;
        letter-spacing: inherit;
        font-size: 16px;
        width: 100%;
        outline: none;
        border: none;
        color: inherit;
        background: transparent;
    }
    display: flex;
`;

export const SearchIcon = styled.button`
    ${btnReset};
    padding: calc(${v.mdSpacing} - 2px) ${v.mdSpacing};
    display: flex;
    cursor: pointer;
    svg {
        font-size: 20px;
    }
`;

export const IoSearch = styled(IoSearchOutline)`

`;

export const Trends = styled.div`
    background: ${({ theme }) => theme.bgAlpha};
    border: 1px solid ${({ theme }) => theme.bg3};
    border-radius: ${v.borderRadius};
    padding: ${v.smSpacing};
`

export const Trend = styled.h1`
    white-space: nowrap;
    font-size: 1.3rem;
    margin-bottom: 15%;
`

export const List = styled.ul`

`

export const Item = styled.li`
    font-size: 1.0rem;
    margin: 15% 5% 10% 10%;
`


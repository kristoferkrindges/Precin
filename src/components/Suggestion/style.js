import styled from "styled-components";
import { btnReset, v } from "../../styles/variables";

export const Container = styled.div`
    display:flex;
    background: ${({ theme }) => theme.navbar};
    
`

export const Context = styled.div`
    width: ${v.sidebarWidth};
    background: ${({ theme }) => theme.navbar};
    height: 100vh;
    padding: ${v.lgSpacing};
    position: fixed;
`;

export const SDivider = styled.div`
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.bg3};
    margin: ${v.lgSpacing} 0;
`;
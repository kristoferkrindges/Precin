import {Link as LinkR} from 'react-router-dom'
import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4070F4;
`

export const Nav = styled.nav`
    border-radius: 12px;
    background: #FFF;
    padding: 0 25px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    position: fixed;
`

export const NavContent = styled.ul`
    border-radius: 12px;
    background: #FFF;
    padding: 0 25px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`

export const NavItem = styled.li`
    
`

export const NavLink = styled(LinkR)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 120px;
    width: 95px;
    text-decoration: none;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`

export const LinkText = styled.span`
    position: absolute;
    font-size: 12px;
    font-weight: 500;
    color: #4070F4;
    opacity: 0;
    transform: translateY(32px);
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`

export const Indicator = styled.span`
    position: absolute;
    top: -14px;
    left: 48px;
    height: 36px;
    width: 36px;
    background-color: #FFF;
    border: 6px solid #4070F4;
    border-radius: 50%;
    transform: translateX(-50%);
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    &::before,
    &::after{
        content: '';
        position: absolute;
        bottom: -8px;
        height: 24px;
        width: 19px;
    }
    
    &::before{
        left: -22px;
        background-color: #FFF;
        border-top-right-radius: 25px;
        box-shadow: 1px -13px #4070F4;
    }

    &::after{
        right: -22px;
        background-color: #FFF;
        border-top-left-radius: 25px;
        box-shadow: -1px -13px #4070F4;
    }
`
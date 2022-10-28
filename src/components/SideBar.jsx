import CodeComponent from '../components/codeComponent';
import logotypeLight from '../assets/logo-light.png';
import React, { useState } from 'react';
import MenusComponent from '../components/menus';
import Styled from "styled-components";

function SideBar() {
    const [hidden, setHidden] = useState(true);
    return (
        <SideBarContainer>
            <SideBarFixedContainer>
                <img src={logotypeLight} className="logotype" alt="logotype-dark" width="208px" height="116.29px" />

                <ul>
                    <ListElementMenu><Link href="/home">Home</Link></ListElementMenu>
                    <ListElementMenu><Link href="/authorization">Autorização</Link></ListElementMenu>
                    <ListElementMenu><Link href="/references">Referências</Link></ListElementMenu>
                </ul>

                <Divider />

                <SearchBox type="text" placeholder="Search.." />

                <ul><ListElementMenu>Recursos:</ListElementMenu></ul>
            </SideBarFixedContainer>

            <SideBarRelativeContainer>
                <ul><MenusComponent /></ul>
            </SideBarRelativeContainer>

        </SideBarContainer >
    );
};

const SideBarContainer = Styled.div`
    width: 300px; 
    height: 100vh;
    display: flex;
    position: fixed;
    flex-direction: column;
    align-items: center;
    background-color: #fffff;
    box-shadow: 5px 0px 10px #e3e3e3;
`
const SideBarFixedContainer = Styled.div`
    width: 70%;
`
const ListElementMenu = Styled.li`
    margin-top: 10px;
    margin-bottom: 10px;
    list-style-type: none;
    font-size: 22px;
    color: #2f3136;
`
const Link = Styled.a`
    color: #2f3136;
    text-decoration: none;
    &:hover {
        cursor: pointer;
    }   
`
const Divider = Styled.hr`
    margin-top: 30px;
    margin-bottom: 10px;
    color: #2f3136;
`
const SearchBox = Styled.input`
    width: 100%;
    margin-top: 20px;
    margin-bottom:20px;
    padding: 10px 0 10px 20px;
    border-radius: 20px;
    border: none;
    outline: none;
    box-sizing: border-box;
    font-size: 14px;
    background-color: #E9EBF0;
`
const SideBarRelativeContainer = Styled.div`
    width: 70%;
    padding-left: 90px;
    overflow: auto;
`
const ListElementSubmenu = Styled.li`
    margin-top: 10px;
    margin-bottom: 10px;
    list-style-type: circle;
    font-size: 18px;
    color: #2f3136;
   
    &:hover {
        cursor: pointer;
    }    
`
const List = Styled.ul`
    padding-left: 20px;
`
const ListElement = Styled.li`
    margin-top: 10px;
    margin-bottom: 10px;
    list-style-type: none;
    font-size: 18px;
    color: #2f3136;
   
    &:hover {
        cursor: pointer;
    }    
`

export default SideBar;
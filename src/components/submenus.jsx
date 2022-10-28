import { api, useFetch } from "../hooks/useEffect";
import React, { useState } from 'react';
import Styled from "styled-components";

function MenusComponent() {
    const [hidden, setHidden] = useState(true);
    const { data: menu, isFetching: loadingMenu } = useFetch('/menu');

    return (
        <>
            {
                loadingMenu == true ? <p>carregando...</p> : menu.map(menu =>
                    <ListElementSubmenu key={menu[0].submenu - form}>{menu[0].menu}</ListElementSubmenu>
                )
            }
        </>
    )
}

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
const Link = Styled.a`
    color: #2f3136;
    text-decoration: none;
    &:hover {
        cursor: pointer;
    }   
`

export default MenusComponent;
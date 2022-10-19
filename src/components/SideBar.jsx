/**************************************************************************************************************************/
//Este é o componente responsável pela renderização do menu lateral de acesso

/**************************************************************************************************************************/
/* Importações */
import React, { useState } from 'react';
import Styled from "styled-components";
import logotypeLight from '../assets/images/logo-light.png'

/**************************************************************************************************************************/
/* HTML Components */

function SideBar() {
    const [hidden, setHidden] = useState(true);

    return (
        <SideBarContainer>

            <SideBarFixedContainer>

                <img src={logotypeLight} className="logotype" alt="logotype-dark" width="208px"
                    height="116.29px" />

                <ul>
                    <ListElementMenu>
                        <Link href="/home">Home</Link>
                    </ListElementMenu>
                    <ListElementMenu >
                        <Link href="/authorization">Autorização</Link>
                    </ListElementMenu>
                    <ListElementMenu >
                        <Link href="/references">Referências</Link>
                    </ListElementMenu>
                </ul>

                <Divider />

                <SearchBox type="text" placeholder="Search.." />

                <ul>
                    <ListElementMenu>Recursos:</ListElementMenu>
                </ul>


            </SideBarFixedContainer>

            <SideBarRelativeContainer>
                <ul>
                    {hidden ? (
                        <ListElementSubmenu onClick={() => setHidden(false)}> Cadastros </ListElementSubmenu>
                    ) : (
                        <ListElementSubmenu onClick={() => setHidden(true)}> Cadastros
                            <List>
                                <ListElement><Link href="/endpoint">Inserir</Link></ListElement>
                                <ListElement>Editar</ListElement>
                                <ListElement>Listar</ListElement>
                                <ListElement>Deletar</ListElement>
                            </List>
                        </ListElementSubmenu>
                    )}

                    <ListElementSubmenu>Planejamento </ListElementSubmenu>
                    <ListElementSubmenu>Entradas     </ListElementSubmenu>
                    <ListElementSubmenu>Saidas       </ListElementSubmenu>
                    <ListElementSubmenu>Pagar        </ListElementSubmenu>
                    <ListElementSubmenu>Receber      </ListElementSubmenu>
                    <ListElementSubmenu>Financeiro   </ListElementSubmenu>
                    <ListElementSubmenu>Fiscal       </ListElementSubmenu>
                    <ListElementSubmenu>Contabilidade</ListElementSubmenu>
                    <ListElementSubmenu>Estoque      </ListElementSubmenu>
                    <ListElementSubmenu>Provedor     </ListElementSubmenu>
                    <ListElementSubmenu>InMap        </ListElementSubmenu>
                    <ListElementSubmenu>Suporte      </ListElementSubmenu>
                    <ListElementSubmenu>Hotsite      </ListElementSubmenu>
                    <ListElementSubmenu>CRM          </ListElementSubmenu>
                </ul>

            </SideBarRelativeContainer>

        </SideBarContainer>
    );
};

/**************************************************************************************************************************/
/* CSS utilizando o Styled Components */

/* Container pai */
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

/* Container filho fixo */
const SideBarFixedContainer = Styled.div`
    width: 70%;
`
/* Elementos do Menu */
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
        /* font-weight: bold; */
        cursor: pointer;
    }   
`

const Divider = Styled.hr`
    margin-top: 30px;
    margin-bottom: 10px;
    color: #2f3136;
`

/* Barra de pesquisa */
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

/* Container filho relativo */
const SideBarRelativeContainer = Styled.div`
    width: 70%;
    padding-left: 90px;
    overflow: auto;
`
/* Elementos do Submenu */
const ListElementSubmenu = Styled.li`
    margin-top: 10px;
    margin-bottom: 10px;
    list-style-type: circle;
    font-size: 18px;
    color: #2f3136;
   
    &:hover {
        /* font-weight: bold; */
        cursor: pointer;
    }    
`

/* Lista suspensa */
const List = Styled.ul`
    padding-left: 20px;
`

/* Elementos do Submenu */
const ListElement = Styled.li`
    margin-top: 10px;
    margin-bottom: 10px;
    list-style-type: none;
    font-size: 18px;
    color: #2f3136;
   
    &:hover {
        /* font-weight: bold; */
        cursor: pointer;
    }    
`

/**************************************************************************************************************************/

export default SideBar;
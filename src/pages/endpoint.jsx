import ParagraphComponent from '../components/paragraphComponent';
import TitleComponent from '../components/titleComponent';
import CodeComponent from '../components/codeComponent';
import { api, useFetch } from "../hooks/useEffect";
import SideBar from '../components/SideBar';
import Styled from "styled-components";

function ReferencesPage() {

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Basic <Token Base64>',
        'ixcsoft': 'listar'
    };

    const { data: menus, isFetching: loadingMenu } = useFetch('/menu');

    return (
        <>
            <SideBar />
            <ContentContainer >
                <TextsContainer>

                    <TitleComponent text="Cliente" />
                    <ParagraphComponent text="Endpoint referente a requisições realizadas sobre a tabela cliente no banco de dados." />

                    <TitleComponent text="Headers" />
                    {loadingMenu == true ? <p>Carregando dados...</p> : <CodeComponent {...headers} />}

                    <TitleComponent text="Dados do body" />
                    {loadingMenu == true ? <p>Carregando dados...</p> : <CodeComponent {...menus} />}

                </TextsContainer>
            </ContentContainer >
        </>
    )
};

const ContentContainer = Styled.div`
    background-color: #fffff;
    width: calc(100% - 300px);
    justify-content: center;
    display: flex;
    height: 100vh;
    float: right;
`

const TextsContainer = Styled.div`
    width: calc(100% - 30%);
    margin-bottom: 100px;
    margin-top: 100px;
    height: 100vh;
    float: right;
`

export default ReferencesPage; 
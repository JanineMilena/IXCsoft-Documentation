import Styled from "styled-components";
import SideBar from '../components/SideBar';
import TitleComponent from '../components/titleComponent';
import ParagraphComponent from '../components/paragraphComponent';
import CodeBlock from '../components/codeBlock';


function EndpointPage() {

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Basic <Token Base64>',
        'ixcsoft': 'listar'
    }

    return (
        <>
            <SideBar />
            <ContentContainer >
                <TextsContainer>

                    <TitleComponent text="Cliente" />
                    <ParagraphComponent text="Formulário referente aos dados dos clientes cadastrados no sistema." />


                    <TitleComponent text="Listar um cliente" />
                    <ParagraphComponent text="É possível através da API visualizar o registro de um ou mais clientes do sistema. Esses dados podem ser obtidos através do endpoint  GET /webservice/cliente." />

                    <br />
                    <br />

                    <CodeBlock {...headers} />

                    <br />
                    <br />

                    <TitleComponent text="Estrutura do body" />

                </TextsContainer>
            </ContentContainer >
        </>
    )
};

const ContentContainer = Styled.div`
    width: calc(100% - 300px);
    height: 100vh;
    display: flex;
    float: right;
    justify-content: center;
    background-color: #fffff;
`
const TextsContainer = Styled.div`
    width: calc(100% - 30%);
    height: 100vh;
    margin-top: 100px;
    float: right;
`

export default EndpointPage; 
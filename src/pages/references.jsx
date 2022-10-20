import Styled from "styled-components";
import SideBar from '../components/SideBar';
import TitleComponent from '../components/titleComponent';
import ParagraphComponent from '../components/paragraphComponent';
import CodeComponent from '../components/codeComponent';


function ReferencesPage() {

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

                    <TitleComponent text="Pré requisitos" />
                    <ParagraphComponent text="Para utilizar a API cliente em PHP, é preciso ter instalado e configurado um servidor WEB, com APACHE e PHP." />


                    <TitleComponent text="Começando" />
                    <ParagraphComponent text="O primeiro passo é ter disponível seu token e a url do sistema. Caso não tenha ainda: Configurando acesso ao Webservice API." />

                    <TitleComponent text="API Client 2.0" />
                    <ParagraphComponent text="A classe WebserviceClient sofreu algumas alterações recentes para corrigir problemas de códificação em requisições utilizando PHP. O código abaixo se trata do código atualizado da mesma." />

                    <br />
                    <br />

                    <CodeComponent {...headers} />

                    <br />
                    <br />

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

export default ReferencesPage; 
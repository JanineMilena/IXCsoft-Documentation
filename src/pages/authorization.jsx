import Styled from "styled-components";
import SideBar from '../components/SideBar';
import TitleComponent from '../components/titleComponent';
import ParagraphComponent from '../components/paragraphComponent';

function HomePage() {
    return (
        <>
            <SideBar />
            <ContentContainer >
                <TextsContainer>

                    <TitleComponent text="Autorização" />
                    <ParagraphComponent text="1 - Para gerar o token, é preciso ir em menu Configurações - Usuários - Usuários - Novo." />
                    <ParagraphComponent text="1.1 - As permissões e logs de usuários para o webservice funcionam da mesma forma que de um usuário logado no sistema, por conta disso, aconselhamos criar um grupo com as permissões especificas da integração e em seguida, vincular o usuário à esse grupo." />
                    <ParagraphComponent text="2 - Após clicar em Novo, este é o formulário que deverá ser preenchido. É de suma importância que seja marcada a opção 'Permite acesso ao webservice', tendo marcado essa opção, pode-se clicar no botão Salvar." />
                    <ParagraphComponent text="3 - Após Salvar, o Token será gerado automaticamente. Devido ao token se basear no ID e senha do usuário, caso for alterada a senha do usuário, automaticamente o token será alterado." />
                    <ParagraphComponent text="4 - Na aba Parâmetros recomendamos remover os filtros de filtrar setor e colaborador para o usuário da API caso a integração seja referente ao módulo de Ordens de Serviço." />

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
    margin-bottom: 100px;
    float: right;
`

export default HomePage; 
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

                    <TitleComponent text="Introdução" />
                    <ParagraphComponent text=" A sigla API corresponde às palavras em inglês “Application Programming Interface“. No português
                    “Interface de Programação de Aplicações” mas na prática o que significa isso? Uma API é um tipo de
                    'rota' ou 'ponte' que conecta duas aplicações, podendo ser utilizada pelos mais variados tipos de
                    negócio, empresas de diversos tamanhos ou nichos específicos de mercado. Desconhecer uma API é algo
                    extremamente normal. As APIs são invisíveis aos usuários finais, o que dificulta a percepção de sua
                    utilização para grande parte de seu público alvo, ficando acessível normalmente apenas por quem está
                    participando do processo de desenvolvimento, mas, mesmo tendo seu brilho ofuscado elas são muito
                    importantes para a realização de integrações e por que? Abaixo será listado 3 dos vários motivos
                    existentes para utilizar uma API na integração de um software." />


                    <TitleComponent text="Viabilização de parcerias" />
                    <ParagraphComponent text="Ninguém chega ao topo sozinho, o mundo dos negócios não é estático e justamente por isso que as
                    empresas devem ficar cada vez mais conectadas às novas tendências tecnológicas, uma API facilita
                    integrações o que gera boas oportunidades de negócios e viabiliza parcerias para ofertas de mais
                    recursos e funcionalidades ao usuário final." />


                    <TitleComponent text="Customização dos serviços" />
                    <ParagraphComponent text="Uma das principais vantagens da implantação de APIs nas empresas, é a possibilidade de oferecer
                    serviços e produtos personalizados para o usuário final. Através da integração das aplicações, é
                    fácil obter informações sobre o usuário sem que ele tenha que preencher nenhum formulário extenso e
                    cansativo toda vez que acessar uma aplicação diferente." />

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

export default HomePage; 
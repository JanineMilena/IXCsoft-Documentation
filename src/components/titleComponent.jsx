import Styled from "styled-components";

function TitleComponent(props) {
    return (
        <Title>{props.text}</Title>
    );
};

const Title = Styled.h1`
    margin-top: 20px;
    font-size: 32px;
    font-weight: bold;
    color: #2f3136;
`

export default TitleComponent;
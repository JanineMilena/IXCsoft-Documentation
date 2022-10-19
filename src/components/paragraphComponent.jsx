import Styled from "styled-components";

function ParagraphComponent(props) {
    return (
        <Paragraph>{props.text}</Paragraph>
    );
};

const Paragraph = Styled.p`
    margin-top: 20px;
    font-size: 22px;
    color: #2f3136;
`

export default ParagraphComponent;
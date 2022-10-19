import Styled from "styled-components";
import JSONPretty from 'react-json-pretty';

function CodeBlock(props) {

    return (
        <CodeContainer>
            <JSONPretty id="json-pretty" data={props}></JSONPretty>
        </CodeContainer>
    )
};

const CodeContainer = Styled.div`
    display: inline-block;
    padding: 20px 30px 20px 30px;
    border-radius: 10px;
    background-color: #E9EBF0;
`

export default CodeBlock; 
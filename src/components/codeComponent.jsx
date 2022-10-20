import Styled from "styled-components";
import JSONPretty from 'react-json-pretty';

function CodeComponent(props) {

    return (
        <CodeContainer>
            <JSONPretty id="json-pretty" data={props}></JSONPretty>
        </CodeContainer>
    )
};

const CodeContainer = Styled.div`
    padding: 20px 30px 20px 30px;
    margin-top: 30px;
    margin-bottom: 30px; 
    border-radius: 10px;
    display: inline-block;
    background-color: #E9EBF0;
`

export default CodeComponent; 
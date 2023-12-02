import styled, {keyframes} from "styled-components";

const Ghost = keyframes`
    0%{
        filter: blur(10px);
        opacity: 0;
    }
    50%{
        filter: blur(0px);
        opacity: 0.8;
    }
    100%{
        filter: blur(0px);
        opacity: 1;
    }
`;

const GhostBlink = styled.div`
    animation: ${Ghost} 2s ease-in-out 1 alternate;
`;

export default GhostBlink;
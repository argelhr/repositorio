import styled, { keyframes } from "styled-components";

const Neon = keyframes`
    0%{
        filter: blur(10px);
        opacity: 0;
    }
    10%{
        filter: blur(0px);
        opacity: 0;
    }
    20%{
        filter: blur(0px);
        opacity: 0.5;
    }
    30%{
        filter: blur(0px);
        opacity: 0;
    }
    35%{
        filter: blur(0px);
        opacity: 0.5;
    }
    40%{
        filter: blur(0px);
        opacity: 0;
    }
    45%{
        filter: blur(0px);
        opacity: 1;
        text-shadow: 0 0 10px red,
        0 0 20px blue;
    }
    50%{
        filter: blur(0px);
        opacity: 0;
    }
    60%{
        filter: blur(0px);
        opacity: 0.5;
    }
    70%{
        filter: blur(0px);
        opacity: 0;
    }
    80%{
        filter: blur(0px);
        opacity: 0.8;
    }
    90%{
        filter: blur(0px);
        opacity: 0.6;
    }
    100%{
        filter: blur(0px);
        opacity: 1;
    }
`;

const NeonBlink = styled.div`
    animation: ${Neon} 1s ease-in-out;
`;

export default NeonBlink;

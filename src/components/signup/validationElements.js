import styled from "styled-components/macro";


export const PasswordContainer = styled.div`
    text-align: left;
    padding: 30px 6rem;
    background: linear-gradient(45deg,#1a1a1a,#2e2e2e);
    -webkit-animation: gradientBG 20s ease infinite;
    background-size: 400% 400%;
    animation: gradientBG 20s ease infinite;

    @media screen and (max-width: 768px){
        padding: 20px 3rem;
    }
`;

export const PasswordTitle = styled.h1`
    color: #fff;
    font-size: 1.5rem;
    font-family: var(--roboto-font);

    @media screen and (max-width: 768px){
        font-size: 1.1rem;
    }
`

export const PasswordText = styled.ul`
    color: #808080;
    font-size: 1rem;
    line-height: 20px;
    list-style-type: none;

    @media screen and (max-width: 768px){
        font-size: 0.9rem;
    }
`

export const PasswordItems = styled.li`
    &.text-danger{
        color: rgba(255,73,94,1);
    }

    &.text-success{
        color: #32cd32;
    }
`
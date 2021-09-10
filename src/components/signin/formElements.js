import styled from 'styled-components/macro'
import {Link as LinkR} from 'react-router-dom'

export const FormContainer = styled.div`
    padding: 10px 0;
    display: flex;
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(-45deg,#010606,#1a1a1a,#2e2e2e,#080808);
    -webkit-animation: gradientBG 10s ease infinite;
    background-size: 400% 400%;
    animation: gradientBG 10s ease infinite;
    text-align: center;
    flex-direction: column;
    @-webkit-keyframes gradientBG {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    @keyframes gradientBG {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`

export const FormWrapper = styled.div`
    margin: 10rem auto;
`

export const FormH1 = styled.h1`
    font-family: var(--roboto-font);
    font-weight: normal;
    font-size: 4rem;
    color: #fff;
    margin-bottom: 10px;

    @media screen and (max-width: 768px){
       font-size: 2rem;
    }
`

export const FormH2 = styled.h2`
    font-family: var(--roboto-font);
    font-weight: normal;
    font-size: ${({textSizeH2}) => (textSizeH2 ? '2.5rem' : '4rem')};
    color: #808080;
    margin-bottom: 10px;

    @media screen and (max-width: 768px){
       font-size: 1rem;
    }
`

export const FormSubtitle = styled.p`
    font-family: var(--roboto-font);
    font-weight: normal;
    font-size: 1.2rem;
    margin: 2rem;
    padding-bottom: 0.2rem;
    color: #444;
    margin-bottom: 10px;

    @media screen and (max-width: 768px){
       margin: 1rem;
       padding-bottom: 0.1rem;
    }
`

export const FormInputFlied = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.2rem;

    @media screen and (max-width: 768px) {
        width: 80%;
        margin: 0 2rem;
    }
`

export const FormInput = styled.input`
    overflow-y: visible;
    width: 90%;
    height: 40px;
    background: none;
    border-image-source: linear-gradient(rgba(0, 51, 102, 0.5), rgba(0, 0, 51, 0.5));
    border-width: 5pt;
    border-image-slice: 1;
    outline: none;
    border: #808080 solid 1px;
    line-height: 1;
    font-size: 1rem;
    color: #ff495e;
    padding: 0 3rem;
    

    &::placeholder {
        color: #aaa;
        font-weight: 500;
    }

    &:focus{
        box-shadow: 0 0 5px var(--purple-color);
        border: 1px solid var(--purple-color);
    }

    @media screen and (max-width: 820px) {
        width: 100%;
        margin: 0 0 16px 0;
    }
`

export const FormBtn = styled.button`
    width: 100px;
    height: 40px;
    font-size: ${({textBtn}) => (textBtn ? '0.9rem' : '1rem')};
    border: none;
    cursor: pointer;
    background: linear-gradient(90deg, rgba(242,31,125,1) 0%, rgba(255,73,94,1) 100%);;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    margin: 10px 10px;
    transition: .5s;

    &:hover{
        background: rgba(255,73,94,1);
    }

    @media screen and (max-width: 820px) {
        width: 70px;
        height: 35px;
        font-size: ${({textBtn}) => (textBtn ? '0.6rem' : '0.7rem')};
    }
`

export const FormP = styled.p`
    font-family: var(--roboto-font);
    font-weight: normal;
    font-size: 1rem;
    color: #444;
`

export const FormLink = styled(LinkR)`
    text-decoration: none;
    font-family: var(--roboto-font);
    font-size: 1rem;
    font-weight: ${({weightTextBtn}) => (weightTextBtn ? '600' : 'normal')};
    color: ${({colorBtn}) => (colorBtn ? '#fff' : 'var(--pink-color)')};

    @media screen and (max-width: 820px) {
        font-size: ${({textLink}) => (textLink ? '0.6rem' : '1rem')};
    }
`

export const FormAlert = styled.div`
    text-align: center;
    padding: 20px;
    width: 30%;
    margin: 0 auto;
    color: ${({colorAlert}) => (colorAlert ? 'var(--pink-color)' : '#32cd32')};
    font-family: var(--roboto-font);
    font-size: 1.2rem;
    border: ${({colorAlert}) => (colorAlert ? 'var(--pink-color)' : '#32cd32')} solid 1px;

    @media screen and (max-width: 768px){
        font-size: 0.9rem;
        padding: 10px;
        margin-bottom: 1rem;
    }
`

export const FormForm = styled.form`
    
`

export const PasswordLine = styled.span`
    position: absolute;
    z-index: 1000;
    width: 10px;
    height: 10px;
`

export const FormRadio = styled.form`
    padding: 0.7rem;
    font-family: var(--roboto-font);
    color: #fff;
    font-size: 1.2rem;

    @media screen and (max-width: 768px){
        font-size: 0.8rem;
    }
`

export const FormRadioChecked = styled.input`
    margin: 10px;
    height: 15px;
    width: 15px;

    @media screen and (max-width: 768px){
        height: 12px;
        width: 12px;
        margin: 6px;
    }
`

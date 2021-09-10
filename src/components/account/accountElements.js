import styled from "styled-components/macro";

export const AccountContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    min-height: 100vh;
    text-align: center;
    background: linear-gradient(-45deg,#010606,#1a1a1a,#2e2e2e,#080808);
    -webkit-animation: gradientBG 10s ease infinite;
    background-size: 400% 400%;
    animation: gradientBG 10s ease infinite;
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

export const AccountH1 = styled.h1`
    font-family: var(--roboto-font);
    font-weight: normal;
    font-size: 4rem;
    padding: 10rem auto;
    color: #fff;

    @media screen and (max-width: 768px){
        font-size: 2rem;
    }
`

export const AccountPane = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
`

export const AccountList = styled.ul`
    color: #fff;
    font-size: 1rem;
    margin: 2rem;

    @media screen and (max-width: 768px){
        font-size: 0.7rem;
        margin: 0.3rem;
    }
    
`

export const AccountItems = styled.ul`
    list-style-type: none;
    color: #fff;
`

export const AccountBreak = styled.div`
    border: 0;
    height: 2px;
    width: 70rem;
    margin: 0 auto;
    background: #095484; 
    background-image: linear-gradient(to right, var(--pink-color), #095484, var(--pink-color));

    @media screen and (max-width: 1150px){
        width: 20rem;
    }
`

export const AccountTitle = styled.li`
    margin-top: 3rem;
    margin-bottom: 3rem;
    text-align: left;
    font-family: var(--roboto-font);
    font-size: 2.5rem;

    @media screen and (max-width: 768px){
        font-size: 1.2rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
`

export const AccountWrapper = styled.table`
    width: 70%;
    margin-bottom: 3rem;

    @media screen and (max-width: 768px){
        width: 80%;
        margin-bottom: 1rem;
        margin-left: ${({leftBgMobile}) => (leftBgMobile ? '5rem' : '0rem')};
    }
`

export const AccountFrame = styled.tr`
    
`

export const InfoP = styled.td`
    text-align: left;
    font-size: 1.2rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;

    @media screen and (max-width: 768px){
        padding-top: 1rem;
        padding-bottom: 1rem;
        font-size: 0.8rem;
    }
`

//radio button
export const InfoForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 20rem;
`

export const InfoRadio = styled.input`
    margin: 10px;
    height: 15px;
    width: 15px;

    @media screen and (max-width: 768px){
        margin: 5px;
        height: 10px;
        width: 10px;
    }
`

export const InfoRadioList = styled.label`
    font-size: 1.2rem;
    font-family: var(--roboto-font);
    font-weight: normal;

    @media screen and (max-width: 768px){
        font-size: 0.8rem;
    }
`

//toggle switch
export const ToggleWrapper = styled.label`
    position: relative;
`

export const ToggleInput = styled.input`
    position: absolute;
    left: -9999px;
    top: -9999px;
    
    &:checked + span {
        background: linear-gradient(90deg, rgba(10,5,102,1) 0%, rgba(56,56,182,1) 0%, rgba(247,37,133,1) 100%);

        &:before {
            left: calc(100% - 2px);
            transform: translateX(-100%);
        }
    }

    &:focus + span{
        box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
    }

    &:focus + span{
        box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
`

export const Slider = styled.span`
    display: flex;
    cursor: pointer;
    width: 50px;
    height: 25px;
    border-radius: 100px;
    background-color: #bfbfbf;
    position: relative;
    transition: background-color 0.2s, box-shadow 0.2s;

    &:before{
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 21px;
        height: 21px;
        border-radius: 21px;
        transition: 0.2s;
        background: #fff;
        box-shadow: 0 2px 4px;
    }

    &:active:before{
        width: 28px;
    }

    @media screen and (max-width: 768px){
        width: 30px;
        height: 15px;

        &:before{
        width: 10px;
        height: 10px;
        }

        &:active:before{
            width: 10px;
        }
    }
`

export const SelectedOption = styled.select`
    width: 15rem;
    font-size: 1.2rem;
    font-family: var(--roboto-font);
    font-weight: normal;
    border: none;

    @media screen and (max-width: 768px){
        width: 7rem;
        font-size: 0.8rem;
    }
`

export const ListOption = styled.option`
    font-size: 1.2rem;
    font-family: var(--roboto-font);
    font-weight: normal;

    @media screen and (max-width: 768px){
        font-size: 0.8rem;
    }
`
import styled from 'styled-components/macro'
import {Link as LinkR} from 'react-router-dom'

export const ForgotBtn = styled.button`
    width: 100px;
    height: 40px;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    background: linear-gradient(90deg, rgba(242,31,125,1) 0%, rgba(255,73,94,1) 100%);;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    margin: 10px 0;
    transition: .5s;

    &:hover{
        background: rgba(255,73,94,1);
    }

    @media screen and (max-width: 820px) {
        width: 70px;
        height: 35px;
        font-size: 0.8rem;
    }
`

export const ForgotChanelBtn = styled(LinkR)`
    width: 100px;
    height: 40px;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    background: linear-gradient(90deg, rgba(242,31,125,1) 0%, rgba(255,73,94,1) 100%);;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    margin: 10px 0;
    transition: .5s;

    &:hover{
        background: rgba(255,73,94,1);
    }

    @media screen and (max-width: 820px) {
        width: 70px;
        height: 35px;
        font-size: 0.8rem;
    }
`
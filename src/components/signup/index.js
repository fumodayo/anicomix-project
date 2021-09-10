import React, {useRef, useState} from 'react'
import {useAuth} from '../../contexts/AuthContext'
import { useHistory } from 'react-router-dom'
import usePasswordToggle from "./usePasswordToggle";

import{
    FormContainer,
    FormWrapper,
    FormH1,
    FormH2,
    FormInputFlied,
    FormInput,
    FormBtn,
    FormP,
    FormLink,
    FormAlert,
    FormForm,
    PasswordLine,
    FormRadio,
    FormRadioChecked
}
from '../signin/formElements'
import Validation from './validation'

export default function SignUp
({
    id,
    topLine,
    secondLine,
    buttonLabel,
    description1,
    description2,
    term,
    privacy,
    login,
    textSizeH2,
    textBtn
}) {

    const emailRef = useRef()
    const passwordRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()

        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/browse')
        } catch{
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    //validation input
    const isNumberReg = /\d/;
    const specialCharacterReg = /[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/; 
    const [password, setPassword] = useState('')
    
    const [passwordFocused, setPasswordFocused] = useState(false); 
    const [passwordValidity, setPasswordValidity] = useState({
        minChar: null,
        number: null,
        specialChar: null
    });

    const onChangePassword = password => {
        setPassword(password);

        setPasswordValidity({
            minChar: password.length >= 8 ? true : false,
            number: isNumberReg.test(password) ? true : false,
            specialChar: specialCharacterReg.test(password) ? true : false
        });
    };

    //icon show/hide password
    const [PasswordInputType, ToggleIcon] = usePasswordToggle();

    //radio button
    const [checked, setChecked] = useState(true);

    return (
        <>
            <FormContainer id={id}>
                <FormWrapper>
                    <FormH1>{topLine}</FormH1>
                    <FormH2 textSizeH2={textSizeH2}>{secondLine}</FormH2>
                    {error && <FormAlert variant='danger'>{error}</FormAlert>}
                    <FormForm onSubmit={handleSubmit}>
                        <FormInputFlied>
                            <FormInput 
                                name='email' 
                                type='email' 
                                placeholder='Your Email'
                                ref={emailRef}
                            />
                        </FormInputFlied>
                        <FormInputFlied>
                            <FormInput 
                                name='password' 
                                type={PasswordInputType}
                                placeholder='Password' 
                                value = {password}
                                ref={passwordRef}
                                onFocus={() => setPasswordFocused(true)}
                                onChange={e=> 
                                    onChangePassword(e.target.value)
                                }
                            />
                            <PasswordLine>{ToggleIcon}</PasswordLine>
                        </FormInputFlied>
                        {passwordFocused && (<Validation
                            validity={passwordValidity}/>)}
                        <FormBtn textBtn={textBtn} disabled={loading}>{buttonLabel}</FormBtn>

                        <FormRadio>
                            <FormRadioChecked
                                type='checkbox'
                                defaultChecked={checked}
                                onChange={() => setChecked(!checked)}
                            />
                                 Join our mailing list
                        </FormRadio>

                    </FormForm>
                    <FormP>{description1}</FormP>
                    <FormP>
                        <FormLink to='/signup'>{term}</FormLink>and 
                        <FormLink to='/signup'>{privacy}</FormLink>
                    </FormP>
                    <FormP> 
                        {description2}
                        <FormLink to='/signin'>{login}</FormLink>
                    </FormP>
                </FormWrapper>
            </FormContainer>
        </>
    )
}

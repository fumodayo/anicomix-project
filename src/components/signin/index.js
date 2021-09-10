import React, {useRef, useState} from 'react'
import {useAuth} from '../../contexts/AuthContext'
import { useHistory } from 'react-router-dom'

import{
    FormContainer,
    FormWrapper,
    FormH1,
    FormH2,
    FormSubtitle,
    FormInputFlied,
    FormInput,
    FormBtn,
    FormP,
    FormLink,
    FormAlert,
    FormForm
}
from './formElements'

export default function SignIn
({
    id,
    topLine,
    secondLine,
    subtitle,
    buttonLabel,
    description,
    forgotPassword,
    createAccount,
    textSizeH2,
    textBtn
}) {

    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()

        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/browse')
        } catch{
            setError("Failed to log in")
        }
        setLoading(false)
    }

    return (
            <FormContainer id={id}>
                <FormWrapper>
                    <FormH1>{topLine}</FormH1>
                    <FormH2 textSizeH2={textSizeH2}>{secondLine}</FormH2>
                    <FormSubtitle>{subtitle}</FormSubtitle>
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
                                type='password' 
                                placeholder='Password' 
                                autoComplete="off" 
                                ref={passwordRef}   
                            />
                        </FormInputFlied>
                        <FormBtn textBtn={textBtn} disabled={loading}>{buttonLabel}</FormBtn>
                    </FormForm>
                    <FormP> 
                        <FormLink to='/forgot-password'>{forgotPassword}</FormLink>
                    </FormP>
                    <FormP> 
                        {description}
                        <FormLink to='/signup'>{createAccount}</FormLink>
                    </FormP>
                </FormWrapper>
            </FormContainer>
    )
}

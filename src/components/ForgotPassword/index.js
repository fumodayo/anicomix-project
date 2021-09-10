import React, {useRef, useState} from 'react'
import {useAuth} from '../../contexts/AuthContext'
import { Navbar } from '../../components'
import { Footer } from '../../components'

import{
    FormContainer,
    FormWrapper,
    FormH1,
    FormH2,
    FormSubtitle,
    FormInputFlied,
    FormInput,
    FormAlert,
    FormForm,
    FormLink,
    FormBtn
}
from '../signin/formElements'

export default function ForgotPassword()
{

    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault()

        try{
            setMessage("")
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
        } catch{
            setError("Failed to reset password")
        }
        setLoading(false)
    }

    return (
        <>
            <Navbar/>
                <FormContainer>
                    <FormWrapper>
                        <FormH1>Sign In to AniComix</FormH1>
                        <FormH2 textSizeH2>Enter your email address and password to access your account.</FormH2>
                        <FormSubtitle>Please enter the email address you gave us when you registered and we'll email 
                            you a link so you can create a new password.
                        </FormSubtitle>
                        {error && <FormAlert colorAlert variant='danger'>{error}</FormAlert>}
                        {message && <FormAlert variant="success">{message}</FormAlert>}
                        <FormForm onSubmit={handleSubmit}>
                            <FormInputFlied>
                                <FormInput 
                                    name='email' 
                                    type='email' 
                                    placeholder='Email address'
                                    ref={emailRef}
                                />
                            </FormInputFlied>
                            <FormBtn disabled={loading}>
                                <FormLink 
                                    colorBtn
                                    weightTextBtn
                                    textLink
                                    to='/signin'
                                >
                                Chanel</FormLink>
                            </FormBtn>
                            <FormBtn disabled={loading}>send</FormBtn>
                        </FormForm>
                    </FormWrapper>
                </FormContainer>
            <Footer/>
        </>
    )
}

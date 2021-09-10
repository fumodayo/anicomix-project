import React from 'react'
import {Footer} from '../components'
import {Navbar} from '../components'
import {SignUp} from '../components'
import { signUpPage } from '../fixtures/data';

export default function SignUpPage() {
    return (
        <>
            <Navbar/>
            <SignUp {...signUpPage}/>
            <Footer/>
        </>
    )
}
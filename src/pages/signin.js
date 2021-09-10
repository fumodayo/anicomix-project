import React from 'react'
import {Footer} from '../components'
import {Navbar} from '../components'
import {SignIn} from '../components'
import { signInPage } from '../fixtures/data';

export default function SignInPage() {
    return (
        <>
            <Navbar/>
            <SignIn {...signInPage}/>
            <Footer/>
        </>
    )
}

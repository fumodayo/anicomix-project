import React from 'react'
import { Navbar } from '../components'
import {Hero} from '../components'
import { InfoSection } from '../components'
import { Footer } from '../components'
import { homeObjOne } from '../fixtures/data'

export default function HomePage(){
    return (
        <>
            <Navbar/>
            <Hero />
            <InfoSection {...homeObjOne}/>
            <Footer/>
        </>
    )
}

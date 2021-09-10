import React, {useState} from 'react'
import Video from '../../videos/8k.mp4'
import {Button} from '../../globalStyles'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroSpan,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
}
from './heroElements'

export default function HeroSection() {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <>
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/> 
            </HeroBg>
            <HeroContent>
                <HeroH1><HeroSpan>Ani</HeroSpan>Comix</HeroH1>
                <HeroP>Welcome to new world!</HeroP>
                <HeroBtnWrapper>
                    <Button to='/signin' 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover} 
                    >
                        Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
        </>
    )
}

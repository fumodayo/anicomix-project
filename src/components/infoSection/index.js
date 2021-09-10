import React from 'react'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrap,
    Img,
    TopLetter,
    Mark
 } from './infoElements'

export default function InfoSection 
({  lightBg,
    id,
    imgStart,
    topLine,
    letter,
    headLine,
    mark,
    darkText,
    description,
    video,
    alt
}){
    return (
        //obj => true 
        //obj ={obj} => false
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine><TopLetter>{letter}</TopLetter>{topLine}</TopLine>
                                <Heading><Mark>{headLine}</Mark>{mark}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img autoPlay loop muted src={video} type='video/mp4' alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

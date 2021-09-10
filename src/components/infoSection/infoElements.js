import styled from "styled-components/macro";

export const InfoContainer = styled.div`
    color: #fff;
    padding: 10px 0;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768px){
        padding: 80px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)} ;

    @media screen and (max-width: 1000px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`) };
    }
`

export const Column1 = styled.div`
    margin-top: 70px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.h1`
    color: #6d1283;
    font-family: var(--righteous-font);
    font-size: 40px;
    line-height: 0px;
    font-weight: normal;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-left: 60px;
    
    @media screen and (max-width: 480px){
        font-size: 30px;
    }
`

export const TopLetter = styled.span`
    font-weight: normal;
    line-height: 0px;
    text-transform: uppercase;
    margin-bottom: 16px;
    font-size: 80px;
    font-family: var(--righteous-font);
    color: #2e34a6;
    font-weight: 100;

    @media screen and (max-width: 480px){
        font-size: 50px;
    }
`

export const Heading = styled.h2`
    font-weight: normal;
    font-family: var(--righteous-font);
    margin-bottom: 24px;
    font-size: 144px;
    line-height: 0;
    color: #440a7b;

    @media screen and (max-width: 480px){
        font-size: 100px;
    }
`

export const Mark = styled.span`
    margin-bottom: 24px;
    font-weight: normal;
    font-family: var(--righteous-font);
    font-size: 80px;
    line-height: 1.1;
    font-weight: 600;
    font-weight: 100;
    background-color: #746D69;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 

//color
    &:hover{
        animation: rainbow-text-animation 0.5s ease forwards;
        background: conic-gradient(
        #CA4246 16.666%, 
        #E16541 16.666%, 
        #E16541 33.333%, 
        #F18F43 33.333%, 
        #F18F43 50%, 
        #8B9862 50%, 
        #8B9862 66.666%, 
        #476098 66.666%, 
        #476098 83.333%, 
        #A7489B 83.333%);
  
        /* Set thee background size and repeat properties. */
        background-size: 57%;
        background-repeat: repeat;
  
        /* Use the text as a mask for the background. */
        /* This will show the gradient as a text color rather than element bg. */
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
  
        /* Animate the text when loading the element. */
        /* This animates it on page load and when hovering out. */
        animation: rainbow-text-animation-rev 0.5s ease forwards;

        cursor: pointer;
    }

    @keyframes rainbow-text-animation {
        0% {
            background-size: 57%;
            background-position: 0 0;
        }
        20% {
            background-size: 57%;
            background-position: 0 1em;
        }
        100% {
            background-size: 300%;
            background-position: -9em 1em;
        }
    }

/* Move the background and make it smaller. */
/* Animation shown when entering the page and after the hover animation. */
    @keyframes rainbow-text-animation-rev {
        0% {
            background-size: 300%;
            background-position: -9em 1em;
        }
        20% {
            background-size: 57%;
            background-position: 0 1em;
        }
        100% {
            background-size: 57%;
            background-position: 0 0;
        }
    }

    @media screen and (max-width: 480px){
        font-size: 55px;
    }
`

export const Subtitle = styled.p`
    font-family: var(--roboto-font);
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`
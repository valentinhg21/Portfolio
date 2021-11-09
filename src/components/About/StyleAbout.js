import styled from "styled-components";

const media = {
  mobile: "@media (max-width: 575.98px)and (orientation:portrait)",
  tablet: "@media (min-width: 576px) and (max-width: 1024px)",
  notebook: "@media (min-width: 1025px) and (max-width: 1280px)",
  desktop: "@media (min-width: 1281px)",
};

export const AboutContainer = styled.div`
    background: #0a0d22;
    width: 100%;
    min-height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const AboutTitle = styled.h1`
    font-size: 3rem;
    transition: .25s all ease-in-out;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    ${media.mobile}{
        font-size: 2.5rem;
    }
    ${media.tablet}{
        font-size: 2.7rem;
    }
`


export const AboutContent = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-gap: 2rem;
   max-width: 1420px;
   width: 100%;
   min-height: 50vh;
   ${media.mobile}{
    grid-template-columns: 1fr;

   }

   ${media.tablet}{
    grid-template-columns: 1fr;

   }

`
export const AboutImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

`

export const AboutDescription = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 2rem;
    ${media.mobile}{
        align-items: center;
        padding-left: 0rem;
    }
    ${media.tablet}{
        align-items: center;
        padding-left: 0rem;
    }
`
export const AboutDescriptionTitle = styled.h2`
    font-size: 2rem;
    letter-spacing: .1;
    ${media.mobile}{
        font-size: 1.8rem;

    }

    ${media.tablet}{
        font-size: 1.9rem;

    }
    ${media.notebook}{
        font-size: 1.9rem;

    }
`

export const AboutDescriptionContent = styled.p`
    margin-top:1.2rem;
    margin-bottom: 1.2rem;
    line-height: 1.3rem;
    font-size: 1rem;
    ${media.mobile}{
        text-align: center;
        font-size: .8rem;
    }
    ${media.tablet}{
        width: 90%;
        text-align: center;
        font-size: .9rem;

    }
    ${media.notebook}{
        width: 80%;
        font-size: .9rem;
    }
`


export const AboutButton = styled.a`
    background: #a63fda;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    font-size: .9rem;
    color: white;
    text-decoration: none;
    padding-top: .5rem;
    padding-bottom: .5rem;
    border-radius: 20px;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: .5rem;
    margin-bottom: .5rem;
    transition: .25s all ease-in-out;
    &:hover{
        background: #ac1bf5;
    }

    ${media.mobile}{
        text-align: center;
        font-size: .7rem;
    }
    ${media.tablet}{
        text-align: center;
        font-size: .8rem;
    }

    ${media.notebook}{
        font-size: .9rem;
    }
`




export const ImageAbout = styled.img`
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    transition: .25s all ease-in-out;
    ${media.mobile}{
        width: 80%;
    }

    ${media.tablet}{
        width: 60%;
    }
    ${media.notebook}{
        width: 85%;
    }
`

//#1b163b;
//0a0d22;
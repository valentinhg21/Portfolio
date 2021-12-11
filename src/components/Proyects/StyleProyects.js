import styled from "styled-components";
import { media } from "../../StyledGeneral/StyledGeneral"

export const ProyectsContainer = styled.div`
    padding-top: 5rem;
    background: #0a0d22;
    width: 100%;
    min-height: 90vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    ${media.mobile}{
        padding-top: 5rem;
    }
    ${media.tablet}{
        padding-top: 5rem;
    }
`

export const ProyectsTitle = styled.h1`
    font-size: 3rem;
    transition: .25s all ease-in-out;
    letter-spacing: 0.1rem;
    color: #fff;
    ${media.mobile}{
        font-size: 2.5rem;
    }
    ${media.tablet}{
        font-size: 2.7rem;
    }
`

export const ProyectosContent = styled.div` 
    max-width: 1420px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 100%;

`

export const ProyectsFilter = styled.div`
    padding-top: .5rem;
    padding-bottom: .5rem;
    width: 100%;

`

export const ProyectsList = styled.div`
    margin-top: 2rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    ${media.mobile}{
        margin-top: 0rem;
        grid-template-columns: repeat(1, 1fr);
    }
    ${media.tablet}{
        margin-top: 2rem;
        grid-template-columns: repeat(2, 1fr);
    }
`
export const ProyectButton = styled.button`

    background: #ac1bf5;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 40px;
    font-size: .9rem;
    color: white;
    text-decoration: none;
    padding-top: .5rem;
    padding-bottom: .5rem;
    border-radius: 20px;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 5rem;
    transition: .25s all ease-in-out;
    border: none;
    cursor: pointer;
    &:hover{
        background: #9400df;
    }

`
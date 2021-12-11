import styled from "styled-components";
import { media } from "../../StyledGeneral/StyledGeneral";


export const ItemContainer = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;

`

export const ItemCard = styled.a`
    background: #171630;
    max-width: 300px;
    width: 100%;
    height: 300px;
    margin-top: 2rem;
    margin-bottom: 0rem;
    border-radius: .2rem;
    text-decoration: none;
    padding: 1.2rem;
    /* transition: .25s ease; */
    position: relative;
    ${media.mobile}{
        margin-top: 4rem;
    }
    ${media.tablet}{
        margin-top: 2rem;
    }
`

export const CardHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-content: center;
`

export const CardBody = styled.div`
    
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
`
export const CardTitle = styled.h2`
    color: #fff;
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    transition: .3s all ease;

    &:hover{
        color: #b72ffc;
    }
`

export const CardDescription = styled.p`
    line-height: 1.2rem;
    font-weight: normal;
    font-size: .8rem;
    color: #fff;
`

export const CardFooter = styled.div`
    position: absolute;
    bottom: 2rem;
    display: flex;


    color: #b72ffc !important;
`

export const CardTecnology = styled.p`
    font-size: .8rem;
    color: #b72ffc !important;
    margin-right: .5rem;
    &:hover{
        color: black;
    }
`
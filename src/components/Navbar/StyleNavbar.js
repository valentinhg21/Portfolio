import styled from "styled-components";

const media = {
    mobile: '@media (max-width: 575.98px)and (orientation:portrait)',
    tablet: '@media (min-width: 576px) and (max-width: 1024px)',
    notebook: '@media (min-width: 1025px) and (max-width: 1280px)',
    desktop: '@media (min-width: 1281px)'
}




export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  justify-content: center;
  align-items: center;
  z-index: 90;
  transition: .8s all ease-in-out;
  /* MOBILE */
  ${media.mobile} {
    background: #ab03ff;
    padding-top: 0rem;
    padding-bottom: 0rem;
  }
  /* LAPTOS AND IPADS */
  ${media.tablet} {
    background: #ab03ff;
    padding-top: 0rem;
    padding-bottom: 0rem;
  }
`

export const ContainerContent = styled.div`
  position: relative;
  padding-top: .5rem;
  padding-bottom: .5rem;
  max-width: 1420px;
  width: 100%;
  display: inline-flex;
  align-items: center;
  ${media.mobile} {
    padding-top: 4px;
    padding-bottom: 4px;
  }
  ${media.tablet} {
    padding-top: 4px;
    padding-bottom: 4px;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 90;
`;

export const ContainerMenu = styled.div`
  position: absolute;
  float: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  transition: .8s all ease-in-out;
  ${media.desktop}  {
      display: none;
  }

  ${media.notebook}{
    display: none;
  }
`;

export const ContainerItems = styled.div`
  position: absolute;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  /* MOBILE */
  ${media.mobile} {
    margin-top: 18rem;
  }
  /* TABLETS AND IPADS */
  ${media.tablet} {
    margin-top: 18rem;
  }

  
`;

export const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  /* MOBILE */
  /* TABLETS AND IPAD */
  ${media.mobile} {
        width: 100%;
        flex-direction: column;
        justify-content: center;
        background: #ab03ff;
  }

  ${media.tablet} {
    width: 100%;
        flex-direction: column;
        justify-content: center;
        background: #ab03ff;
  }

`;

export const ItemList = styled.li`
  padding-top: 2px;
  padding-bottom: 2px;
  margin-right: 1.2rem;
  cursor: pointer;
  width: 8%;
  ${media.mobile} {
      width: 100%;
      justify-content: center;
      flex-direction: column;
      margin-top: .2rem;
      margin-bottom: .2rem;
  }
  ${media.tablet} {
    width: 100%;
      justify-content: center;
      flex-direction: column;
      margin-top: .2rem;
      margin-bottom: .2rem;
  }

  ${media.notebook}{
    width: 10%;
  }

`;

export const Link = styled.a`
  text-decoration: none;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s all ease-out;
  border-radius: 50px;
  padding: 8px;
  width: 100%;
  &:hover {
    background-color: white;
    color: black;
  }

  ${media.mobile}{
    border-radius: 0px;
  }
  ${media.tablet}{
    border-radius: 0px;
  }
`

export const LinkLogo = styled.a`
  text-decoration: none;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s all ease-out;
  border-radius: 50px;
  padding: 8px;
  width: 100%;
`
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: fixed;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 6vh;
  @media (max-width: 575.98px)and (orientation:portrait) {
      background-color: black;
      min-height: 3vh;
      padding-top: 4px;
      padding-top: 4px;
    }
`;

export const ContainerContent = styled.div`
  position: relative;
  padding-top: 2rem;
  padding-bottom: 2rem;
  max-width: 1420px;
  width: 100%;
  display: inline-flex;
  align-items: center;
  @media (max-width: 575.98px)and (orientation:portrait) {
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

`;

export const ContainerItems = styled.div`
  position: absolute;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  /* MOBILE */
  @media (max-width: 575.98px)and (orientation:portrait) {
        margin-top: 20rem;
  }
  
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  @media (max-width: 575.98px)and (orientation:portrait) {
        width: 100%;
        flex-direction: column;
        justify-content: center;
        background: black;
  }
`;

export const ItemList = styled.li`
  padding-top: 2px;
  padding-bottom: 2px;
  margin-right: 1.2rem;
  cursor: pointer;
  width: 8%;
  @media (max-width: 575.98px)and (orientation:portrait) {
      width: 100%;
      justify-content: center;
      flex-direction: column;
      margin-top: .2rem;
      margin-bottom: .2rem;
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

  @media (max-width: 575.98px)and (orientation:portrait) {
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
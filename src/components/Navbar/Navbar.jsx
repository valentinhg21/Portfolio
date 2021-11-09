import { useState, useEffect} from "react";

import { RiCodeSSlashFill } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

import {
  NavbarContainer,
  ContainerItems,
  ContainerContent,
  List,
  ContainerLogo,
  ItemList,
  ContainerMenu,
  Link,
  LinkLogo,
} from "./StyleNavbar";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [scrollY, setScrollY] = useState(window.scrollY)
  // Navbar change
  const handleToggle = () => setToggle(!toggle);


  
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    const changeScrollY = () => {
      setScrollY(window.scrollY);
    }
    

    window.addEventListener('resize', changeWidth)
    window.addEventListener('scroll', changeScrollY)
    return () => {
        window.removeEventListener('resize', changeWidth)
        window.removeEventListener('scroll', changeScrollY)
    }
  }, []) 
  // Animations
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };




  return (
    <NavbarContainer className={(scrollY > 80) && 'onScroll'}>
      <ContainerContent>
        <ContainerLogo>
          <LinkLogo href="!#">
            <RiCodeSSlashFill className="Navbar__Logo" />
          </LinkLogo>
        </ContainerLogo>
        <ContainerMenu >
          {toggle ? (
            <FaTimes className="Navbar__Logo-menu" onClick={handleToggle} />
          ) : (
            <FaBars className="Navbar__Logo-menu" onClick={handleToggle} />
          )}
        </ContainerMenu>
        {(toggle || screenWidth > 1024) && (
          <ContainerItems
            as={motion.div}
            initial={animateFrom}
            animate={animateTo}
          >
            <List>
              <ItemList>
                <Link href="!#" onClick={handleToggle}>
                  Inicio
                </Link>
              </ItemList>
              <ItemList>
                <Link href="!#" onClick={handleToggle}>
                  Sobre mi
                </Link>
              </ItemList>
              <ItemList>
                <Link href="!#" onClick={handleToggle}>
                  Habilidades
                </Link>
              </ItemList>
              <ItemList>
                <Link href="!#" onClick={handleToggle}>
                  Proyectos
                </Link>
              </ItemList>
              <ItemList>
                <Link href="!#" onClick={handleToggle}>
                  Contacto
                </Link>
              </ItemList>
            </List>
          </ContainerItems>
        )}
      </ContainerContent>
    </NavbarContainer>
  );
};

export default Navbar;

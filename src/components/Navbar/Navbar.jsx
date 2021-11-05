import { useState } from "react";

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

  const handleToggle = () => setToggle(!toggle);
  const animateFrom = {opacity: 0, y: -40}
  const animateTo = {opacity: 1, y: 0}
  return (
    <NavbarContainer>
      <ContainerContent>
        <ContainerLogo>
          <LinkLogo href="!#">
            <RiCodeSSlashFill className="Navbar__Logo" />
          </LinkLogo>
        </ContainerLogo>
        <ContainerMenu>
          {!toggle ? (
            <FaBars className="Navbar__Logo-menu" onClick={handleToggle}
            />
          ) : (
            <FaTimes className="Navbar__Logo-menu" onClick={handleToggle}/>
          )}
        </ContainerMenu>
        {toggle && (
          <ContainerItems
            as={motion.div}
            initial={animateFrom}
            animate={animateTo}
          >
            <List>
              <ItemList>
                <Link href="!#" onClick={handleToggle}>Inicio</Link>
              </ItemList>
              <ItemList>
                <Link href="!#" onClick={handleToggle}>Sobre mi</Link>
              </ItemList>
              <ItemList>
                <Link href="!#" onClick={handleToggle}>Habilidades</Link>
              </ItemList>
              <ItemList>
                <Link href="!#" onClick={handleToggle}>Proyectos</Link>
              </ItemList>
              <ItemList>
                <Link href="!#" onClick={handleToggle}>Contacto</Link>
              </ItemList>
            </List>
          </ContainerItems>
        )}
      </ContainerContent>
    </NavbarContainer>
  );
};

export default Navbar;

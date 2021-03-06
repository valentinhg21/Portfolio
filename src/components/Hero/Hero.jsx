import { HeroContainer, ContainerHero,TitleName,Ocupation, Circle, FadeBottom } from "./StyleHero.js";
import { IoMdArrowRoundDown } from "react-icons/io";


const Hero = () => {



  
  return (
    <>
    <HeroContainer className="HeroContainer" id="inicio">
        <ContainerHero>
            <TitleName>Valentín Gutiérrez</TitleName>
            <Ocupation>Desarrollador Web </Ocupation>
            <Circle href="#sobremi">
                <IoMdArrowRoundDown className="Hero__arrow"/>
            </Circle>
        </ContainerHero>
        <FadeBottom />
    </HeroContainer>

    </>
  );
};

export default Hero;

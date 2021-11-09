import { HeroContainer, ContainerHero,TitleName,Ocupation, Circle, FadeBottom } from "./StyleHero.js";
import { IoMdArrowRoundDown } from "react-icons/io";


const Hero = () => {
  return (
    <>
    <HeroContainer className="HeroContainer">
        <ContainerHero>
            <TitleName>Valentín Gutiérrez</TitleName>
            <Ocupation>Desarrollador Web </Ocupation>
            <Circle>
                <IoMdArrowRoundDown className="Hero__arrow"/>
            </Circle>
        </ContainerHero>
        <FadeBottom />
    </HeroContainer>

    </>
  );
};

export default Hero;

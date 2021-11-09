import {
  AboutContainer,
  AboutContent,
  AboutImage,
  AboutDescription,
  AboutDescriptionTitle,
  AboutDescriptionContent,
  AboutButton,
  ImageAbout,

  AboutTitle
} from "./StyleAbout";
import About3 from '../../img/about4.png'
import { RiArrowDownSLine } from "react-icons/ri";

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>Sobre mi</AboutTitle>
      <AboutContent>
        <AboutDescription>
          <AboutDescriptionTitle>Freelancer</AboutDescriptionTitle>
          <AboutDescriptionContent>
            Mi nombre es Valentín, soy desarollador web y me considero un
            apasionado a las nuevas tecnologias. Me encanta construir paginas
            actractivas para el usuario. Chequea mi portfolio para ver mis
            trabajos realizados.
          </AboutDescriptionContent>
          <AboutButton href="!#">
            Portfolio
            <RiArrowDownSLine className="IcoNButtonAbout"/>
          </AboutButton>
        </AboutDescription>
        <AboutImage>
            <ImageAbout src={About3} alt="About" />
        </AboutImage>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;

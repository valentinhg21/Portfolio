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
    <AboutContainer id="sobremi">
      <AboutTitle>Sobre <span className="Highlight">mi</span></AboutTitle>
      <AboutContent>
        <AboutDescription>
          <AboutDescriptionTitle>FreeLancer</AboutDescriptionTitle>
          <AboutDescriptionContent>
            ¡Hola! Mi nombre es Valentín y soy un apasionado a las nuevas tecnologias.
            Mi interés en el desarollo web comenzó en 2020 cuándo decidí en entrar al mundo de la programación.
            De forma autodidacta aprendi mucho de <span className="Highlight">HTML CSS y JAVASCRIPT.</span><br />

            Avance muy rápido hasta el día de hoy y tuve el privilegio en trabajar de forma freelance para una 
            empresa emergente desarrollando paginas web en <span className="Highlight">WORDPRESS.</span><br />

            Mi enfoque principal en estos dias es crear experiencias de usuarios únicas para una variedad de clientes. <br/>
            Pueden chequear mi portfolio para ver mis últimos proyectos.<br />
          </AboutDescriptionContent>
          <AboutButton href="#proyectos">
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

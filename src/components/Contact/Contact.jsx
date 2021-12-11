import { ContactContainer, ContactTitle, ContactDesc, ContactButton, SocialContainer, SocialLinks} from './StyleContact'
import { BsFillChatSquareTextFill, BsGithub, BsLinkedin} from 'react-icons/bs'
const Contact = () => {
    const linkedin = "https://www.linkedin.com/in/carlos-valentin-huanca-gutierrez-7098151a9/";
    const github = "https://github.com/valentinhg21";
    return (
        <ContactContainer id="contacto">
            <ContactTitle>Contactate <span className="Highlight">conmigo!</span></ContactTitle>
            <ContactDesc>
                Si te interesa mi perfil, no dudes en contactarte conmigo.<br/>
                
            </ContactDesc>
            <SocialContainer>
                <SocialLinks href={linkedin} target="_blank">
                    <BsLinkedin />
                </SocialLinks>
                <SocialLinks href={github} target="_blank">
                    <BsGithub />
                </SocialLinks>
                
            </SocialContainer>
            <ContactButton href="mailto:valen21hg@outlook.com?subject=&body=Body">
                    Contacto
                <BsFillChatSquareTextFill className="IcoNButtonContact"/>
            </ContactButton>
        </ContactContainer>
    )
}

export default Contact

import styled from "styled-components";
import { media } from "../../StyledGeneral/StyledGeneral";

export const ContactContainer = styled.div`
  background: #0a0d22;
  padding-top: 5rem;
  padding-bottom: 5rem;
  min-height: 50vh;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const ContactTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  ${media.mobile}{
        font-size: 2.5rem;
    }
    ${media.tablet}{
        font-size: 2.7rem;
    }
`;
export const ContactDesc = styled.p`
  line-height: 1.8rem;
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  ${media.mobile}{
    width: 85%;
        text-align: center;
        font-size: .8rem;
        line-height: 1.3rem;
    }
    ${media.tablet}{
        width: 90%;
        text-align: center;
        font-size: .9rem;
        line-height: 1.7rem;
    }
    ${media.notebook}{
        width: 80%;
        font-size: .9rem;
    }
`;

export const SocialContainer = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

export const SocialLinks = styled.a`
  text-decoration: none;
  color: #fff;
  margin-right: .5rem;
  margin-left: .5rem;
  font-size: 2rem;
   transition: .3s all ease-in-out;
  &:hover{
      color: #ac1bf5;
  }
`;

export const ContactButton = styled.a`
  background: #ac1bf5;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 50px;
  font-size: 1rem;
  color: white;
  text-decoration: none;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 20px;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  transition: 0.25s all ease-in-out;
  cursor: pointer;

  &:hover {
    background: #9400df;
  }
`;

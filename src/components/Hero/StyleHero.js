import styled, { keyframes } from "styled-components";

const media = {
  mobile: "@media (max-width: 575.98px)and (orientation:portrait)",
  tablet: "@media (min-width: 576px) and (max-width: 1024px)",
  notebook: "@media (min-width: 1025px) and (max-width: 1280px)",
  desktop: "@media (min-width: 1281px)",
};

export const HeroContainer = styled.div`
  background-image: url("https://i.ibb.co/ZWNTSN8/Hero.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.7));
  }
`;

// MAIN
export const ContainerHero = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleName = styled.h1`
  color: white;
  font-size: 4.5rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  ${media.mobile}{
    text-align: center;
    font-size: 4rem;
    line-height: 4rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  ${media.tablet}{
    text-align: center;
    font-size: 4.2rem;
    margin-top: 1rem;
    line-height: 5rem;
    margin-bottom: 1rem;
  }
`;
export const Ocupation = styled.p`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.1rem;
  ${media.mobile}{
    text-align: center;
    font-size: 1.2rem;
  }
  ${media.tablet}{
    text-align: center;
    font-size: 1.3rem;
  }
`;

export const Circle = styled.div`
  margin-top: 2rem;
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.25s all ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const FadeBottom = styled.div`
  width: 100%;
  height: 6rem;
  position: absolute;
  bottom: 0;
  display: block;
  background: linear-gradient(
    to top,
    #0a0d22,
    transparent
  );
`;

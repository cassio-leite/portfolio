import styled, { keyframes } from "styled-components";
import { media } from "../../styles/media";

const rotate = keyframes`
    to {
    transform: rotate(360deg);
}
`;

export const AboutSection = styled.section`
    background: linear-gradient(to right, #1f232c, #1f232c);
    padding: 4rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    ${media.tablet`
    flex-direction: row;
    padding: 6rem 4rem;
`}

    ${media.desktop`
    padding: 8rem 6rem;
`}
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${media.tablet`
    flex-direction: row;
    gap: 9rem;
`}
`;

export const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 20rem;
    z-index: 2;

    ${media.tablet`
        max-width: 30rem;
    `}
`;

export const BackgroundAnimation = styled.div`
    position: absolute;
    top: -10px;
    left: -10px;
    width: 100%;
    height: 100%;
    border: 3px solid var(--cor-primaria);
    animation: ${rotate} 10s linear infinite;
    z-index: 1;
`;

export const ProfileImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 3%;
    position: relative;
    z-index: 2;
`;

export const CurriculoBtn = styled.div`
    margin-top: 2rem;
    z-index: 2;
    position: relative;

    a {
    font-family: "Open Sans", sans-serif;
    background: linear-gradient(to right, #17d396, #07f7f7);
    box-shadow: 0 0 20px rgba(22, 213, 156, 0.7);
    color: #fff;
    display: inline-block;
    font-size: 1.4rem;
    font-weight: 700;
    padding: 1.4rem 2.2rem;
    text-align: center;
}
`;

export const Info = styled.div`
    line-height: 2.5rem;
    max-width: 600px;
    margin-top: 3rem;

    ${media.tablet`
    margin-top: 0;
`}
`;

export const SectionTitle = styled.h2`
    font-family: "Open Sans", sans-serif;
    background: linear-gradient(to right, #00f298, #07f7f7);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    text-transform: uppercase;
`;

export const Paragraph = styled.p`
    font-family: "Open Sans", sans-serif;
    color: #ffffff;
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 2.4rem;
    margin-top: 2rem;
`;

export const ProfileMenu = styled.ul`
    font-family: "Open Sans", sans-serif;
    font-size: 1.4rem;
    color: #ffffff;
    margin-top: 1rem;
    list-style: none;
    span {
    font-weight: 700;
    color: var(--cor-primaria);
    text-transform: uppercase;
}
`;

export const WhatsAppButton = styled.button`
    font-family: "Open Sans", sans-serif;
    background-image: linear-gradient(to right, #006175 0%, #00a950 100%);
    border-radius: 4rem;
    box-sizing: border-box;
    color: #00a84f;
    height: 5rem;
    font-size: 1em;
    padding: 4px;
    width: 100%;
    max-width: 17em;
    margin-top: 1rem;
    z-index: 2;

    &:hover {
    color: #fff;
}

    span {
    align-items: center;
    background: #0e0e10;
    border-radius: 4rem;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    transition: background 0.5s ease;
}

    &:hover span {
    background: transparent;
}
`;

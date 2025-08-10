import styled, { css, keyframes } from 'styled-components';
import { media, sizes } from '../../styles/media';

const typing = keyframes`
    from { width: 0; }
    to { width: 100%; }
`;

const blink = keyframes`
    from, to { border-color: transparent; }
    50% { border-color: white; }
`;

export const HomeSection = styled.section`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: center;
    color: white;
    padding: 30px;
    position: relative;
    padding-bottom: 50px;

    ${media.mobile`
    padding: 0 25%;
    align-items: flex-start;
`}
`;

export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 60rem;
    gap: 0.5rem;
    z-index: 1;
`;

export const HomeVideo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;

    background-image: url('./assets/images/programe.png');
    background-size: cover;
    background-position: center;
    
    video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: ${sizes.tablet / 16}em) {
    video {
    display: none;
    }
}
`;

export const AnimatedText = css`
    overflow: hidden;
    border-right: solid #ffffff;
    width: 0;
    animation: ${typing} 3s steps(30) 1s forwards, ${blink} 0.75s step-end infinite;
`;

export const HomeTitle = styled.h1`
    font-family: "Open Sans", sans-serif;
    font-size: 5rem;
    font-weight: 300;
    margin: 0;
    ${AnimatedText}

    ${media.tablet`
    font-size: 10rem;
    `}
`;

export const HomeSubtitle = styled.h2`
    font-size: 2.5rem;
    ${AnimatedText}
    ${media.tablet`
    font-size: 4rem;
`}
    ${media.mobile`
    font-size: 3rem;
`}
`;
export const HomeParagraph = styled.p`
    font-family: "Open Sans", sans-serif;
    font-size: 2.5rem;
    font-weight: 300;
    margin-top: 1rem;
    ${AnimatedText}
`;

export const BoldText = styled.span`
    font-weight: 600;
`;

export const SocialMediaLinks = styled.div`
    display: flex;
    margin-top: 1rem;
    z-index: 1;

    a {
    font-size: 1.8rem;
    display: inline-block;
    width: 40px;
    height: 40px;
    text-align: center;
    margin: 10px 4px 0;
    border-radius: 50%;
    transition: all 0.3s ease;
    text-decoration: none;
    box-shadow: 3px 3px #07228f, -3px -3px 3px #022647;

    i {
    color: #ffffff;
    line-height: 40px;
    transition: all 0.3s ease;
    }

    &:hover i {
    color: #00d3ff;
    }
}
`;
import styled from 'styled-components';
import { media } from '../../styles/media';

export const InterestsSection = styled.section`
    display: flex;
    flex-direction: column;
    background: linear-gradient(to left, #323648);
    padding: 30px;
    overflow-x: hidden;
    align-items: center;

    ${media.desktop`
    padding: 5rem 2rem;
`}
`;

export const SectionTitle = styled.h2`
    display: flex;
    justify-content: center;
    font-family: "Open Sans", sans-serif;
    background: linear-gradient(to left, #00f298, #07f7f7);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    top: -1rem;
    position: relative;
    font-size: 3.5rem;
    font-weight: 700;
    text-transform: uppercase;
    
    ${media.desktop`
    font-size: 3rem;
    top: -2rem;
`}
`;

export const InterestItem = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5rem;
    margin-top: 5rem;

    ${media.desktop`
    gap: 3rem;
    margin-top: 2rem;
`}
`;

export const IconWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
    transform: translateY(-10px);
}

    i {
    border-radius: 50%;
    border: 1px solid var(--cor-primaria);
    padding: 2rem 0;
    width: 9rem;
    height: 9rem;
    text-align: center;
    font-size: 4.5rem;
    color: var(--cor-primaria);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
    background: linear-gradient(#02f3ae, #05f6e0);
    border-color: var(--cor-primaria);
    color: #ffffff;
    box-shadow: 0 0 8px #00e6b8;
    }
}
`;

export const IconLabel = styled.span`
    position: absolute;
    bottom: -3rem;
    font-size: 1.9rem;
    color: #ffffff;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    pointer-events: none;
    font-family: "Open Sans", sans-serif;
    text-transform: capitalize;

    ${IconWrapper}:hover & {
    opacity: 1;
    transform: translateY(0);
}
`;
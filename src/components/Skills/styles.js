import styled from 'styled-components';

export const SkillsSection = styled.section`
    padding: 4rem 2rem;
    text-align: center;
    background-color: #323a48;
    color: #fff;
`;

export const SectionTitle = styled.h2`
    color: var(--cor-primaria);
    font-size: 3.5rem;
    margin-bottom: 3rem;
    letter-spacing: 1px;
    font-family: "Open Sans", sans-serif;
    text-transform: uppercase;
`;

export const SkillsBars = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem 3rem;
    margin-bottom: 4rem;
    max-width: 1000px;
    margin-inline: auto;
`;

export const SkillBar = styled.div``;

export const SkillName = styled.span`
    display: block;
    text-align: left;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #ffffff;
    font-family: "Open Sans", sans-serif;
`;

export const Bar = styled.div`
    background-color: #111;
    height: 10px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
`;

export const Fill = styled.div`
    background-color: var(--cor-primaria);
    height: 100%;
    border-radius: 10px;
    position: relative;
    font-size: 0.75rem;
    color: #000;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 6px;
    transition: width 0.5s ease;
`;

export const SkillsCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
`;

export const Card = styled.div`
    background-color: #2d323d;
    padding: 2rem;
    border-radius: 8px;
    max-width: 300px;
    text-align: left;
    position: relative;
    transition: all 0.3s ease;
    box-shadow: 0 0 0 rgba(0, 255, 213, 0);

    &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 25px rgba(0, 255, 213, 0.2);
    background-color: #00ffd5;
    color: #000;
}
`;

export const CardNumber = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--cor-primaria);
    margin-bottom: 0.5rem;

    ${Card}:hover & {
    color: #000;
}
`;

export const CardTitle = styled.h3`
    margin: 0 0 1rem;
    font-size: 1.1rem;
    color: inherit;
    font-family: "Open Sans", sans-serif;
`;

export const CardParagraph = styled.p`
    font-size: 1.2rem;
    color: #ccc;
    line-height: 1.4;
    font-family: "Open Sans", sans-serif;

    ${Card}:hover & {
    color: #000;
}
`;
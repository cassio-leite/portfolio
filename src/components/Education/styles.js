import styled from 'styled-components';
import { media } from '../../styles/media';

export const EducationSection = styled.section`
    background: #1f232c;
    color: #ffffff;
    padding: 30px;
    overflow: hidden;
    position: relative;

    ${media.desktop`
    &:before {
    left: 50%;
    margin-left: -2px;
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    background: var(--cor-primaria);
    }
`}
`;

export const SectionTitle = styled.h2`
    text-align: center;
    color: var(--cor-primaria);
    margin-bottom: 40px;
    font-size: 35px;
    font-family: "Open Sans", sans-serif;
    text-transform: uppercase;
`;

export const TimelineContainer = styled.div`
    position: relative;
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 0;

    &:before {
    content: '';
    position: absolute;
    left: 30px;
    top: 0;
    bottom: 0;
    width: 4px;
    background: var(--cor-primaria);
}

    ${media.desktop`
    &:before {
    left: 50%;
    }
`}
`;

export const TimelineItem = styled.div`
    position: relative;
    margin: 20px 0 40px 60px;

    ${media.tablet`
    width: 50%;
    margin: 40px 0;
    padding: 0 20px;
    left: ${props => (props.$isOdd ? '0' : '50%')};
    transform: translateX(${props => (props.$isOdd ? '0' : '-100%')});
`}
`;

export const TimelineIcon = styled.div`
    position: absolute;
    left: -43px;
    top: 0;
    width: 40px;
    height: 40px;
    background: #2e3239;
    border: 2px solid #00fff0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: var(--cor-primaria);

    ${media.desktop`
    position: static;
    margin: 0 auto;
    position: absolute;
    left: -43px;
    top: 0;
    width: 40px;
    height: 40px;
    background: #2e3239;
    border: 2px solid #00fff0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: var(--cor-primaria);
    `}
`;

export const TimelineContent = styled.div`
    background: #2e3239;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 255, 240, 0.2);

    h3 {
    margin: 0 0 5px;
    color: var(--cor-primaria);
}

    span {
    font-size: 14px;
    display: block;
    margin-bottom: 10px;
}

    p {
    margin: 0;
    font-size: 14px;
    color: #ccc;
    line-height: 1.5;
}
`;

export const ContentTitle = styled.h3`
    margin: 0 0 5px;
    color: var(--cor-primaria);
`;

export const ContentSpan = styled.span`
    font-size: 14px;
    display: block;
    margin-bottom: 10px;
`;

export const ContentParagraph = styled.p`
    margin: 0;
    font-size: 14px;
    color: #ccc;
`;
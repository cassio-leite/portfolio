import React from 'react';
import {
    InterestsSection,
    SectionTitle,
    InterestItem,
    IconWrapper,
    IconLabel,
} from './styles';

const Interests = () => {
    return (
        <InterestsSection id="interests" aria-labelledby="titulo-interesses">
            <SectionTitle id="titulo-interesses" data-aos="fade-up">Meus Interesses</SectionTitle>

            <InterestItem>
                <IconWrapper data-aos="fade-up">
                    <i className="fa-solid fa-futbol"></i>
                    <IconLabel>Futebol</IconLabel>
                </IconWrapper>

                <IconWrapper data-aos="fade-up" data-aos-delay="100">
                    <i className="fa-solid fa-book"></i>
                    <IconLabel>Ler</IconLabel>
                </IconWrapper>

                <IconWrapper data-aos="fade-up" data-aos-delay="200">
                    <i className="fa-solid fa-music"></i>
                    <IconLabel>Música</IconLabel>
                </IconWrapper>

                <IconWrapper data-aos="fade-up" data-aos-delay="300">
                    <i className="fa-solid fa-mug-saucer"></i>
                    <IconLabel>Café</IconLabel>
                </IconWrapper>

                <IconWrapper data-aos="fade-up" data-aos-delay="400">
                    <i className="fa-solid fa-rocket"></i>
                    <IconLabel>Viajar</IconLabel>
                </IconWrapper>

                <IconWrapper data-aos="fade-up" data-aos-delay="500">
                    <i className="fa-solid fa-film"></i>
                    <IconLabel>Filmes</IconLabel>
                </IconWrapper>
            </InterestItem>
        </InterestsSection>
    );
};

export default Interests;
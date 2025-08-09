import React from 'react';
import {
    HomeSection,
    HomeContent,
    HomeTitle,
    HomeSubtitle,
    HomeParagraph,
    BoldText,
    SocialMediaLinks,
    HomeVideo,
} from './styles';

const Home = () => {
    return (
        <HomeSection data-aos="fade-up">
                <HomeContent>
                    <HomeTitle>Olá!</HomeTitle>
                    <HomeSubtitle>
                        Sou <BoldText>Cássio Leite</BoldText>
                    </HomeSubtitle>
                    <HomeParagraph>Desenvolvedor Web FrontEnd</HomeParagraph>
                </HomeContent>

                <SocialMediaLinks data-aos="fade-up">
                    <a href="mailto:cassiocarmo77@gmail.com" title="Email">
                        <i className="fa-regular fa-envelope" aria-label="Email"></i>
                    </a>
                    <a href="https://wa.me/5533999956105" target="_blank" title="WhatsApp">
                        <i className="fa-brands fa-whatsapp" aria-label="WhatsApp"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/cassio-leite/" target="_blank" title="LinkedIn">
                        <i className="fa-brands fa-linkedin" aria-label="linkedin"></i>
                    </a>
                    <a href="https://github.com/cassio-leite" target="_blank" title="GitHub">
                        <i className="fa-brands fa-github" aria-label="GitHub"></i>
                    </a>
                </SocialMediaLinks>
                
                <HomeVideo>
                    <video autoPlay loop muted playsInline>
                        <source src="/videos/programe.mp4" type="video/mp4" />
                        Seu navegador não suporta vídeos HTML5.
                    </video>
                </HomeVideo>
        </HomeSection>
    );
};

export default Home;
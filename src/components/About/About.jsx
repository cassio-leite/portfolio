import React from "react";
import profileImage from "../../assets/images/cassio-leite.jpg";
import {
    AboutSection,
    Container,
    ImageWrapper,
    BackgroundAnimation,
    ProfileImage,
    CurriculoBtn,
    Info,
    SectionTitle,
    Paragraph,
    ProfileMenu,
    WhatsAppButton,
} from "./styles";

const About = () => {
    return (
        <AboutSection id="about" aria-labelledby="titulo-sobre">
            <Container>
                <ImageWrapper data-aos="zoom-in">
                    <BackgroundAnimation />
                    <ProfileImage src={profileImage} alt="Foto de perfil" />
                    <CurriculoBtn>
                        <a href="/docs/curriculo.pdf" download="Curriculo-Cassio.pdf">
                            <i className="fa-solid fa-download"></i> <span>Download CV</span>
                        </a>
                    </CurriculoBtn>
                </ImageWrapper>

                <Info data-aos="fade-left">
                    <SectionTitle id="titulo-sobre">Sobre Mim</SectionTitle>
                    <Paragraph>
                        Olá, meu nome é Cássio Leite, sou um Desenvolvedor apaixonado por tecnologia que busca construir
                        uma carreira profissional na área de desenvolvimento, estou sempre buscando aprender e me aprimorar para que possa ter boas habilidades para ajudar meus futuros colegas de trabalho e a empresa em que ingressar. Desde novo na época em que ainda fazia o
                        fundamental tinha o sonho de poder trabalhar com programação, mas não sabia por onde começar,
                        tive muitas dúvidas em qual área de tecnologia iniciar, até que depois de finalizar o Ensino
                        Médio conheci o Desenvolvimento Web e acabei começando a estudar por essa área. Me apaixonei por
                        JavaScript então resolvi me casar com essa linguagem, tem sido um relacionamento complicado no
                        começo mas acredito que vou aprender bastante com JS. Gosto de filmes, animes, músicas, ler,
                        praticar esporte, e o principal, meu delicioso café, afinal, o que seria de um dev sem seu
                        combustível né😋? Enfim, esse sou eu!!😉.
                    </Paragraph>

                    <ProfileMenu>
                        <li>
                            <span>Nome: </span>Cássio Leite
                        </li>
                        <li>
                            <span>Data de nascimento: </span>16 Dezembro 2001
                        </li>
                        <li>
                            <span>Endereço: </span>Manhuaçu, Minas Gerais
                        </li>
                        <li>
                            <span>Email: </span>cassiocarmo77@gmail.com
                        </li>
                        <li>
                            <a
                                href="https://wa.me/5533999956105"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <WhatsAppButton>
                                    <span>Fale comigo no WhatsApp</span>
                                </WhatsAppButton>
                            </a>
                        </li>
                    </ProfileMenu>
                </Info>
            </Container>
        </AboutSection>
    );
};

export default About;

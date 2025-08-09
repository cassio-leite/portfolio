import React from 'react';
import {
    EducationSection,
    SectionTitle,
    TimelineContainer,
    TimelineItem,
    TimelineIcon,
    TimelineContent,
    ContentTitle,
    ContentSpan,
    ContentParagraph,
} from './styles';

const educationData = [
    {
        title: 'Desenvolvimento Web - FrontEnd',
        period: 'Jan 2024 | DevQuest',
        description: 'Atualmente cursando Desenvolvimento Web FrontEnd pelo DevQuest, onde tenho adquirido habilidades práticas e conhecimentos sólidos em programação para uma carreira profissional.',
        delay: '0',
    },
    {
        title: 'Pacote Office',
        period: 'Nov 2023 - Out 2024 | Microlins',
        description: 'Durante o processo de aprendizado, adquiri habilidades em Microsoft Word: Criação e edição de documentos, formatação de texto, uso de tabelas e gráficos. Microsoft Excel: Manipulação de dados, criação de fórmulas, uso de gráficos e tabelas dinâmicas. Microsoft PowerPoint: Criação de apresentações, uso de transições e animações, formatação de slides.',
        delay: '150',
    },
    {
        title: 'Informática',
        period: 'Nov 2023 - Out 2024 | Microlins',
        description: 'Durante o processo de aprendizado, adquiri habilidades em entender as funcionalidades do sistema operacional windows.',
        delay: '300',
    },
];

const Education = () => {
    return (
        <EducationSection id="education" aria-labelledby="titulo-educacao">
            <SectionTitle id="titulo-educacao">Educação</SectionTitle>

            <TimelineContainer>
                {educationData.map((item, index) => (
                    <TimelineItem
                        key={index}
                        data-aos="fade-right"
                        data-aos-delay={item.delay}
                        $isOdd={index % 2 !== 0}
                    >
                        <TimelineIcon>
                            <i className="fa-solid fa-graduation-cap" style={{ color: '#63E6BE' }}></i>
                        </TimelineIcon>
                        <TimelineContent>
                            <ContentTitle>{item.title}</ContentTitle>
                            <ContentSpan>{item.period}</ContentSpan>
                            <ContentParagraph>{item.description}</ContentParagraph>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </TimelineContainer>
        </EducationSection>
    );
};

export default Education;
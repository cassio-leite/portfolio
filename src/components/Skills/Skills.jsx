import React from 'react';
import { skills } from './skillsData';
import {
    SkillsSection,
    SectionTitle,
    SkillsBars,
    SkillBar,
    SkillName,
    Bar,
    Fill,
    SkillsCards,
    Card,
    CardNumber,
    CardTitle,
    CardParagraph,
} from './styles';

const Skills = () => {
    return (
        <SkillsSection id="skills" aria-labelledby="titulo-skills" data-aos="zoom-in">
            <SectionTitle id="titulo-skills">Minhas SKILLS</SectionTitle>

            <SkillsBars data-aos="fade-up">
                {skills.map((skill, index) => (
                    <SkillBar key={index}>
                        <SkillName>{skill.name}</SkillName>
                        <Bar>
                            <Fill style={{ width: `${skill.level}%` }}>
                                {skill.level}%
                            </Fill>
                        </Bar>
                    </SkillBar>
                ))}
            </SkillsBars>

            <SkillsCards data-aos="fade-up">
                {skills.filter(skill => skill.description).map((skill, index) => (
                    <Card key={index}>
                        <CardNumber>0{index + 1}.</CardNumber>
                        <CardTitle>{skill.name}</CardTitle>
                        <CardParagraph>{skill.description}</CardParagraph>
                    </Card>
                ))}
            </SkillsCards>
        </SkillsSection>
    );
};

export default Skills;
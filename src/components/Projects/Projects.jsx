import React, { useState } from 'react';
import { projects } from './projectsData';
import {
    ProjectsSection,
    SectionTitle,
    PortfolioContainer,
    PortfolioItem,
    PortfolioImage,
    PortfolioOverlay,
    IconButton,
    PortfolioInfo,
    PortfolioInfoStrong,
    LoadMoreButton,
    ButtonText,
} from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const PROJECTS_PER_PAGE = 3;

const Projects = () => {
    const [visibleProjects, setVisibleProjects] = useState(PROJECTS_PER_PAGE);

    const handleLoadMore = () => {
        setVisibleProjects(prevVisibleProjects => prevVisibleProjects + PROJECTS_PER_PAGE);
    };

    return (
        <ProjectsSection id="projects" aria-labelledby="titulo-projetos" data-aos="flip-up">
            <SectionTitle id="titulo-projetos">Meus Projetos</SectionTitle>

            <PortfolioContainer data-aos="zoom-in-up">
                {projects.slice(0, visibleProjects).map((project) => (
                    <PortfolioItem key={project.id}>
                        <PortfolioImage src={project.image} alt={project.title} />
                        <PortfolioOverlay>
                            <IconButton
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Ver projeto online: ${project.title}`}
                            >
                                <FontAwesomeIcon icon={faSearchPlus} />
                            </IconButton>

                            <IconButton
                                href={project.repoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Ir para o repositório do projeto: ${project.title}`}
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </IconButton>
                        </PortfolioOverlay>

                        <PortfolioInfo>
                            <PortfolioInfoStrong>{project.title}</PortfolioInfoStrong><br />
                            {project.description}
                        </PortfolioInfo>
                    </PortfolioItem>
                ))}
            </PortfolioContainer>

            {visibleProjects < projects.length && (
                <LoadMoreButton onClick={handleLoadMore}>
                    <ButtonText>Carregar Mais</ButtonText>
                </LoadMoreButton>
            )}
        </ProjectsSection>
    );
};

export default Projects;
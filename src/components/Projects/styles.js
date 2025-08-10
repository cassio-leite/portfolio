import styled from 'styled-components';
import { media } from '../../styles/media';

export const ProjectsSection = styled.section`
  padding: 60px 20px;
  background-color: #384254;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  color: var(--cor-primaria);
  margin-bottom: 40px;
  font-size: 3.5rem;
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;
`;

export const PortfolioContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;

    ${media.tablet`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    `}
`;

export const PortfolioItem = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
    max-width: 500px;
    margin: 0 auto;

    &:hover {
        transform: scale(1.05);
    }

    &:hover .portfolio-overlay {
        opacity: 1;
    }
`;

export const PortfolioImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  transition: opacity 0.3s ease-in-out;
`;

export const PortfolioOverlay = styled.div.attrs({ className: 'portfolio-overlay' })`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
`;

export const IconButton = styled.a`
  margin: 0 10px;
  padding: 12px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5c6bc0;
    color: #fff;
  }
`;

export const PortfolioInfo = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  text-align: center;
  color: #555;
`;

export const PortfolioInfoStrong = styled.strong`
  font-size: 1.2rem;
  color: #333;
  font-family: "Open Sans", sans-serif;
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin: 40px auto 0;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  transform: translate(0);
  background-image: linear-gradient(45deg, #4568dc, #b06ab3);
  padding: 0.7em 2em;
  border-radius: 65px;
  box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.438);
  transition: box-shadow 0.25s;
  color: white;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    border-radius: 18px;
    position: absolute;
    margin: 4px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background: #0e0e10;
  }

  &:hover {
    background-image: linear-gradient(-45deg, #4568dc, #b06ab3);
    box-shadow: 0 12px 24px rgba(128, 128, 128, 0.1);
  }
`;

export const ButtonText = styled.span`
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(45deg, #4568dc, #b06ab3);
  font-family: "Open Sans", sans-serif;
  
  ${LoadMoreButton}:hover & {
    background-image: linear-gradient(-45deg, #4568dc, #b06ab3);
  }
`;
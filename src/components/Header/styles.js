import styled, { css } from 'styled-components';
import { media } from '../../styles/media';

export const HeaderContainer = styled.header`  
  padding: 2rem 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 994;
  transition: background-color 0.4s ease 0s, box-shadow 0.4s ease 0s, padding 0.3s ease;
  
  ${props => props.$scrolled && css`
    background-color: #232533;
    box-shadow: 0 3px 5px 1px rgba(0, 0, 0, 0.27);
    padding: 1rem 2rem;
    
  `}
`;

export const HeaderBox = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    margin-right: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${media.desktop`
    justify-content: space-between;
    margin: 0 auto;
`}
`;

export const Logo = styled.h1`
  width: 85px;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: width 0.3s ease, height 0.3s ease;

  ${props => props.$scrolled && css`
    width: 60px;
    height: 60px;
  `}

  img {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }

  a {
    display: block;
    width: 100%;
    height: 100%;
  }

`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 100%;
`;

export const MenuToggle = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    width: 30px;
    justify-content: space-between;
    z-index: 1001;

    ${media.desktop`
    display: none;
`}
`;

export const Hamburguer = styled.span`
    position: relative;
    width: 100%;
    height: 3px;
    background-color: white;
    border-radius: 2px;
    transition: 0.3s ease;
    left: 0;
    display: block;
    
    &::before,
    &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: white;
    border-radius: 2px;
    transition: 0.3s ease;
    left: 0;
}

    &::before {
    top: -10px;
    ${props => props.$isOpen && css`
    transform: rotate(45deg);
    top: 0;
    `}
}

    &::after {
    top: 10px;
    ${props => props.$isOpen && css`
    transform: rotate(-45deg);
    top: 0;
    `}
}

    ${props => props.$isOpen && css`
    background: transparent;
`}
`;

export const MenuList = styled.ul`
    list-style: none;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.95);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease 0s;
    z-index: 1000;
    opacity: 0;
    pointer-events: none;

    ${props => props.$isOpen && css`
    opacity: 1;
    pointer-events: all;
`}

    ${media.desktop`
    position: static;
    display: flex;
    flex-direction: row;
    height: auto;
    width: auto;
    background-color: transparent;
    opacity: 1;
    pointer-events: all;
    
    li {
    margin: 0 1rem;
    }
`}
`;

export const MenuItem = styled.li`
    margin: 1rem 0;

    a {
    color: white;
    font-size: 2.3rem;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
    color: #00db93;
    transform: scale(1.1);
    background-color: #f0f0f0;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    }
}

    ${media.desktop`
    margin: 0 1rem;
    font-weight: bold;
    font-size: 1.2em;
    padding: 8px 12px;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    text-decoration: none;

    a {
    font-size: 1.7rem;
    color: #ffffff;
    
    &:hover {
        color: #118BB8;
        transform: scale(1.2);
    }
    }
`}
`;
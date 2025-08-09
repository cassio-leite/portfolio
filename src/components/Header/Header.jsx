import React, { useState, useEffect } from 'react';
import {
    HeaderContainer,
    HeaderBox,
    Logo,
    Nav,
    MenuToggle,
    Hamburguer,
    MenuList,
    MenuItem,
} from './styles';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <HeaderContainer $scrolled={scrolled}>
            <HeaderBox>
                <Logo $scrolled={scrolled}><a href="#home"><img src="./assets/images/logo.png" alt="Logo" /></a></Logo>

                <Nav>
                    <MenuList $isOpen={isMenuOpen}>
                        <MenuItem><a href="#about">Sobre</a></MenuItem>
                        <MenuItem><a href="#interests">Interesses</a></MenuItem>
                        <MenuItem><a href="#education">Educação</a></MenuItem>
                        <MenuItem><a href="#skills">Skills</a></MenuItem>
                        <MenuItem><a href="#projects">Projetos</a></MenuItem>
                        <MenuItem><a href="#contact">Contato</a></MenuItem>
                    </MenuList>
                </Nav>

                <MenuToggle onClick={toggleMenu}>
                    <Hamburguer $isOpen={isMenuOpen} />
                </MenuToggle>
            </HeaderBox>
        </HeaderContainer>
    );
};

export default Header;
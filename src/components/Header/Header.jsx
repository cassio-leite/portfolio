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

    const handleMenuClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
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
                <Logo $scrolled={scrolled}>
                    <a href="#home" onClick={(e) => handleMenuClick(e, 'home')}>
                        <img src="./assets/images/logo.png" alt="Logo" />
                    </a>
                </Logo>

                <Nav>
                    <MenuList $isOpen={isMenuOpen}>
                        <MenuItem>
                            <a href="#about" onClick={(e) => handleMenuClick(e, 'about')}>
                                Sobre
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a href="#interests" onClick={(e) => handleMenuClick(e, 'interests')}>
                                Interesses
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a href="#education" onClick={(e) => handleMenuClick(e, 'education')}>
                                Educação
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a href="#skills" onClick={(e) => handleMenuClick(e, 'skills')}>
                                Skills
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a href="#projects" onClick={(e) => handleMenuClick(e, 'projects')}>
                                Projetos
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a href="#contact" onClick={(e) => handleMenuClick(e, 'contact')}>
                                Contato
                            </a>
                        </MenuItem>
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
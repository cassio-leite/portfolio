import React from 'react';
import {
    Footer,
    SectionTitle,
    FooterLinks,
    FooterLink,
    HorizontalRule,
    CopyrightText
} from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contacts = () => {
    return (
        <Footer aria-label="Rodapé com informações de contato">
            <SectionTitle>Minhas Conexões</SectionTitle>

            <FooterLinks>
                <FooterLink href="mailto:cassiocarmo77@gmail.com" title="Email" aria-label="Email">
                    <FontAwesomeIcon icon={faEnvelope} />
                </FooterLink>
                <FooterLink href="https://wa.me/5533999956105" target="_blank" title="WhatsApp" rel="noopener noreferrer" aria-label="WhatsApp">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </FooterLink>
                <FooterLink href="https://www.linkedin.com/in/cassio-leite/" target="_blank" title="LinkedIn" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} />
                </FooterLink>
                <FooterLink href="https://github.com/cassio-leite" target="_blank" title="GitHub" rel="noopener noreferrer" aria-label="GitHub">
                    <FontAwesomeIcon icon={faGithub} />
                </FooterLink>
            </FooterLinks>

            <HorizontalRule />

            <CopyrightText>&copy; 2025 Cássio Leite. Todos os direitos reservados.</CopyrightText>
        </Footer>
    );
};

export default Contacts;
import styled from 'styled-components';

export const Footer = styled.footer`
  padding: 30px;
  background-color: #232533;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SectionTitle = styled.h2`
  color: var(--cor-primaria);
  margin-bottom: 40px;
  font-size: 3.5rem;
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;
`;

export const FooterLinks = styled.div`
  gap: 5rem;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterLink = styled.a`
  color: var(--cor-primaria);

  &:hover {
    color: #fff;
    transition: all 0.3s ease-in-out;
  }
`;

export const HorizontalRule = styled.hr`
  margin: 30px;
  opacity: 0.1;
  width: 50%;
  border: none;
  border-top: 1px solid var(--cor-primaria);
`;

export const CopyrightText = styled.p`
  color: var(--cor-primaria);
  font-size: 1.4rem;
  font-family: "Open Sans", sans-serif;
`;
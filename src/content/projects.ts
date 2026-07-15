import type { Project } from './types'

export const projects: Project[] = [
  {
    id: 1,
    slug: 'dra.-mariana-oliveira-landing-page',
    title: 'Landing Page para Psicóloga Clínica',
    description:
      'Uma landing page premium, totalmente responsiva e de alta conversão, desenvolvida para a psicóloga clínica Dra. Mariana Oliveira. O design do site foi planejado em torno de quatro pilares fundamentais: acolhimento, confiança, conversão e experiência de alto padrão.',
    image: '/assets/images/dra-mariana-oliveira.png',
    repoLink: 'https://github.com/cassio-leite/dra.-mariana-oliveira-landing-page.git',
    liveLink: 'https://dra-mariana-oliveira-landing-page.vercel.app/',
  },
  {
    id: 2,
    slug: 'cafe-aurora',
    title: 'Café Aurora - Aroma Artisanal Haven',
    description:
      'O Café Aurora é um projeto desenvolvido com o objetivo de apresentar uma cafeteria artesanal de forma elegante e funcional. O site institucional tem como foco a experiência premium do usuário, apresentação detalhada do cardápio e conversão de clientes através de contatos via WhatsApp.',
    image: '/assets/images/aroma-artisanal.png',
    repoLink: 'https://github.com/cassio-leite/aroma-artisanal-haven.git',
    liveLink: 'https://aroma-artisanal-haven.vercel.app/',
  },
  {
    id: 3,
    slug: 'previsao-do-tempo',
    title: 'Previsão do Tempo',
    description:
      'Projeto simples e funcional de uma aplicação web que exibe a previsão do tempo atual para qualquer ' +
      'cidade informada.',
    image: '/assets/images/projeto-clima.png',
    repoLink: 'https://github.com/cassio-leite/Projeto-clima.git',
    liveLink: 'https://cassio-leite.github.io/Projeto-clima/',
  },
  {
    id: 4,
    slug: 'formulario-com-validacao',
    title: 'Formulário com Validação',
    description:
      'Este projeto é um formulário de contato com validação de campos obrigatórios.',
    image: '/assets/images/projeto-formulario.png',
    repoLink: 'https://github.com/cassio-leite/f-o-r-m-u-l-a-r-i-o.git',
    liveLink: 'https://cassio-leite.github.io/f-o-r-m-u-l-a-r-i-o/',
  },
  {
    id: 5,
    slug: 'sistema-de-gestao-de-estoque',
    title: 'Sistema de Gestao de Estoque',
    description:
      'Este é um sistema de gestao de estoque completo, desenvolvido com o objetivo de facilitar a gestão de inventário e controle de produtos em uma loja ou empresa.',
    image: '/assets/images/stockly.png',
    repoLink: 'https://github.com/cassio-leite/Stockly.git',
    liveLink: 'https://stockly-two-ecru.vercel.app/',
  },
  {
    id: 6,
    slug: 'e-commerce-perfume',
    title: 'projeto-e-commerce-perfume',
    description:
      'Este projeto é uma loja virtual de perfumes, onde os usuários podem navegar e comprar fragrâncias.',
    image: '/assets/images/projeto-e-commerce-perfume.png',
    repoLink: 'https://github.com/cassio-leite/projeto-e-commerce-perfume.git',
    liveLink: 'https://cassio-leite.github.io/projeto-e-commerce-perfume/',
  },
]

/**
 * DECISÃO PENDENTE (Fase 0→1): esta lista não inclui Café Aurora nem a
 * landing page da Dra. Mariana — teus dois projetos mais recentes e mais
 * fortes tecnicamente (React 19 + TS + TanStack + Framer Motion). Um
 * portfólio novo, com stack nova, praticamente pede pra esses dois virem
 * primeiro na lista, e os projetos de aprendizado (fetch-github, clima,
 * conselhos) ficarem em uma seção secundária ou serem removidos. Isso é
 * conteúdo, não código — decide livremente, só não deixe de considerar.
 */

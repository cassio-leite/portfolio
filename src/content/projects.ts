import type { Project } from './types'

export const projects: Project[] = [
  {
    id: 1,
    slug: 'fetch-github-api',
    title: 'Projeto-fetch-github-api',
    description:
      'Este projeto é uma aplicação web que permite buscar usuários do GitHub e exibir suas informações, ' +
      'como nome, bio e repositórios públicos.',
    image: '/assets/images/projeto-fetch-github.png',
    repoLink: 'https://github.com/cassio-leite/projeto-fetch-github-api.git',
    liveLink: 'https://cassio-leite.github.io/projeto-fetch-github-api/',
  },
  {
    id: 2,
    slug: 'gerador-de-conselhos',
    title: 'Gerador de Conselhos',
    description:
      'Um projeto simples e interativo que gera conselhos aleatórios consumindo a API pública Advice Slip API.',
    image: '/assets/images/projeto-gerador-de-conselhos.png',
    repoLink: 'https://github.com/cassio-leite/Gerador-de-conselhos.git',
    liveLink: 'https://cassio-leite.github.io/Gerador-de-conselhos/',
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
    slug: 'livros-para-programadores',
    title: 'Lista de Livros para Programadores',
    description:
      'Este projeto é um site interativo que apresenta uma lista de livros essenciais para programadores.',
    image: '/assets/images/projeto-livros-para-programadores.png',
    repoLink: 'https://github.com/cassio-leite/livros-para-desenvolvedores.git',
    liveLink: 'https://cassio-leite.github.io/livros-para-desenvolvedores/',
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

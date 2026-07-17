import type { SkillCategory } from './types';

export const skills: SkillCategory[] = [
  {
    name: 'Linguagens',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'SQL'],
    description:
      'Base sólida em HTML semântico e acessível, CSS responsivo (Flexbox, Grid, animações) e ' +
      'JavaScript moderno (ES6+) para manipulação de DOM, programação assíncrona e consumo de APIs. ' +
      'Uso TypeScript para tipagem estática em projetos que exigem mais segurança e escala, e SQL ' +
      'para consultas e relacionamentos entre tabelas em bancos relacionais.',
  },
  {
    name: 'Front-end',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    description:
      'Desenvolvimento de interfaces com React (componentes, Hooks, gerenciamento de estado, consumo ' +
      'de APIs) e Next.js (App Router, Server e Client Components, estratégias de renderização, Data ' +
      'Fetching e otimizações de performance para produção). Estilização com Tailwind CSS, priorizando ' +
      'produtividade, consistência e manutenção via classes utilitárias.',
  },
  {
    name: 'Back-end',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'APIs REST'],
    description:
      'Construção de APIs com Node.js e Express (rotas, middlewares, programação assíncrona) ' +
      'integradas a bancos de dados relacionais com PostgreSQL (modelagem e consultas). Experiência ' +
      'em integração e desenvolvimento de APIs REST, incluindo requisições, tratamento de respostas e ' +
      'organização de dados entre aplicações.',
  },
  {
    name: 'Ferramentas',
    technologies: ['Git', 'GitHub', 'Docker', 'Jest'],
    description:
      'Controle de versão com Git e GitHub (organização de branches, colaboração e boas práticas de ' +
      'fluxo de trabalho), Docker para padronizar ambientes de desenvolvimento, e Jest para testes ' +
      'automatizados que garantem maior confiabilidade nas aplicações.',
  },
  {
    name: 'Inteligência Artificial',
    technologies: ['LLMs', 'Prompt Engineering', 'MCP', 'Context Engineering'],
    description:
      'Aplicação de ferramentas de IA no desenvolvimento de software, com uso de LLMs, Prompt ' +
      'Engineering e Context Engineering para obter respostas mais precisas e consistentes. Exploro o ' +
      'Model Context Protocol (MCP) para integração entre modelos, ferramentas e agentes inteligentes ' +
      'em arquiteturas modernas.',
  },
];

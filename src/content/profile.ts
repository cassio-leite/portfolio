import type { Profile } from './types';

export const profile: Profile = {
  name: 'Cássio Leite',
  greeting: 'Olá!',
  role: 'Desenvolvedor Web Front-End',
  bio:
    'Olá, meu nome é Cássio Leite, sou um Desenvolvedor apaixonado por tecnologia que busca construir ' +
    'uma carreira profissional na área de desenvolvimento, estou sempre buscando aprender e me aprimorar ' +
    'para que possa ter boas habilidades para ajudar meus futuros colegas de trabalho e a empresa em que ' +
    'ingressar. Desde novo na época em que ainda fazia o fundamental tinha o sonho de poder trabalhar com ' +
    'programação, mas não sabia por onde começar, tive muitas dúvidas em qual área de tecnologia iniciar, ' +
    'até que depois de finalizar o Ensino Médio conheci o Desenvolvimento Web e acabei começando a estudar ' +
    'por essa área. Me apaixonei por JavaScript então resolvi me casar com essa linguagem, tem sido um ' +
    'relacionamento complicado no começo mas acredito que vou aprender bastante com JS. Gosto de filmes, ' +
    'animes, músicas, ler, praticar esporte, e o principal, meu delicioso café, afinal, o que seria de um ' +
    'dev sem seu combustível né😋? Enfim, esse sou eu!!😉.',
  birthDate: '16 Dezembro 2001',
  location: 'Manhuaçu, Minas Gerais',
  email: 'cassiocarmo77@gmail.com',
  whatsappUrl: 'https://wa.me/5533999956105',
  cvUrl: '/docs/curriculo.pdf',
  avatarUrl: '/assets/images/cassio-leite.webp',
  contactFormEndpoint: 'https://formspree.io/f/xrblrznr',
  socialLinks: [
    { label: 'Email', url: 'mailto:cassiocarmo77@gmail.com', icon: 'envelope' },
    { label: 'WhatsApp', url: 'https://wa.me/5533999956105', icon: 'whatsapp' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/cassio-leite/', icon: 'linkedin' },
    { label: 'GitHub', url: 'https://github.com/cassio-leite', icon: 'github' },
  ],
};

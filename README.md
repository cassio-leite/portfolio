# Portfólio Profissional - Cássio Leite

Portfólio moderno de desenvolvimento Front-End construído com **React 19**, **TanStack Start**, **TanStack Router** e **Tailwind CSS v4**. O projeto apresenta de forma elegante o perfil profissional, habilidades, histórico educacional, interesses e uma seleção de projetos reais desenvolvidos por mim Cássio Leite, incluindo páginas de detalhes dinâmicas e formulário de contato integrado.

---

## Demonstração

O projeto pode ser visualizado online no link abaixo:

👉 **[Acesse o Portfólio Online](https://portfolio-cassio-leite.vercel.app/)**

---

## Preview

![Preview](./public/assets/images/cassio-leite.webp)
*(Imagem do perfil do desenvolvedor exibida na seção Hero do portfólio)*

---

## Objetivo

O principal objetivo deste projeto é servir como o cartão de visitas profissional. Ele consolida sua trajetória acadêmica, competências técnicas em Front-End, Back-end, Ferramentas e Inteligência Artificial, oferecendo uma experiência interativa e imersiva para recrutadores, clientes e parceiros de desenvolvimento que buscam conhecer meu trabalho.

---

## Funcionalidades

*   **Páginas Dinâmicas de Detalhes**: Roteamento baseado em arquivos (File-based Routing) que gera páginas exclusivas para cada projeto (`/projetos/$slug`) com carregamento de dados otimizado.
*   **Design Premium com Animações Fluidas**: Utilização de micro-interações, transições suaves de entrada e efeitos de pairar utilizando **Framer Motion**.
*   **Seção de Hero com Aurora Background**: Um efeito visual moderno e dinâmico de fundo de aurora que dá destaque à apresentação inicial.
*   **Suporte a Tema Claro & Escuro**: Alternância de tema integrada com persistência automática de preferências de exibição do usuário.
*   **Formulário de Contato Inteligente**: Validação de campos em tempo real usando **Zod** e **React Hook Form**, integrado ao endpoint do **Formspree** para envio assíncrono e direto de e-mails de contato.
*   **Download de Currículo**: Link direto e funcional para download do currículo do desenvolvedor em formato PDF.
*   **Links de Acesso Rápido**: Integração com canais diretos de comunicação como e-mail, LinkedIn, GitHub e WhatsApp.

---

## Tecnologias Utilizadas

O projeto foi construído utilizando as tecnologias e padrões mais modernos e recomendados da comunidade React.

### Front-end

*   **React 19**: Versão mais recente da biblioteca, aproveitando as mais novas otimizações e APIs.
*   **TanStack Start**: Framework full-stack inovador que oferece recursos robustos de SSR (Server-Side Rendering) e hidratação rápida.
*   **TanStack React Router**: Roteador baseado em arquivos que garante tipagem estática e segurança de tipos em todas as rotas (Type-Safe Routing).
*   **TanStack React Query**: Biblioteca poderosa para sincronização de dados assíncronos e controle de cache eficiente.
*   **Tailwind CSS v4**: Nova versão do framework de estilização utilitária, oferecendo suporte nativo à diretiva `@theme` e alto desempenho de build.
*   **Framer Motion**: Framework de animação de alta performance para React.
*   **React Hook Form & Zod**: Conjunto para tratamento de formulários e validação rígida de dados com tipagem integrada.
*   **Radix UI**: Primitivas de interface de usuário sem estilo e acessíveis, servindo de fundação para os componentes interativos.
*   **Lucide React**: Biblioteca de ícones moderna e leve.

### Ferramentas & Infraestrutura

*   **Vite 8**: Bundler e servidor de desenvolvimento extremamente veloz.
*   **Nitro**: Engine de servidor flexível integrada ao TanStack Start para empacotamento e produção.
*   **TypeScript**: Tipagem estática para maior previsibilidade e segurança de código.
*   **Vitest**: Framework de testes rápido baseado no ecossistema Vite.
*   **ESLint & Prettier**: Ferramentas cruciais para manter a formatação do código consistente e livre de erros.

---

## Estrutura do Projeto

Abaixo está uma árvore de arquivos simplificada que descreve a organização e a arquitetura do projeto:

```text
src/
 ├── components/           # Componentes reutilizáveis e estruturais do projeto
 │    ├── layout/          # Componentes de estrutura fixa (Header e Footer)
 │    ├── sections/        # Seções de conteúdo que compõem a página principal (Home, About, etc.)
 │    └── ui/              # Componentes de base da interface (Button, Input, Form, etc.)
 ├── content/              # Dados estáticos e bases de dados locais estruturadas
 │    ├── education.ts     # Histórico de formação e educação
 │    ├── index.ts         # Centralizador dos arquivos de dados
 │    ├── interests.ts     # Interesses pessoais e hobbies do autor
 │    ├── profile.ts       # Metadados pessoais do desenvolvedor Cássio Leite
 │    ├── projects.ts      # Dados dos projetos reais implementados
 │    ├── skills.ts        # Habilidades e linguagens dominadas pelo desenvolvedor
 │    └── types.ts         # Tipagens TypeScript exclusivas para os dados
 ├── integrations/         # Configurações de serviços de terceiros (ex: TanStack Query devtools)
 ├── lib/                  # Funções utilitárias auxiliares e mapeamento de ícones
 ├── routes/               # Diretório de roteamento baseado em arquivos (TanStack Router)
 │    ├── __root.tsx       # Componente de layout raiz da aplicação
 │    ├── index.tsx        # Página inicial unificada (Single Page Layout)
 │    └── projetos/
 │         └── $slug.tsx   # Detalhes dinâmicos de cada projeto
 ├── router.tsx            # Configuração inicial do roteador TanStack
 ├── routeTree.gen.ts      # Árvore de rotas autogerada pelo TanStack Router
 └── styles.css            # Estilos globais e definição de variáveis de tema do Tailwind CSS v4
```

---

## Como executar o projeto

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### 1. Instalação de dependências

Instale os pacotes necessários utilizando o gerenciador de pacotes npm:

```bash
npm install
```

### 2. Geração das Rotas

Antes de iniciar o ambiente pela primeira vez, gere o arquivo de configuração de rotas autogeradas do TanStack Router:

```bash
npm run generate-routes
```

### 3. Executando em ambiente de desenvolvimento

Inicie o servidor de desenvolvimento local (rodando por padrão na porta `3000`):

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

### 4. Construindo para produção

Gere o build otimizado para produção:

```bash
npm run build
```

O build gera um servidor Node auto-contido otimizado pelo **Nitro** na pasta `.output/` ou `dist/`.

### 5. Pré-visualizar o build de produção localmente

Para testar a performance do build de produção em sua máquina local:

```bash
npm run preview
```

### Outros scripts úteis

*   **Rodar os testes (Vitest):** `npm run test`
*   **Verificar Erros de Código (Linter):** `npm run lint`
*   **Formatar código automaticamente:** `npm run format`
*   **Verificar conformidade de formatação (Prettier):** `npm run check`

---

## Responsividade

O portfólio foi desenhado utilizando conceitos de **Design Responsivo** (Mobile-First) via Tailwind CSS:
*   **Mobile & Tablets:** Navegação compacta e fluida utilizando menu lateral retrátil (`Sheet`). Grelhas (grids) otimizadas de coluna única para fácil leitura em telas de toque.
*   **Laptops & Desktops:** Layout espaçoso, com disposição de duas ou mais colunas, mantendo a ergonomia visual ideal e centralização do conteúdo.

---

## Performance

*   **Otimização de Imagens**: Todas as imagens estão em formato de alta compressão **WebP** e utilizam o atributo `loading="lazy"` para poupar largura de banda.
*   **Priorização Visual (LCP)**: A imagem principal da Hero possui o atributo `loading="eager"` e `fetchPriority="high"` para reduzir o tempo de renderização visual inicial.
*   **Renderização Rápida**: Pré-carregamento e gerenciamento inteligente de transições com TanStack Router, reduzindo o tempo de espera do usuário entre páginas.

---

## Acessibilidade

*   **Semântica Limpa**: Utilização de tags semânticas do HTML5 (`main`, `section`, `article`, `header`, `footer`, `nav`) permitindo fácil navegação para leitores de tela.
*   **Compatibilidade de Foco**: Botões e formulários possuem estados visuais claros de `:focus` e `:focus-visible`.
*   **Acessibilidade de Primitivas**: Utilização dos componentes **Radix UI**, que seguem rigorosamente as recomendações de acessibilidade WAI-ARIA.
*   **Contraste de Cores**: Variáveis de cores nos modos claro e escuro foram pensadas para garantir um contraste legível para textos.

---

## Aprendizados

O desenvolvimento deste portfólio permitiu consolidar conceitos fundamentais e avançados de engenharia de software Front-End:
1.  **Arquitetura Baseada em Rotas Seguras**: Implementação prática de roteamento estático com TanStack Router, reduzindo bugs de links inválidos em tempo de compilação.
2.  **Tailwind CSS v4 e Variáveis CSS Modernas**: Adaptação para a nova arquitetura do Tailwind, aproveitando variáveis CSS nativas em vez de configurações robustas em JS (arquivos de config antigos).
3.  **Animações Coerentes**: Uso do Framer Motion para adicionar sofisticação sem poluir visualmente as interfaces ou prejudicar a experiência do usuário.
4.  **Acessibilidade Integrada**: O uso de componentes acessíveis e semântica nativa garante uma web mais inclusiva.

---

## Melhorias Futuras

*   [ ] Adicionar testes unitários com Vitest para os componentes de formulário de contato.
*   [ ] Implementar suporte à internacionalização (i18n) para exibição do portfólio em Inglês e Português.
*   [ ] Integração de uma seção de Blog usando arquivos locais em Markdown/MDX.

---

## Autor

Desenvolvido com carinho por **Cássio Leite**.

*   **GitHub**: [@cassio-leite](https://github.com/cassio-leite)
*   **LinkedIn**: [Cássio Leite](https://www.linkedin.com/in/cassio-leite/)
*   **WhatsApp**: [Fale diretamente comigo](https://wa.me/5533999956105)
*   **E-mail**: cassiocarmo77@gmail.com
*   **Localização**: Manhuaçu, Minas Gerais, Brasil

---

## Licença

Nenhuma licença foi especificada formalmente no repositório, mas o projeto está publicamente disponível para fins de portfólio, consulta e aprendizado. Sinta-se livre para explorar o código!

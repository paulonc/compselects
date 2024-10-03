export const books = [
  {
    id: 1,
    title: "Estruturas de Dados em JavaScript",
    author: "João Silva",
    category: "Programação",
    year: "2023",
    image: "/assets/images/estruturas_dados_js.jpeg",
    description:
      "Uma abordagem prática sobre estruturas de dados em JavaScript.",
    fullDescription:
      "Este livro aborda os conceitos fundamentais de estruturas de dados utilizando JavaScript. Inclui exemplos práticos para manipulação de arrays, listas encadeadas, pilhas, filas e árvores. Ideal para estudantes e profissionais que buscam aprimorar suas habilidades em programação.",
    summary: [
      "Introdução às Estruturas de Dados",
      "Fundamentos de Algoritmos",
      "Manipulação de Arrays e Objetos",
      "Listas Encadeadas e Árvores",
      "Pilhas e Filas: Implementações Práticas",
      "Estudos de Caso e Aplicações Reais",
    ],
    additionalInfo:
      "Parte de uma série educacional voltada para programadores iniciantes e intermediários, com foco em práticas modernas de desenvolvimento.",
    downloadLink: "/downloads/estruturas-dados-javascript.pdf",
  },
  {
    id: 2,
    title: "Algoritmos em Python",
    author: "Maria Souza",
    category: "Programação",
    year: "2023",
    image: "/assets/images/algoritmos_python.jpeg",
    description: "Entenda os fundamentos dos algoritmos através de Python.",
    fullDescription:
      "Este livro oferece uma visão abrangente dos principais algoritmos de computação utilizando Python. Com exemplos detalhados e desafios práticos, é ideal para quem deseja aprender a programar algoritmos eficientes e bem estruturados.",
    summary: [
      "Introdução aos Algoritmos",
      "Estruturas de Repetição e Condicionais",
      "Funções e Modularização",
      "Algoritmos de Ordenação e Pesquisa",
      "Complexidade de Algoritmos",
      "Desafios e Exercícios Práticos",
    ],
    additionalInfo:
      "Acompanhado por um repositório GitHub com exemplos de código e exercícios complementares.",
    downloadLink: "/downloads/algoritmos-python.pdf",
  },
  {
    id: 3,
    title: "Inteligência Artificial para Iniciantes",
    author: "Carlos Oliveira",
    category: "Artigos",
    year: "2022",
    image: "/assets/images/ia_iniciantes.jpeg",
    description: "Uma introdução ao mundo da IA, com exemplos práticos.",
    fullDescription:
      "Este artigo explora os conceitos iniciais de Inteligência Artificial, abordando aprendizado de máquina, redes neurais e processamento de linguagem natural. Inclui exemplos práticos para iniciantes que desejam entender o básico da IA.",
    summary: [
      "Conceitos Fundamentais de IA",
      "Introdução ao Aprendizado de Máquina",
      "Redes Neurais e Deep Learning",
      "Processamento de Linguagem Natural",
      "Aplicações Práticas e Estudos de Caso",
    ],
    additionalInfo:
      "Publicação revisada e recomendada por especialistas da área. Inclui bibliografia e links para estudos avançados.",
    downloadLink: "/downloads/ia-iniciantes.pdf",
  },
  {
    id: 4,
    title: "Engenharia de Software Moderna",
    author: "Ana Lima",
    category: "Programação",
    year: "2023",
    image: "/assets/images/engenharia_software.jpeg",
    description: "Abordagens modernas para o desenvolvimento de software.",
    fullDescription:
      "Um guia detalhado sobre as práticas mais recentes em engenharia de software. Inclui tópicos como metodologias ágeis, DevOps, integração contínua e práticas de qualidade de código. Um recurso valioso para desenvolvedores e gestores de projetos.",
    summary: [
      "Metodologias Ágeis",
      "DevOps e Automação",
      "Qualidade de Código e Testes",
      "Integração e Entrega Contínua",
      "Desenvolvimento Orientado a Domínio",
      "Estudos de Caso e Melhores Práticas",
    ],
    additionalInfo:
      "Acompanha recursos adicionais como templates para integração contínua e checklists para revisão de código.",
    downloadLink: "/downloads/engenharia-software-moderna.pdf",
  },
  {
    id: 5,
    title: "Banco de Dados: Teoria e Prática",
    author: "Pedro Santos",
    category: "Programação",
    year: "2024",
    image: "/assets/images/banco_dados.jpeg",
    description: "Teoria e prática para o uso eficiente de bancos de dados.",
    fullDescription:
      "Este livro explora desde os conceitos teóricos fundamentais dos bancos de dados até a implementação prática de sistemas. Com exemplos de SQL e NoSQL, aborda modelagem de dados, normalização e otimização de consultas.",
    summary: [
      "Fundamentos de Banco de Dados",
      "SQL e NoSQL: Diferenças e Aplicações",
      "Modelagem de Dados Relacional",
      "Otimização e Performance",
      "Banco de Dados Distribuídos",
    ],
    additionalInfo:
      "Inclui exercícios práticos e um banco de dados de exemplo para estudo.",
    downloadLink: "/downloads/banco-dados-teoria-pratica.pdf",
  },
  {
    id: 6,
    title: "Desenvolvimento Web com React",
    author: "Laura Mendes",
    category: "Programação",
    year: "2024",
    image: "/assets/images/react.jpeg",
    description: "Um guia prático para construir aplicações web com React.",
    fullDescription:
      "Este livro oferece uma introdução ao desenvolvimento de aplicações web modernas usando o framework React. Com exemplos práticos, os leitores aprenderão a criar componentes reutilizáveis e gerenciar o estado das aplicações de maneira eficiente.",
    summary: [
      "Introdução ao React",
      "Componentes e Props",
      "Gerenciamento de Estado",
      "React Hooks",
      "Integração com APIs",
      "Desafios Práticos",
    ],
    additionalInfo:
      "Inclui exemplos de código no GitHub e exercícios para prática individual.",
    downloadLink: "/downloads/react-dev.pdf",
  },
  {
    id: 7,
    title: "Machine Learning Aplicado",
    author: "Júlia Fernandes",
    category: "Inteligência Artificial",
    year: "2024",
    image: "/assets/images/machine_learning.jpeg",
    description:
      "Exploração prática de algoritmos de aprendizado de máquina e suas aplicações.",
    fullDescription:
      "Este livro abrange técnicas e algoritmos de Machine Learning aplicados a problemas do mundo real. Desde regressões até redes neurais, este guia oferece uma visão abrangente sobre as tecnologias emergentes de IA.",
    summary: [
      "Fundamentos de Machine Learning",
      "Regressão Linear e Logística",
      "Redes Neurais e Deep Learning",
      "Modelos Não Supervisionados",
      "Aplicações Práticas",
    ],
    additionalInfo:
      "Acompanha notebooks em Python e exemplos práticos em Scikit-learn.",
    downloadLink: "/downloads/machine-learning-aplicado.pdf",
  },
  {
    id: 8,
    title: "Desenvolvimento Mobile com Flutter",
    author: "Bruno Oliveira",
    category: "Desenvolvimento Mobile",
    year: "2023",
    image: "/assets/images/flutter_mobile.jpeg",
    description:
      "Crie aplicações mobile multiplataforma usando o framework Flutter.",
    fullDescription:
      "Com este livro, desenvolvedores aprenderão a construir aplicativos para Android e iOS utilizando o Flutter, um dos frameworks mais populares da atualidade. Inclui exemplos práticos e um projeto completo de um aplicativo mobile.",
    summary: [
      "Introdução ao Flutter",
      "Widgets e Layouts",
      "Gerenciamento de Estado com Provider",
      "Integração com APIs REST",
      "Publicação de Aplicativos",
      "Desafios e Exercícios",
    ],
    additionalInfo:
      "Acompanha exemplos de código e templates prontos para uso.",
    downloadLink: "/downloads/flutter-mobile.pdf",
  },
  {
    id: 9,
    title: "Análise de Dados com Python",
    author: "Fernanda Costa",
    category: "Data Science",
    year: "2023",
    image: "/assets/images/analise_dados_python.jpeg",
    description:
      "Aprenda a manipular, visualizar e interpretar dados usando Python.",
    fullDescription:
      "Neste livro, exploramos como Python pode ser utilizado para análise de dados, abordando desde o uso de bibliotecas como Pandas e Matplotlib até o desenvolvimento de pipelines de análise. Ideal para cientistas de dados iniciantes e avançados.",
    summary: [
      "Manipulação de Dados com Pandas",
      "Visualização de Dados com Matplotlib",
      "Estatísticas Básicas e Avançadas",
      "Introdução ao Machine Learning com Python",
      "Estudos de Caso Reais",
    ],
    additionalInfo:
      "Inclui notebooks Jupyter com exemplos e projetos completos.",
    downloadLink: "/downloads/analise-dados-python.pdf",
  },
  {
    id: 10,
    title: "DevOps para Iniciantes",
    author: "Roberto Lima",
    category: "DevOps",
    year: "2024",
    image: "/assets/images/devops.jpeg",
    description:
      "Aprenda a integrar o desenvolvimento e operações de software.",
    fullDescription:
      "Um guia essencial para entender os conceitos e práticas de DevOps, que visa integrar as equipes de desenvolvimento e operações para uma entrega contínua de software. Ideal para iniciantes na área.",
    summary: [
      "Conceitos Fundamentais de DevOps",
      "Integração Contínua e Entrega Contínua (CI/CD)",
      "Automatização de Testes",
      "Infraestrutura como Código",
      "Monitoramento e Logging",
    ],
    additionalInfo:
      "Inclui exemplos práticos de pipelines CI/CD e templates de automação.",
    downloadLink: "/downloads/devops-iniciantes.pdf",
  },
];

export const testimonials = [
  { 
    id: 1,
    text: "Os livros da Compselects me ajudaram a compreender conceitos avançados de Inteligência Artificial de forma clara e acessível.",
    author: "João Silva",
    role: "Professor de Computação",
  },
  {
    id: 2,
    text: "A coleção de livros sobre programação da Compselects é essencial para quem está começando na área de desenvolvimento de software.",
    author: "Maria Pereira",
    role: "Desenvolvedora Full Stack",
  },
  {
    id: 3,
    text: "Fiquei impressionado com a qualidade editorial da Compselects. Os textos são de altíssimo nível e de fácil compreensão.",
    author: "Carlos Souza",
    role: "Engenheiro de Software",
  },
  {
    id: 4,
    text: "Os livros sobre Ciência de Dados da Compselects são os mais completos e didáticos que encontrei no mercado.",
    author: "Ana Santos",
    role: "Cientista de Dados",
  },
];

export const mockSubmissions = [
  {
    id: 1,
    title: "O Impacto da Tecnologia na Educação",
    author: "João Silva",
    abstract:
      "Este estudo analisa como a tecnologia tem transformado o ambiente educacional, promovendo novas metodologias de ensino e aprendizado.",
    email: "joao.silva@email.com",
  },
  {
    id: 2,
    title: "Inteligência Artificial e Ética",
    author: "Maria Oliveira",
    abstract:
      "A ética na inteligência artificial é um tópico de crescente importância na sociedade moderna, envolvendo questões de viés e privacidade.",
    email: "maria.oliveira@email.com",
  },
  {
    id: 3,
    title: "Desenvolvimento Sustentável e Inovação",
    author: "Carlos Pereira",
    abstract:
      "Explorar o conceito de desenvolvimento sustentável em relação às novas tecnologias e inovações, enfatizando práticas que respeitem o meio ambiente.",
    email: "carlos.pereira@email.com",
  },
];

export const authors = [
  {
    id: 1,
    author: "João Silva",
    bio: "Especialista em Ciência da Computação, com foco em Inteligência Artificial e Estruturas de Dados.",
    image: "https://via.placeholder.com/150",
    publications: "/publications/joao-silva",
    text: "Publicar com a editora foi uma experiência incrível. O suporte editorial me ajudou a refinar minhas ideias e alcançar um público maior do que eu imaginava.",
    role: "Professor de Ciência da Computação"
  },
  {
    id: 2,
    author: "Maria Souza",
    bio: "Desenvolvedora Full Stack com experiência em aplicações web e ensino de programação.",
    image: "https://via.placeholder.com/150",
    publications: "/publications/maria-souza",
    text: "Foi uma jornada transformadora trabalhar com a equipe. Eles foram atenciosos e dedicados, garantindo que cada detalhe fosse perfeito.",
    role: "Desenvolvedora Full Stack"
  },
  {
    id: 3,
    author: "Carlos Oliveira",
    bio: "Autor de diversos livros sobre programação e desenvolvimento de software, apaixonado por IA.",
    image: "https://via.placeholder.com/150",
    publications: "/publications/carlos-oliveira",
    text: "Eu não poderia ter escolhido uma editora melhor. O processo de publicação foi tranquilo e as minhas ideias foram valorizadas desde o início.",
    role: "Autor e Especialista em IA"
  },
  {
    id: 4,
    author: "Ana Lima",
    bio: "Engenheira de Software com expertise em metodologias ágeis e DevOps.",
    image: "https://via.placeholder.com/150",
    publications: "/publications/ana-lima",
    text: "A atenção aos detalhes e o suporte contínuo fizeram toda a diferença no meu processo de publicação. Recomendo totalmente!",
    role: "Engenheira de Software"
  },
  {
    id: 5,
    author: "Pedro Santos",
    bio: "Especialista em bancos de dados e otimização de consultas, com vasta experiência na área.",
    image: "https://via.placeholder.com/150",
    publications: "/publications/pedro-santos",
    text: "O processo de publicação foi ágil e transparente, e o resultado final superou minhas expectativas. Estou muito satisfeito com a experiência.",
    role: "Especialista em Bancos de Dados"
  },
  {
    id: 6,
    author: "Laura Mendes",
    bio: "Desenvolvedora Front-End especializada em React e experiência do usuário (UX).",
    image: "https://via.placeholder.com/150",
    publications: "/publications/laura-mendes",
    text: "Trabalhar com a editora foi uma experiência muito enriquecedora. Eles cuidaram de todos os detalhes, e o feedback foi extremamente valioso.",
    role: "Desenvolvedora Front-End"
  },
  {
    id: 7,
    author: "Júlia Fernandes",
    bio: "Pesquisadora na área de Inteligência Artificial, com foco em aprendizado de máquina e redes neurais.",
    image: "https://via.placeholder.com/150",
    publications: "/publications/julia-fernandes",
    text: "O suporte editorial foi fenomenal. O time ajudou a transformar meu manuscrito em uma obra que realmente reflete minhas ideias e minha pesquisa.",
    role: "Pesquisadora em IA"
  },
  {
    id: 8,
    author: "Bruno Oliveira",
    bio: "Desenvolvedor Mobile com experiência em Flutter e React Native.",
    image: "https://via.placeholder.com/150",
    publications: "/publications/bruno-oliveira",
    text: "A equipe foi extremamente profissional e sempre disponível para discutir ideias. O processo foi fluido e o resultado final ficou incrível.",
    role: "Desenvolvedor Mobile"
  },
  {
    id: 9,
    author: "Fernanda Costa",
    bio: "Cientista de Dados especializada em análise de dados e visualização de grandes volumes de dados.",
    image: "https://via.placeholder.com/150",
    publications: "/publications/fernanda-costa",
    text: "A editora oferece um nível de suporte excepcional. Publicar meu trabalho com eles foi uma das melhores decisões que tomei na minha carreira.",
    role: "Cientista de Dados"
  },
  {
    id: 10,
    author: "Roberto Lima",
    bio: "Especialista em DevOps e automação de infraestrutura, com experiência em CI/CD.",
    image: "https://via.placeholder.com/150",
    publications: "/publications/roberto-lima",
    text: "Desde o primeiro contato até a publicação final, a experiência foi de altíssimo nível. Estou muito satisfeito com o resultado.",
    role: "Especialista em DevOps"
  },
];

export const events = [
  {
    id: 1,
    title: "Lançamento do Livro 'Tecnologias do Futuro'",
    date: "2024-10-15",
    location: "UFCG",
    summary:
      "Participe do lançamento do novo livro do autor John Doe, que explora as inovações tecnológicas mais recentes.",
    agenda: `
            <ul>
              <li><strong>18:00</strong> - Recepção e networking</li>
              <li><strong>19:00</strong> - Apresentação do livro</li>
              <li><strong>20:00</strong> - Sessão de autógrafos</li>
            </ul>
          `,
    image: "/assets/images/tecnologias_do_futuro.jpeg",
  },
  {
    id: 2,
    title: "Workshop de Programação com Python",
    date: "2024-11-05",
    location: "UFCG",
    summary:
      "Um workshop prático sobre programação em Python, cobrindo desde o básico até conceitos avançados.",
    agenda: `
            <ul>
              <li><strong>09:00</strong> - Introdução ao Python</li>
              <li><strong>10:30</strong> - Estruturas de Dados</li>
              <li><strong>12:00</strong> - Almoço</li>
              <li><strong>13:00</strong> - Desenvolvimento de Projetos</li>
            </ul>
          `,
    image: "/assets/images/python.jpeg",
  },
  {
    id: 3,
    title: "Webinar: Inteligência Artificial e Educação",
    date: "2024-11-05",
    location: "Online",
    summary:
      "Um webinar interativo sobre como a IA está sendo aplicada no campo da educação, com especialistas do setor.",
    agenda: `
            <ul>
              <li><strong>15:00</strong> - Introdução e boas-vindas</li>
              <li><strong>15:30</strong> - Palestra: Aplicações da IA na Educação</li>
              <li><strong>16:30</strong> - Painel de Discussão com Especialistas</li>
              <li><strong>17:30</strong> - Sessão de perguntas e respostas</li>
              <li><strong>18:00</strong> - Encerramento e networking online</li>
            </ul>
          `,
    image: "/assets/images/webinar_ai_education.webp",
    registrationLink: "https://example.com/register-webinar",
  },
];

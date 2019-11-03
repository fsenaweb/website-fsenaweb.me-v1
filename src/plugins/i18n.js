import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  'pt_BR': {
    part1: {
      welcomeTxt: 'Especializado em desenvolver soluções web para o sucesso dos seus negócios',
      skills: 'Progressive Web App (PWA), Sites, Sistemas Web, Landing Page, Single Page Application (SPA)'
    },
    part3: {
      title: 'Portfólio',
      description: 'Desenvolvemos as melhores soluções para sua empresa',
      button: 'Confira os trabalhos'
    },
    part4: {
      title: 'Fale Conosco',
      form: {
        title: 'Preencha o formulário',
        name: 'Nome (Obrigatório)',
        email: 'E-mail (Obrigatório)',
        phone: 'Telefone',
        message: 'Deixe aqui sua mensagem...',
        button: 'Envie sua mensagem',
        sending: 'Formulário enviado com sucesso!',
        sending_error: 'Falha ao enviar formulário!'
      }
    },
    quemsou: {
      column1: {
        description: 'Desenvolvendo soluções web para o sucesso dos seus negócios',
        graduation: 'FORMAÇÃO',
        graduationText: 'Graduando em tecnologia em Sistemas para Internet pela Universidade Potiguar – UNP ',
        skills: {
          title: 'COMPETÊNCIAS PESSOAIS',
          item1: 'Responsabilidade',
          item2: 'Espírito de Equipe',
          item3: 'Dedicação',
          item4: 'Organização'
        },
        DevSkill: {
          title: 'HABILIDADES',
          item1: 'Inglês',
          item2: 'Espanhol'
        }
      },
      title: 'Quem sou',
      subtitle: 'Experiência em desenvolvimento de projetos web em todos os segmentos',
      description: {
        part1: 'Muito prazer, meu nome é Matheus Ricelly, sou da cidade de Pau dos Ferros, no interior do Rio Grande do Norte. E como desenvolvedor web, tenho mais de 8 anos de experiência utilizando a linguagem PHP em meus projetos. Trabalho com ferramentas como Laravel, CodeIgniter, Lumen, Git, Docker, entre outras.',
        part2: 'Carreira desenvolvida na área de Tecnologia da Informação, com experiência em desenvolvimento de sistemas web, implantação e manutenção de sistemas, gestão de equipes.',
        part3: 'Nos meus projetos desenvolvidos, tenho soluções completas como Progressive Web App (PWA), Sites, Sistemas Web, Landing Page, Single Page Application (SPA) e aplicações Mobile (Android e iOS).',
        part4: 'Sou entusiasta do mundo javascript e venho fortalecendo meus conhecimentos com o Node, Express, Adonis.js, além de ferramentas frontend como Vue e React para deixar as aplicações web e mobile ainda mais interativas.'
      },
      final: 'Conheça as minhas redes sociais, veja meus trabalhos e participe também dos projetos open-source.'
    },
    portfolio: {
      title: 'Portfólio',
      subtitle: 'Desenvolvemos as melhores soluções para sua empresa',
      description: {
        part1: 'Criar meios e plataformas eficientes para seu negócio na web é nossa especialidade.',
        part2: 'Conheça nossos últimos trabalhos:'
      },
      jobs: {
        veja: 'Veja o Projeto',
        paraiba: {
          title: 'Rede Paraíba de Supermercados',
          description: 'A Rede Paraíba de Supermercados está presente em 18 municípios Paraibanos, com 20 lojas e um faturamento anual (2018) aproximado de 150.000.000,00 milhões, conta com mais 350 colaboradores, 85 check-outs centro de distribuição na Capital Paraibana. Disponibilizando produtos e serviços de qualidade, com foco na excelência do atendimento e buscando contínua melhorias de processos e desenvolvimento das pessoas.'
        },
        mamute: {
          title: 'Circuito Mamute Race',
          description: 'No site do Circuito Mamute Race você encontra detalhes do maior evento de ciclismo da região do Alto Oeste Potiguar e confere notícias, fotos, fica antenado nas redes sociais e conhece todos os seus participantes. Projeto com design arrojado e responsivo, atendendo a todos os dispositivos e tendo um alcance maior em suas divulgações.'
        },
        filarmonica: {
          title: 'Sociedade Filarmônica Pauferrense',
          description: 'Portal oficial da Sociedade Filarmônica da cidade de Pau dos Ferros/RN. Contendo notícias, agenda e demais informações sobre a instituição sem fins lucrativos que incentivam a arte e cultura para crianças e jovens na cidade e região.'
        },
        ceamo: {
          title: 'Colégio CEAMO',
          description: 'Site institucional do Centro Educacional Aproniano Martins de Oliveira (CEAMO), na cidade de Mossoró. O projeto foi desenvolvido com toda estrutura de divulgação (através de notícias, redes sociais integrados, divulgações de boletons, entre outros) aos pais, alunos e a comunidade para conhecerem a instituição, que tem excelência em todos os níveis de ensino.'
        },
        superpet: {
          title: 'Rede Super Pet PB',
          description: 'A Rede Super Pet PB foi fundada em 2007, na cidade de João Pessoa, por oito empresários que compartilhavam de objetivos em comum: a prestação de serviços de qualidade e a referência no carinho e atenção prestados aos animais de estimação. A principal missão da Super Pet é fortalecer o segmento Pet nas regiões em que atua, assegurando aos seus associados uma marca que conserve os seus ideais e ofereça um bom planejamento estratégico de marketing e preços competitivos aos seus associados.  Atualmente contamos com 31 lojas abrangendo um número de empregos estimado em 130 colaboradores'
        },
        sishosting: {
          title: 'SisHosting',
          description: 'Sistema de Gerenciamento de Hosting Livre. Simplificado para pequenas empresas que desejam ter o mínimo de controle dos seus clientes e controle de pagamentos. O sistema possui cadastro de clientes, cadastro dos domínios, geração da fatura, controle de pagamento, com lançamentos futuros. O aplicativo é software livre e estamos aceitando a ajuda da comunidade para ampliarmos esse projeto, implementando novos recursos para distribuição gratuita.'
        },
        mysong: {
          title: 'My Song Native',
          description: 'My Song é um aplicativo nativo (Android ou iOS) de repertório musical, onde o usuário pesquisa pela letras das canções e tem disponível em seu dispositivo móvel a letra completa para acompanhar com algum instrumento musical ou para acompanhar junto com familiares ou amigos nos momentos de lazer. O aplicativo está aberto a comunidade e é totalmente software livre e sempre contando com a ajuda da comunidade para ampliação das funcionalidades, implementando novos recursos ou correções de bugs para distribuição gratuita.'
        }
      }
    },
    menu: {
      home: 'Início',
      who: 'Quem sou',
      blog: 'Blog',
      portfolio: 'Portfólio',
      contact: 'Contatos'
    },
    social: {
      fb: 'Link para o nosso perfil no Facebook.',
      insta: 'Link para o nosso perfil no Instagram.',
      git: 'Link para o nosso perfil no GitHub.',
      twitter: 'Link para o nosso perfil no Twitter.',
      linkedin: 'Link para o nosso perfil no Linkedin.',
      medium: 'Link para o nosso perfil no Medium.'
    }
  },
  'en': {
    part1: {
      welcomeTxt: 'Specialized in developing web solutions for the success of your business',
      skills: 'Progressive Web App (PWA), Sites, Web Systems, Landing Page, Single Page Application (SPA)'
    },
    part3: {
      title: 'Portfolio',
      description: 'We develop the best solutions for your company',
      button: 'Check our work'
    },
    part4: {
      title: 'Contact us',
      form: {
        title: 'Fill the form',
        name: 'Name (Required)',
        email: 'Email (Required)',
        phone: 'Phone',
        message: 'Leave your message here...',
        button: 'Send your message',
        sending: 'Form successfully submitted!',
        sending_error: 'Failed to submit form!'
      }
    },
    quemsou: {
      column1: {
        description: 'Developing web solutions for the success of your business',
        graduation: 'ACADEMIC TRAINING',
        graduationText: 'Graduating in technology in Systems for Internet by Universidade Potiguar - UNP',
        skills: {
          title: 'PERSONAL SKILLS',
          item1: 'Responsibility',
          item2: 'Team spirit',
          item3: 'Dedication',
          item4: 'Organization'
        },
        DevSkill: {
          title: 'SKILLS',
          item1: 'English - (Read/Write)',
          item2: 'Spanish - (Read/Write)'
        }
      },
      title: 'Who I am',
      subtitle: 'Experience in developing web projects in all segments',
      description: {
        part1: 'My name is Matheus Ricelly, I am from the city of Pau dos Ferros, in the interior of Rio Grande do Norte. And as a web developer, I have over 8 years of experience using the PHP language in my projects. Work with tools like Laravel, CodeIgniter, Lumen, Git, Docker, among others.',
        part2: 'Career developed in the area of Information Technology, with experience in web systems development, implementation and maintenance of systems, team management.',
        part3: 'In my developed projects, I have complete solutions like Progressive Web App (PWA), Sites, Web Systems, Landing Page, Single Page Application (SPA) and Mobile applications (Android and iOS).',
        part4: 'I am an enthusiast of the javascript world and have been strengthening my knowledge with Node, Express, Adonis.js, and frontend tools like Vue and React to make web and mobile applications even more interactive.'
      },
      final: 'Get to know my social networks, see my work and also participate in open-source projects.'
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'We develop the best solutions for your company',
      description: {
        part1: 'Creating efficient media and platforms for your web business is our specialty.',
        part2: 'Get to know our latest work:'
      },
      jobs: {
        veja: 'See the Project',
        paraiba: {
          title: 'Rede Paraíba de Supermercados',
          description: 'Rede Paraíba de Supermercados is present in 18 Paraiban municipalities, with 20 stores and an annual turnover (2018) of approximately 150,000,000.00 million, with 350 employees, 85 check-outs, a distribution center in Paraibana Capital. Providing quality products and services, focused on excellence in service and seeking continuous improvements in processes and development of people.'
        },
        mamute: {
          title: 'Circuito Mamute Race',
          description: 'On the website of the Circuit Mamute Race you will find details of the biggest cycling event in the Potiguar High West region and give news, photos, stay tuned in social networks and know all its participants. Project with bold and responsive design, meeting all the devices and having a greater reach in its disclosures.'
        },
        filarmonica: {
          title: 'Sociedade Filarmônica Pauferrense',
          description: 'Official portal of the Philharmonic Society of the city of Pau dos Ferros / RN. Containing news, agenda and other information about the non-profit institution that encourage art and culture for children and young people in the city and region.'
        },
        ceamo: {
          title: 'College CEAMO',
          description: 'Institutional site of the Aproniano Martins de Oliveira Educational Center (CEAMO), in the city of Mossoró. The project was developed with all dissemination structure (through news, integrated social networks, bootee disclosures, among others) to parents, students and the community to get to know the institution, which has excellence at all levels of education.'
        },
        superpet: {
          title: 'Rede Super Pet PB',
          description: 'The Super Pet PB Network was founded in 2007, in the city of João Pessoa, by eight business owners who shared common goals: providing quality services and reference in the care and attention given to pets. The main mission of Super Pet is to strengthen the Pet segment in the regions where it operates, assuring its members a brand that preserves its ideals and offers a good strategic marketing planning and competitive prices to its members. We currently have 31 stores covering an estimated 130 employees'
        },
        sishosting: {
          title: 'SisHosting',
          description: 'Free Hosting Management System. Simplified for small businesses who want to have minimal control of their customers and control payments. The system has customer registration, domain registration, invoice generation, payment control, with future releases. The application is free software and we are accepting the help of the community to expand this project, implementing new resources for free distribution.'
        },
        mysong: {
          title: 'My Song Native',
          description: 'My Song is a native music application (Android or iOS), where the user searches for the lyrics of the songs and has available on his mobile device the complete lyrics to accompany with some musical instrument or to accompany with family or friends in moments of recreation. The application is open to the community and is completely free software and always counting on the community\'s help to extend the functionality, implementing new features or bug fixes for free distribution.'
        }
      }
    },
    menu: {
      home: 'Home',
      who: 'Who am I',
      blog: 'Blog',
      portfolio: 'Portfolio',
      contact: 'Contacts'
    },
    social: {
      fb: 'Link to our profile on Facebook.',
      insta: 'Link to our profile on Instagram.',
      git: 'Link to our profile on GitHub.',
      twitter: 'Link to our profile on Twitter.',
      linkedin: 'Link to our profile on Linkedin.',
      medium: 'Link to our profile on Medium.'
    }
  }
}

const i18n = new VueI18n({
  locale: 'pt_BR', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages // set locale messages
})

export default i18n

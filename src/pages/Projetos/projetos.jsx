import disney from '../../assets/projetos/disney.gif';
import fantastika from '../../assets/projetos/fantastika.gif';
import inverno from '../../assets/projetos/inverno.gif';
import matrix from '../../assets/projetos/matrix.gif';
import megaman from '../../assets/projetos/megaman.gif';
import witcher from '../../assets/projetos/witcher.png';
import calculadora from '../../assets/projetos/calculadora.gif';
import shop from '../../assets/projetos/shopping.gif';

const projetos = [
    {
        id: 1,
        img: matrix,
        titulo: 'Matrix',
        descricao: 'Este projeto cria uma animação de chuva Matrix usando HTML, CSS e JavaScript. A animação exibe caracteres caindo, lembrando o icônico efeito de "chuva digital" visto no filme "Matrix". Os caracteres são uma mistura de símbolos alfanuméricos aleatórios e a sigla "CSTSI".',
        github: 'https://github.com/argelhr/matrix',
        deploy: 'https://matrix-by-argelhr.netlify.app/',
    },
    {
        id: 2,
        img: disney,
        titulo: 'Disney+',
        descricao: 'Este projeto visa recriar de forma precisa o design de uma página estática com o tema da Disney, conforme fornecido pelo VNW por meio da plataforma Figma. O desenvolvimento do projeto foi realizado utilizando HTML e CSS.',
        github: 'https://github.com/argelhr/Desafio_02_VNW',
        deploy: 'https://argelheberle-desafio02.netlify.app/',
    },
    {
        id: 3,
        img: megaman,
        titulo: 'Megaman X - Infinite',
        descricao: 'Este jogo é uma aventura em plataforma inspirada no universo do Megaman X. Desenvolvido utilizando HTML, CSS e JavaScript, o jogo apresenta um desafio envolvente com elementos clássicos de plataforma, ação e tiro. Todos os direitos autorais e marcas registradas são de propriedade da Capcom. Este projeto foi desenvolvido para fins educacionais.',
        github: 'https://github.com/argelhr/MegamanX_Infinite',
        deploy: 'https://megamanx-infinite.netlify.app/',
    },
    {
        id: 4,
        img: witcher,
        titulo: 'The Witcher',
        descricao: 'Este projeto visa recriar de forma precisa o design de uma página estática com o tema da série The Witcher, conforme fornecido pelo VNW por meio da plataforma Adobe. O desenvolvimento do projeto foi realizado utilizando HTML e CSS.',
        github: 'https://github.com/argelhr/Desafio_The_Witcher_VNW'
    },
    {
        id: 5,
        img: inverno,
        titulo: 'Tema Inverno',
        descricao: 'Este é o repositório do projeto de desafio em grupo com o tema de inverno do VAI NA WEB❄🥶❄. Neste desafio foi realizado em equipe onde trabalhamos em conjunto para criar uma aplicação relacionada ao inverno, explorando conceitos e recursos específicos das propriedades de display flex.',
        github: 'https://github.com/argelhr/Desafio_em_grupo_VNW',
        deploy: 'https://desafiovnwinvernoemgrupo.netlify.app//',
    },
    {
        id: 6,
        img: fantastika,
        titulo: 'Fantastika',
        descricao: 'Este projeto visa recriar de forma precisa o design de uma página estática com o tema da Fantastika, conforme fornecido pelo VNW por meio da plataforma Adobe. O desenvolvimento do projeto foi realizado utilizando HTML e CSS de forma que fosse responsivo para celulares, tablets e desktops.',
        github: 'https://github.com/argelhr/fantastika', 
    },
    {
        id: 7,
        img: calculadora,
        titulo: 'Calculadora',
        descricao: 'Este projeto tem como objetivo recriar uma calculadora utilizando ReactJS. A lógica de negócios da calculadora foi desenvolvida em JavaScript, seguindo a abordagem do Meme do Lorenzo, o gênio da matemática, onde os cálculos são realizados conforme os dados são fornecidos.',
        github: 'https://github.com/argelhr/Desafio_VNW_Calculadora',
        deploy: 'https://calculadora-argelhr.netlify.app/',
    },
    {
        id: 9,
        img: shop,
        titulo: 'Shopping Popular',
        descricao: 'Este projeto visa ser um sistema mais engolbado para o Shopping Popular de Pelotas. O sistema foi desenvolvido utilizando HTML, CSS e JavaScript no front e PHP no backend. Tem como objetivo ser um sistema de gerenciamento de lojas, estoque, pedidos, vendas e usuários para o Shopping Popular.',
        github: 'https://github.com/argelhr/Projeto-Shopping-POPCENTER',
    }
]

export default projetos;
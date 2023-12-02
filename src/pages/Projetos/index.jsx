
import { Botoes, Card, Container, Conteudo } from './styles';
import projetos from './projetos';
import github from '../../assets/icons8-github-50.png';
import net from '../../assets/icons8-internet-64.png';

const Projetos = () => {
  return (
    <Container>
      <Conteudo>
        {
          projetos.map((projeto) => (
            <Card key={projeto.id}>
              <aside>
                <figure>
                  <img src={projeto.img} alt={'imagem de demonstração do projeto ' + projeto.nome} />
                </figure>
                <h2>{projeto.titulo}</h2>
                <p>{projeto.descricao}</p>
              </aside>
              <Botoes>
                {
                  projeto.github && (
                    <a href={projeto.github} target="_blank" rel="noreferrer">
                      <img src={github} alt="Logotipo do github" /> Ver código
                    </a>
                  )
                }
                {
                  projeto.deploy && (
                    <a href={projeto.deploy} target="_blank" rel="noreferrer">
                      <img src={net} alt="Imagem simbolizando network" /> Visitar site
                    </a>
                  )
                }
              </Botoes>
            </Card>
          ))
        }
      </Conteudo>
    </Container>
  );

}

export default Projetos;

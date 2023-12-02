import { Card, Container, Content, Sociais, Social } from "./styles";
import argel from "../../assets/perfil.png";
import Linkedin from "../../assets/icons8-linkedin-50.png";
import Github from "../../assets/icons8-github-50.png";
const Home = () => {
    return (
        <Container>
            <Content>
                <Card>
                    <h1>Olá, eu sou o <span>Argel</span></h1>
                    <h2>Desenvolvedor Full Stack</h2>
                    <p>Estudante de Sistemas para Internet</p>

                    <Sociais>
                        <a href="https://linkedin.com/in/argelhr" target="_blank">
                            <Social>
                                <img src={Linkedin} alt="logotipo do linkedin" />
                                <figcaption>
                                    Linkedin
                                </figcaption>
                            </Social>
                        </a>
                        <a href="https://github.com/argelhr" target="_blank">
                            <Social>
                                <img src={Github} alt="" />
                                <figcaption>
                                    Github
                                </figcaption>
                            </Social>
                        </a>
                    </Sociais>
                </Card>
                <img src={argel} alt="Imagem de Argel" />
            </Content>
        </Container>
    );
}

export default Home;
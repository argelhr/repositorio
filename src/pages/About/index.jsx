import { Backend, Container, Content, Educacao, Frontend, Sobre, Tecnologias } from "./styles";
import Gps from "../../assets/icons8-gps-50.png";
import { useEffect, useState } from "react";
import { backend } from "./backend";
import { frontend } from "./frontend";
import ifsul from "../../assets/ifsul.png";
import vnw from "../../assets/vnw.png";

const About = () => {

  return (
    <>
      <Container>
        <Content>
          <Sobre>
            <h2>Sobre mim</h2>
            <figure><img width={15} src={Gps} alt="Logo GPS" />Pelotas, Rio Grande do Sul.</figure>
            <p>Atualmente estou no 5º semestre do curso de Sistemas para Internet no IFSUL, e também estou participando do programa Vai na Web, onde estou aprendendo com ambos a desenvolver aplicações web com as tecnologias mais atuais do mercado.</p>
            <p>Meu objetivo é me tornar um desenvolvedor Full Stack, e para isso estou estudando e me dedicando a cada dia, para que eu possa me tornar um profissional de qualidade e com conhecimento para atuar em qualquer área do desenvolvimento web.
            </p>
          </Sobre>
          <Educacao>
            <h2>Educação</h2>
            <figure>
              <img src={ifsul} alt="Logo IFSUL" />
              <figcaption>
                <h3>IFSUL</h3>
                <p>Sistemas para Internet</p>
                <p>2021 - 2024</p>
              </figcaption>
            </figure>
            <figure>
              <img src={vnw} alt="Logo IFSUL" />
              <figcaption>
                <h3>Vai na Web</h3>
                <p>Desenvolvimento Frontend</p>
                <p>Abr/23 - Dez/23</p>

              </figcaption>
            </figure>
          </Educacao>
          <Backend>
            <h2>Backend</h2>
            <Tecnologias>

              {backend.map((item) => (
                <a key={item.id} href={item.link} target="_blank" rel="noreferrer">
                  <figure >
                    <img src={item.img} alt={`Imagem da tecnologia ${item.name}`} />
                    <figcaption>
                      {item.name}
                    </figcaption>
                  </figure>
                </a>
              ))
              }
            </Tecnologias>
          </Backend>
          <Frontend>
            <h2>Frontend</h2>
            <Tecnologias>
              {frontend.map((item) => (
                <a href={item.link} key={item.id} target="_blank" rel="noreferrer">
                  <figure key={item.id}>
                    <img src={item.img} alt={`Imagem da tecnologia ${item.name}`} />
                    <figcaption>
                      {item.name}
                    </figcaption>
                  </figure>
                </a>
              ))
              }
            </Tecnologias>
          </Frontend>
        </Content >
      </Container >
    </>
  );
}

export default About;
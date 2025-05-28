import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  return (
    <>
      <header>
        <div className="interface">
          <div className="logo">
            <a href="#">
              <img src="/images/logotipo.png" alt="Logo Portfólio João Mello" height="200" width="200" />
            </a>
          </div>

          <nav className="menu-desktop">
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="https://www.linkedin.com/in/joão-gabriel-bastos-301728259/details/certifications/">Certificados</a></li>
              <li><a href="https://github.com/joaobastosmello">Projetos</a></li>
              <li><a href="#sobre" className="section">Especialidades e Sobre</a></li>
            </ul>
          </nav>

          <div className="button-contato">
            <a href="https://wa.me/+5521969091511">
              <button>Contato</button>
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="topo-do-site">
          <div className="interface">
            <div className="flex">
              <div className="texto-topo-site">
                <h1>Bem-Vindo ao Meu Portfólio<span>.</span></h1>
                <p>Nesse Site, eu mostro um pouco sobre meus projetos e o meu perfil profissional.</p>
                <div className="button-contato">
                  <a href="https://www.linkedin.com/in/joão-gabriel-bastos-301728259/">
                    <button>Saiba mais</button>
                  </a>
                </div>
              </div>

              <div className="imagem-topo-site">
                <img src="/images/JoãoMello.png" alt="João Gabriel Bastos Alves de Mello" height="800" width="600" />
              </div>
            </div>
          </div>
        </section>

        <section className="especialidades">
          <div className="interface">
            <h2 className="titulo">MINHAS <span>ESPECIALIDADES.</span></h2>
            <div className="flex">
              <div className="especialidades-box">
                <FontAwesomeIcon icon={['fab', 'js']} />
                <h3>JavaScript</h3>
                <p>Tenho Experiência com JavaScript.</p>
              </div>

              <div className="especialidades-box">
                <FontAwesomeIcon icon={['fab', 'react']} />
                <h3>ReactJS</h3>
                <p>Tenho Experiência com ReactJS.</p>
              </div>

              <div className="especialidades-box">
                <FontAwesomeIcon icon={['fab', 'html5']} />
                <FontAwesomeIcon icon={['fab', 'css3']} />
                <h3>HTML e CSS</h3>
                <p>Tenho Experiência com HTML5 e CSS3.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="sobre">
          <div className="interface">
            <div className="flex">
              <div className="imagem-sobre">
                <img src="/images/eu.jpg" alt="" />
              </div>

              <div className="texto-sobre">
                <h2>Olá, <span>Sou João Mello.</span></h2>
                <p>Me chamo João Gabriel Bastos, tenho 20 anos. Estou procura de uma oportunidade para minha carreira como desenvolvedor. Atualmente venho trabalhando em projetos próprios em busca de encontrar uma vaga na área. Minha especialidade inclui: React, HTML5, CSS3, JavaScript, Python, SQL e PowerApps. Trabalho atualmente na Globo.</p>
                <div className="button-social">
                  <a href="https://www.linkedin.com/in/joão-gabriel-bastos-301728259/">
                    <button><FontAwesomeIcon icon={faLinkedin} /></button>
                  </a>
                  <a href="https://www.instagram.com/joaobastosmello/">
                    <button><FontAwesomeIcon icon={faInstagram} /></button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio">
          <div className="interface">
            <h2 className="titulo">MEU <span>PORTFÓLIO.</span></h2>
            <div className="flex">
              <div className="img-port" style={{ backgroundImage: "url('images/paginabodas.png')" }}>
                <div className="overlay">
                  <h3>Site Bodas de Prata</h3>
                </div>
              </div>
              <div className="img-port" style={{ backgroundImage: "url('images/paginaglau.png')" }}>
                <div className="overlay">
                  <h3>Site Nutricionista</h3>
                </div>
              </div>
              <div className="img-port" style={{ backgroundColor: "#333" }}>
                <div className="overlay">
                  <h3>Em Desenvolvimento</h3>
                  <FontAwesomeIcon icon={faQuestionCircle} style={{ fontSize: '48px', marginTop: '20px' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="formulario">
          <div className="interface">
            <h2 className="titulo">FALA <span>COMIGO.</span></h2>
            <form>
              <input type="text" placeholder="Seu Nome:" required />
              <input type="text" placeholder="Seu E-mail:" required />
              <input type="text" placeholder="Seu Celular:" />
              <textarea placeholder="Sua mensagem" required></textarea>
              <div className="button-enviar">
                <input type="submit" value="ENVIAR" />
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
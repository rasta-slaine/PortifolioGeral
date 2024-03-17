

import icon1 from "/icon-2.svg"
import icon2 from "/icon-1.svg"
import icon3 from "/icon-3.svg"
import icon4 from "/icon-4.svg"


import logo1 from "/logo-figma.svg"
import logo2 from "/logo-linkedin.svg"
import logo3 from "/logo-instagram.svg"
import logo4 from "/logo-github.svg"
import logo5 from "/logo-drible.svg"
import logo6 from "/logo-youtube.svg"

import "./index.scss" 

function About(){
    return(
        <div>
            <div className="title-3">
                <h2>Sobre mim</h2>
            </div>
                <div className="bio">
                    <h1>Nathan Das Chagas Santos</h1>
                    <p>
                      Com expertise em React, Vue, Node.js, Sass, HTML, CSS, e SQL, tenho experiência sólida em desenvolvimento web. Ao trabalhar em projetos, destaco-me na criação de interfaces dinâmicas com React e na construção eficiente de servidores usando Node.js. Minha habilidade com Sass, HTML e CSS garante estilos consistentes e atraentes. Além disso, sou proficiente em manipulação de dados com SQL, contribuindo para experiências web robustas e eficazes. Minha jornada em projetos globais reforça meu compromisso com a precisão e a atenção aos detalhes no desenvolvimento web.
                    </p>

                    <div className="bio-icons">
                            <h3>INSTAGRAM</h3>
                            <h3 className="icons-b">GITHUB</h3>
                            <h3 className="icons-b">EMAIL</h3>
                   </div>
                </div>
                <div className="card-box">
                      <div className="box-card">
                        <div className="box">
                            <img src={icon1} alt="" />
                        </div>
                        
                        <span className="border"></span>
                        
                        <div className="box-text">
                            <h2>Interface & Design</h2>
                            <p>Briefing, wireframe, UX, UI and branding.</p>
                        </div>
                    </div>
                    <div className="box-card">
                        <div className="box">
                            <img src={icon2} alt="" />
                        </div>
                        
                        <span className="border"></span>
                        
                        <div className="box-text">
                            <h2>html & css</h2>
                            <p>Responsive websites with fast loading.</p>
                        </div>
                    </div>
                    <div className="box-card">
                        <div className="box">
                            <img src={icon3} alt="" />
                        </div>
                        
                        <span className="border"></span>
                        
                        <div className="box-text">
                            <h2>React.js</h2>
                            <p>Build your system with node.js.</p>
                        </div>
                    </div>
                    <div className="box-card">
                        <div className="box">
                            <img src={icon4} alt="" />
                        </div>
                        
                        <span className="border"></span>
                        
                        <div className="box-text">
                            <h2>WordPress</h2>
                            <p>Create your e-commerce or blog with PHP.</p>
                        </div>
                    </div>
                </div>
                <div className="card-experience-block">
                    <div className="card-experience-container">
                        <span></span>
                        <div className="card-experience-text">
                            <h3>I have had experiences with</h3>
                            <p>Firebase Database</p>
                            <p>MySQL Database</p>
                            <p>GIT, GitHub, Bitbucket</p>
                            <p>Coding PHP</p>
                            <p>Figma, Adobe XD, Sketch</p>
                            <p>CSS Preprocessors</p>
                            <p>Digital Marketing</p>
                            <p>Coding Python (Django)</p>
                        </div>
                    </div>
                    <div className="card-experience-container">
                        <span></span>
                        <div className="card-experience-text">
                            <h3>I have had experiences with</h3>
                            <p>Firebase Database</p>
                            <p>MySQL Database</p>
                            <p>GIT, GitHub, Bitbucket</p>
                            <p>Coding PHP</p>
                            <p>Figma, Adobe XD, Sketch</p>
                            <p>CSS Preprocessors</p>
                            <p>Digital Marketing</p>
                            <p>Coding Python (Django)</p>
                        </div>
                    </div>
                    <div className="card-experience-container">
                        <span></span>
                        <div className="card-experience-text">
                            <h3>I have had experiences with</h3>
                            <p>Firebase Database</p>
                            <p>MySQL Database</p>
                            <p>GIT, GitHub, Bitbucket</p>
                            <p>Coding PHP</p>
                            <p>Figma, Adobe XD, Sketch</p>
                            <p>CSS Preprocessors</p>
                            <p>Digital Marketing</p>
                            <p>Coding Python (Django)</p>
                        </div>
                    </div>
                </div>
                <div className="footer-icons">
                    <h2>Contato</h2>
                    <div className="footer-logo" > 
                        <img src={logo1} alt="logo" />
                        <img src={logo2} alt="logo" />
                        <img src={logo3} alt="logo" />
                        <img src={logo4} alt="logo" />
                        <img src={logo5} alt="logo" />
                        <img src={logo6} alt="logo" />
                    </div>
                </div>
        </div>
    )
}


export default About



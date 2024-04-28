

import Card from "../card/card"
import "./index.scss" 

function Projects(){

return(

    <div>
        <div className="title-2">
            <h2>Projetos</h2>
        </div>
        <div className="project-card">
         <Card img={'/img-buscadordepais.png'} link={'https://app.netlify.com/sites/pesquisapaisnathan/overview'} title={'Buscador de pais'} text={'O projeto de Buscador de Países com React é uma aplicação web que permite aos usuários pesquisar informações sobre países ao redor do mundo de forma rápida e intuitiva. Desenvolvido utilizando ReactJS no front-end e uma API de países para obter dados detalhados sobre cada país, este projeto oferece uma maneira simples e eficaz de explorar informações geográficas e culturais de diferentes nações.'} />
         <Card img={'/img-persiana.png'} link={'https://www.persianacruz.com.br/'} title={'Persiana cruz'} text={'O Site Persiana cruz é uma projeto que peguei como freelancer para apresentar e vender produtos de persianas de forma visualmente atraente e funcional. Desenvolvido com Vue.js no front-end e estilizado com Tailwind CSS, este projeto oferece uma experiência de usuário moderna e intuitiva para os clientes explorarem e adquirirem produtos de persianas.'} />
         <Card img={'/img-crud.png'} link={'https://nathancrudreact.netlify.app/'}  title={'Crud react'} text={'O projeto de CRUD com React é uma aplicação web que permite aos usuários realizar operações básicas de criação, leitura, atualização e exclusão (CRUD) de dados em um sistema. Desenvolvido utilizando ReactJS no front-end e no back-end um servidor NodeJs '} />
         <Card img={'/img-encurtador.png'} link={'https://nathan-encutador-de-link.netlify.app/'}  title={'Encurtador de link'} text={'O Encurtador de Link é uma aplicação web que permite encurtar URLs longas, tornando-as mais fáceis de compartilhar em redes sociais, mensagens e outros meios. Desenvolvido utilizando ReactJS no front-end e uma API de encurtamento de URL para gerar os links curtos, este projeto é uma solução simples e eficaz para simplificar o compartilhamento de links'} />
        </div>
    </div>
)

}


export default Projects


import Card from "../card/card"
import "./index.scss" 

function Projects(){

return(

    <div>
        <div className="title-2">
            <h2>Projetos</h2>
        </div>
        <div className="project-card">
         <Card img={'/img.svg'} title={'BeDigital'} text={'Lorem ipsum dolor sit amet, consectetur adipi.Aenean et sem venenatis quam feugiat lla'} />
         <Card img={'/img.svg'} title={'BeDigital'} text={'Lorem ipsum dolor sit amet, consectetur adipi.Aenean et sem venenatis quam feugiat lla'} />
         <Card img={'/img.svg'} title={'BeDigital'} text={'Lorem ipsum dolor sit amet, consectetur adipi.Aenean et sem venenatis quam feugiat lla'} />
         <Card img={'/img.svg'} title={'BeDigital'} text={'Lorem ipsum dolor sit amet, consectetur adipi.Aenean et sem venenatis quam feugiat lla'} />
        </div>
    </div>
)

}


export default Projects
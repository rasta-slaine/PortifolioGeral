

import "./index.scss"


function Card({img,title,text,link}){

    return(
        <div className='card'>
            <div className='Card-img'>
                <a href={link} target="_blank" rel="noopener noreferrer"> <img src={img} alt="image" /></a>
            </div>
            <div className='Card-text'>
                <h3>{title}</h3>
                <p>{text}</p>
              
            </div>
        </div>
    )
}


export default Card
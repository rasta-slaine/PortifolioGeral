

import "./index.scss"


function Card({img,title,text}){

    return(
        <div className='card'>
            <div className='Card-img'>
                 <img src={img} alt="image" />
            </div>
            <div className='Card-text'>
                <h3>{title}</h3>
                <p>{text}</p>
              
            </div>
        </div>
    )
}


export default Card
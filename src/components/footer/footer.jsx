
import logo2 from "/logo-linkedin.svg"
import logo3 from "/logo-instagram.svg"
import logo4 from "/logo-github.svg"


import "./index.scss" 

function Footer(){


return(

<div className="footer-icons">
                    <h2>Contato</h2>
                    <div className="footer-logo" > 
                        <a href="https://www.linkedin.com/in/nathan-das-chagas-santos-862179185/" target="_blank" rel="noopener noreferrer"><img src={logo2} alt="logo" /></a>
                        <a href="https://www.instagram.com/nathanslaine/" target="_blank" rel="noopener noreferrer"></a><img src={logo3} alt="logo" />
                        <a href="https://github.com/rasta-slaine" target="_blank" rel="noopener noreferrer"><img src={logo4} alt="logo" /></a>

                    </div>
    </div>

)

}


export default Footer
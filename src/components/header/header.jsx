
import logo from '/dnc.svg'; /* importando direto da pasta public */
import "./index.scss"


function Header(){

    const MenuList = [
        {id:1,title:'home'},
        {id:2,title:'projetos'},
        {id:3,title:'sobre mim'},
        {id:4,title:'contato'}
    ]

return(

<div className="geral" id='top'>
    <div className='logo'>
    <img src={logo} alt="Logo" />
    </div>
    <div className="block2">
        <div className='menu'>
            <ul>
            {MenuList.map((menu) => (
                <li key={menu.id} className='menuitem'><a href={`#${menu.title}`}>{menu.title}</a></li>
            ))}
            </ul>   
        </div>
        <div className="text">
            <h1>front-end.web(developer)</h1>
        </div>
    </div>
</div>

)

}


export default Header

/*]

    
                <li>home</li>
                <li>projetos</li>
                <li>sobre mim</li>
                <li>contato</li>

*/

import { Link } from "react-router-dom";
import './styles.css'

const Header = () => {

    return(
        <main className="container-man">
    
            <ul>
                <li><Link to = "/"><a>Página inicial</a></Link></li>
                <li><Link to = "/conta"><a>Conta do Nubank</a></Link></li>
                <li><Link to = "/conta-pj"><a>Para seu negócio</a></Link></li>
                <li><Link to = "/sobre-nos"><a>O Nubank</a></Link></li>
                
            </ul>
            <a className="login"><Link to = "/login"><a>Login</a></Link></a>

        </main>

    )
}

export default Header;
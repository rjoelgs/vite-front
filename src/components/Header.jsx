import { Link } from "react-router-dom"

const Header = ()=>{
    

    return (
        <header className="header">
            <ul className="ul">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/contacto">Contacto</Link>
                <Link className="link" to="/productos">Productos</Link>
            </ul>
        </header>
    )
}

export default Header
import { Link } from 'react-router-dom'
import { menuItems } from '../../constants/menuItems'
import NavItem from './NavItem'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="#">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {
                                menuItems.map((item, idx) => (
                                    <NavItem objItem={item} key={idx + item.nombre}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
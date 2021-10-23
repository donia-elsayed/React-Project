import {Link} from 'react-router-dom'
function NavBar() {
    return (
        <nav className="nav d-flex justify-content-around align-items-baseline bg-primary pt-3">
            <h3 className="text-white">Products</h3>
            <ul className="d-flex justify-content-between align-items-baseline list-unstyled">
                <li className="mx-3 text-capitalize fs-4">
                    <Link to="/" className="text-white text-decoration-none">home</Link>
                </li>
                <li className="mx-3 text-capitalize fs-4">
                    <Link to="/shop" className="text-white text-decoration-none">shop</Link>
                </li>
                <li className="mx-3 text-capitalize fs-4">
                    <Link to="/counter" className="text-white text-decoration-none">counter</Link>
                </li>
                <li className="mx-3 text-capitalize fs-4">
                    <Link to="/todo" className="text-white text-decoration-none">ToDo List</Link>
                </li>
                <li className="mx-3 text-capitalize fs-4">
                    <Link to="/login" className="text-white text-decoration-none">Login</Link>
                </li>
                <li className="mx-3 text-capitalize fs-4">
                    <Link to="/register" className="text-white text-decoration-none">Register</Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;
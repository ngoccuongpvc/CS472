import { NavLink } from "react-router-dom";

export default function NavBar(props) {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/" >Cuong's Online Dictionary</NavLink>
            </div>
        </nav>
    )
}
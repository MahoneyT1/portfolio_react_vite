import "./Navbar.css"
import { NavLink } from "react-router-dom";

const Navbar = ()=> {

    return (
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark pe-md-1 px-lg-5 border-bottom border-1 border-success">
            <div className="container-fluid px-3">
                <a className="navbar-brand text-success fw-bold nav-custom-hover" href="#hero"><h4>Mahoney</h4></a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon " style={{width: "20px", height: "15px"}}></span>
                </button>

            {/* navbar collapseable content */}
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav  w-100 d-flex justify-content-end align-items-center">
                    <li className="nav-item ">
                        <a className="nav-link d-flex mx-4 text-white nav-custom-hover" href="#about" >About</a>
                    </li>

                    <li className="nav-item active" aria-current="true">
                        <a className="nav-link mx-2 text-white nav-custom-hover" href="#projects">Projects</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-white m-2 nav-custom-hover" href="#skills">Skills</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-white mx-2 nav-custom-hover" href="#experience">Experience</a>
                    </li>

                    <li className="nav-item ">
                        <a className="nav-link text-white mx-2 nav-custom-hover" href="#contact">Contact</a>
                    </li>

                </ul>
            </div>
            </div>


        </nav>
    )
}

export default Navbar;

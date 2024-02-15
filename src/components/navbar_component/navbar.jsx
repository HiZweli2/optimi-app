import SearchbarComponent from "./searchbar";

const NavbarComponent = () =>{
    return(
        <>
            <nav className="navbar navbar-expand-lg  navbg">
                <div className="container-fluid">
                    <a className="navbar-brand liText" href="#">Optimi</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item navli">
                                <a className="nav-link  liText" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item dropdown navli">
                                <a className="nav-link dropdown-toggle liText" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Go to projects
                                </a>
                                <ul className="dropdown-menu">
                                   <SearchbarComponent/>
                                </ul>
                            </li>
                            <li className="nav-item navli">
                                <a className="nav-link liText" href="#">Products</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarComponent;

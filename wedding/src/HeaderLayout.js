import * as React from "react"
import { Route } from "react-router-dom"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export const HeaderLayout = ({ component: Component, ...rest }) => {
    const [isNavOpen, setNav] = React.useState(false);

    const onToggle = () => {
        setNav(!isNavOpen);
    };

    const closeToggle = () => {
        setNav(false);
    };
    return (
        <Route {...rest} render={(props) => (
            <>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation" onClick={onToggle} >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div onClick={closeToggle} className="navbar-nav">
                            <NavLink className="nav-item nav-link" to='/' exact={true}>Home</NavLink>
                            <NavLink className="nav-item nav-link" to='/gallery'>Gallery</NavLink>
                            <NavLink className="nav-item nav-link" to='/about'>About</NavLink>
                            <NavLink className="nav-item nav-link" to='/contact'>Contact</NavLink>
                        </div>
                    </div>
                    {isNavOpen &&
                        <div id="mySidenav" onClick={closeToggle} className="sidenav">
                            <div onClick={closeToggle} className="sidenav-items">
                                <NavLink className="nav-item nav-link" to='/' exact={true}>Home</NavLink>
                                <NavLink className="nav-item nav-link" to='/gallery'>Gallery</NavLink>
                                <NavLink className="nav-item nav-link" to='/about'>About</NavLink>
                                <NavLink className="nav-item nav-link" to='/contact'>Contact</NavLink>
                            </div>
                        </div>
                    }
                </nav>
                <Component {...props} />
            </>
        )} />
    )
};

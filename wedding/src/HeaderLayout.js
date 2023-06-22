import * as React from "react"
import { Route } from "react-router-dom"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Logo from './imgs/logos/logo.png';
import './App.css';

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
                <div className='logo_header'>
                    <a href='/'>
                        <img id='header_img' alt='logo' src={Logo} />
                    </a>
                </div>
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
                <footer className="section section_footer">
                    <div className="footcontainer">
                        <div className="icons">
                            <a href="https://www.facebook.com/blissfullyso/" target='_blank'>
                                <img src="https://assets-global.website-files.com/5babb9f91ab233724e53ce0b/5babb9f91ab233460253ce65_font-awesome_4-7-0_facebook_100_0_278bd5_none.png"
                                    width="25" alt="fb" />
                            </a>
                            <a href="https://www.instagram.com/blissfullyso.events" target='_blank'>
                                <img src="https://assets-global.website-files.com/5babb9f91ab233724e53ce0b/5babb9f91ab233817a53ce66_font-awesome_4-7-0_instagram_100_0_278bd5_none.png"
                                    width="25" alt="insta" />
                            </a>
                        </div>
                        <h5>NJ . NY // 917.830.7788</h5>
                        <h5>BLISSFULLYSOEVENTS@GMAIL.COM</h5>
                        <h8>DESIGN/BRANDING: ARIEL MA</h8>
                        <h8>www.arielma.com</h8>
                    </div>
                </footer>
            </>
        )} />
    )
};

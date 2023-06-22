import * as React from "react";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export const qwer = 'davidfound';
export const ty = 'hisjam';

export const WeddingHeaderLayout = ({ component: Component, ...rest }) => {
    const [lock, setLock] = React.useState();

    React.useEffect(() => {
        let pw = window.prompt('Please enter the password from your invitation.');
        pw = pw && pw.toLowerCase() && pw.replaceAll(' ', '');
        if (pw === qwer + ty) {
            setLock(false);
        }
        else {
            setLock(true);
        }
    }, []);

    const getNavItems = () => {
        return (
            <>
                <a href="#0">
                    <NavLink className="nav-item nav-link disabled active" to='#1'>Home</NavLink>
                </a>
                <a href="#1">
                    <NavLink className="nav-item nav-link disabled active" to='#2'>Travel</NavLink>
                </a>
                <a href="#2">
                    <NavLink className="nav-item nav-link disabled active" to='/party'>Party</NavLink>
                </a>
                <a href="#3">
                    <NavLink className="nav-item nav-link disabled active" to='#3'>Hotel</NavLink>
                </a>
                <a href="#4">
                    <NavLink className="nav-item nav-link disabled active" to='#4'>Registry</NavLink>
                </a>
                <a href="#6">
                    <NavLink className="nav-item nav-link disabled active" to='#6'>RSVP</NavLink>
                </a>
                <a href="#5">
                    <NavLink className="nav-item nav-link disabled active" to='/faqs'>Faq</NavLink>
                </a>
            </>
        );
    };

    if (lock === undefined) { return null; }

    return (
        <Route {...rest} render={(props) => (
            lock !== false ?
                <div><a href='/wedding'>Incorrect Password. Please try again!</a></div> :
                <>
                    <nav className="wedding-navbar navbar-expand navbar-light bg-light">
                        <div className='wedding-header'>jamie & david</div>
                        <div className="navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                {getNavItems()}
                            </div>
                        </div>
                    </nav>
                    <Component  {...props} />
                </>
        )} />
    )
};

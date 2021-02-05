import React from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import { logout } from '../actions/auth';
import  logo  from '../assets/images/logo.png';


const Header = ({ isLogin, user, ...props}) => {
    const [isActive, setisActive] = React.useState(false);
    
    const handleLogout = () => {
        props.logout();
        props.history.push('/login');
    }

    return (
        <section className='container is-fluid'>
            <header>
                <nav className="navbar has-logo-above" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                       
                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                            data-target="navbarBasicExample" onClick={() => {
                                setisActive(!isActive);
                            }}
                            role="button"
                            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                            aria-label="menu"
                            aria-expanded="false"
                            data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                        <div className="navbar-start">
                            
                        </div>
                        <div className="navbar-end ">
                        
                            <Link className="navbar-item" to="/">
                                <img src={logo}></img>
                            </Link>
                            <p className="navbar-item has-text-weight-semibold has-text-white">
                                {isLogin && user.name }
                            </p>
                            {isLogin ?
                                <a className="navbar-item has-text-weight-semibold has-text-white" onClick={handleLogout}> LOGOUT </a>
                                :
                                <Link className="navbar-item" to="/login"> LOGIN </Link>
                            }
                        </div>
                    </div>
                </nav>
            </header>
        </section>
    )

}

const mapStateToProps = state => {
    return {
        isLogin : state.auth.isLogin,
        user:  state.auth.user
    };
};

const mapDispatchToProps = {
    logout,
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps )(Header));
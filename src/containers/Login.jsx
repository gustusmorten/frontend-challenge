import React, { useState }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { authtenticateMock, login } from '../actions/auth';
import  logo  from '../assets/images/logo.png';
import  bg  from '../assets/images/bg.jpeg';

import { getError } from 'reducers/auth';


const Login = (props) => {
    const [form, setValues] = useState({
        email: '',
    });

    const handleInput = (event) => {
        setValues({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.authtenticateMock(form,'/');
    };



    return (
        <section className="hero is-fullheight bg-img  is-bold"  style={{ backgroundImage:`url(${bg})` }}>
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-5-tablet is-4-desktop is-4-widescreen">
                            <form onSubmit={handleSubmit} className="box">
                                <div className="level mb-0">
                                    <div className="level-left">
                                        <div className="level-item">
                                            <figure className="image is-64x64">
                                                <img className="is-rounded" src={logo} alt="logo"/>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="level-right">
                                        <div className="level-item">
                                            <p className="title has-text-centered has-text-black is-5">
                                                Hogwarts <br/>
                                                School of Witchcraft and Wizardry
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="is-divider" data-content="OR"></div>
                                <p className="has-text-centered is-size-6 has-text-danger">
                                    {props.error && 
                                    "Incorrect username or password"}
                                </p>
                                <br />
                                <div className="field">
                                    <div className="control has-icons-left">
                                        <input type="text" placeholder="enter username" className="input"  id='user' name='email' required onChange={handleInput}></input>
                                        <span className="icon is-small is-left">
                                            <FontAwesomeIcon icon="user" />
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control has-icons-left">
                                        <input type="password" placeholder="enter password" className="input" id='pass' name='pass' required onChange={handleInput}></input>
                                        <span className="icon is-small is-left">
                                            <FontAwesomeIcon icon="lock" />
                                        </span>
                                    </div>
                                </div>
                                <br />
                                <div className="field">
                                    <button className="button is-success is-fullwidth" type='submit'>
                                        Login
                                    </button>
                                </div>
                                <br/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const mapDispatchToProps = {
    authtenticateMock,
    login
};
const mapStateToProps = state => ({
    error: getError(state),
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
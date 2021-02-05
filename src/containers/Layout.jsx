import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { getUser, getIslogin } from '../reducers/auth';
import { loadUser } from '../actions/auth';
import { getStore, setStore } from '../helpers/helpers';
import { withRouter } from 'react-router-dom';

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { loadUser, user,isLogin } = this.props;
        if(!isLogin){
            var userFromSotrage = getStore('user');
            if (userFromSotrage) {
                loadUser(userFromSotrage);

            }else{
                this.props.history.push('/login');
            }
        }

    }

    render() {
        const { user, isLogin } = this.props;
        return (
            <div className={user.house === "Gryffindor" ? "is-gryffindor" : (user.house === "Slytherin" ? "is-slytherin" : (user.house === "Hufflepuff" ? "is-hufflepuff" : (user.house === "Ravenclaw" ? "is-ravenclaw" : "is-others")))}>
                {isLogin && <Header></Header>}
                
                {this.props.children}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    user: getUser(state),
    isLogin: getIslogin(state),
})

const mapDispatchToProps = {
    loadUser,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
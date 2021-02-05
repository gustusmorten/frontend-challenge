import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '../components/List'

import {fetchAllCharacters,fetchStudentsCharacters} from '../actions/characters';
import {getCharactersError, getCharactersLoading, getCharacters} from '../reducers/characters';
import Filters from 'components/Filters';
import { getUser } from 'reducers/auth';


class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {fetchAllCharacters, fetchStudentsCharacters ,user} = this.props;
        if (user.isStaff) {
            fetchAllCharacters();
        } else if (user.isStudent) {
            fetchStudentsCharacters();
        }
    }

    render() {

        return (
            <section className='container is-halfheight mt-6'>
                <div className='columns'>
                    <div className='column is-one-quarter'>
                        <Filters></Filters>
                    </div>
                    <div className='column'>
                        <List></List>
                    </div>
                </div>
            </section>
        )
    }
}


const mapStateToProps = state => ({
    error: getCharactersError(state),
    characters: getCharacters(state),
    loading: getCharactersLoading(state),
    user: getUser(state)
})

const mapDispatchToProps = {
    fetchAllCharacters,
    fetchStudentsCharacters,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
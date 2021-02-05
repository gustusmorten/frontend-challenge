import Card from 'components/Card';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCharactersError, getCharactersLoading, getCharacters } from '../reducers/characters';


class List extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    shouldComponentRender() {
        const { loading } = this.props;
        if (loading === false) return false;
        return true;
    }

    render() {
        const { characters } = this.props;
        return (
            <div className='columns is-multiline is-vcentered'>
                {characters.map((item, index) =>
                    <Card key={index} character={item} />
                )}
            </div>

        )
    }
}


const mapStateToProps = state => ({
    error: getCharactersError(state),
    characters: getCharacters(state),
    loading: getCharactersLoading(state)
})


export default connect(mapStateToProps, null)(List);
import { Types } from './actionTypes';
import axios from 'axios';

const BASEURL = "http://hp-api.herokuapp.com/api";

export const getCharacters = (data) => ({ type: Types.GET_CHARACTERS, payload: data });
export const charactersLoading = () => ({ type: Types.GET_CHARACTERS_LOADING, payload: {} });
export const charactersError = (error) => ({ type: Types.GET_CHARACTERS_ERROR, payload: error });

export const filterCharacters = (filters) => ({ type: Types.FILTER_CHARACTERS, payload: filters });

export const fetchAllCharacters = () => {
    return (dispatch) => {

        dispatch(charactersLoading());
        
        axios.get(BASEURL + '/characters')
        .then(data => {
            if(data.error) {
                throw(data.error);
            }
            dispatch(getCharacters(data.data));
            return data;
        })
        .catch(error => {
            dispatch(charactersError(error));
        })
    }
};

export const fetchStudentsCharacters = () => {
    return (dispatch) => {
        dispatch(charactersLoading());
        axios.get(BASEURL + '/characters/students')
        .then(data => {
            if(data.error) {
                throw(data.error);
            }
            dispatch(getCharacters(data.data));
            return data;
        })
        .catch(error => {
            dispatch(charactersError(error));
        })
    }
};


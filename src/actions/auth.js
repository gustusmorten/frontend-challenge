import axios from 'axios';
import { Types } from './actionTypes';
import { Redirect } from 'react-router-dom'
const BASEURL = "http://hp-api.herokuapp.com/api";

export const login = (user) => ({ type: Types.LOGIN, payload: { user } });
export const logout = () => ({ type: Types.LOGOUT, payload: {} });
export const loadUser = (user) => ({ type: Types.LOAD_USER, payload: { user } });
export const setError = (e) => ({ type: Types.SET_ERROR, payload: { e } });


export const authtenticate = (form, redirectUrl) => {
    return (dispatch) => {

        axios.post('/auth/sign-in', JSON.stringify({
            username: form.email,
            password: form.pass
        }))
            .then(({ data }) => {
                dispatch(login(data.user));
            })
            .then(() => {
                window.location.href = redirectUrl;
            })
            .catch((err) => dispatch(setError(err)));
    };
};

export const authtenticateMock = (form, redirectUrl) => {
    return (dispatch) => {
        axios.post('/api/auth', JSON.stringify({
            username: form.email,
            password: form.pass
        }))
            .then(({ data }) => {
                dispatch(login(data.user));
            })
            .then(() => {
                window.location.href = redirectUrl;
            })
            .catch((err) => dispatch(setError(err)));
    };
};
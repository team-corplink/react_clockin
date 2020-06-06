import React, {useEffect} from "react";
import AuthForm from "../../components/auth/AuthForm";
import {useDispatch, useSelector} from "react-redux";
import {changeField, initializeForm, login} from "../../modules/auth";
import {withRouter} from 'react-router-dom';

const LoginForm = ({history}) => {
    const dispatch = useDispatch();
    const {form} = useSelector(({auth}) => ({
        form: auth.login,
    }));

    const onChange = e => {
        const {value, name} = e.target;
        dispatch(changeField({
            form: 'login',
            key: name,
            value,
        }))
    };

    const onSubmit = e => {
        e.preventDefault();
        const {phone, password} = form;
        dispatch(login({phone, password}));
    };

    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    return (
        <AuthForm
            type="login"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default withRouter(LoginForm);
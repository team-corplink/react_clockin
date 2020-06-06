import React, {useEffect} from "react";
import AuthForm from "../../components/auth/AuthForm";
import {useDispatch, useSelector} from "react-redux";
import {changeField, initializeForm, register} from "../../modules/auth";

const RegisterForm = ({history}) => {
    const dispatch = useDispatch();
    const {form} = useSelector(({auth}) => ({
        form: auth.register,
    }));

    const onChange = e => {
        const {value, name} = e.target;
        dispatch(changeField({
            form: 'register',
            key: name,
            value,
        }))
    };

    const onSubmit = e => {
        e.preventDefault();
        const {phone, password, passwordConfirm, nickName} = form;
        if ([phone, password, passwordConfirm, nickName].includes('')) {
            alert('빈 칸을 모두 입력하세요.');
            return;
        }
        if (password !== passwordConfirm) {
            alert('비밀번호가 일치하지 않습니다.');
            changeField({form: 'register', key: 'password', value: ''});
            changeField({form: 'register', key: 'passwordConfirm', value: ''});
        }
        dispatch(register({phone, password}));
    };

    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    return (
        <AuthForm
            type="register"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default RegisterForm;
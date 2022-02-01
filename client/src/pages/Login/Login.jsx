import { useState } from 'react';
import http from '../../services/http';
import { useDispatch } from 'react-redux';
import { HOME } from '../../utils/routes';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/actions/authAction';
import { Title, Input, Wrap, SubmitButton, Register, RegisterTo } from './Login.style';
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const initialData = { email: '', password: '' }
    const [details, setDetails] = useState(initialData);
    const handleChange = e => {
        const { name, value } = e.target;
        setDetails(prev => {
            return { ...prev, [name]: value }
        })
    }
    const signIn = () => {
        dispatch(login(true))
    }
    const submitHandler = e => {
        e.preventDefault();
        const { email, password } = details
        if (email.trim() || password.trim()) {
            const newObj = { email, password }
            http.post(`/auth`, newObj).then(async (res) => {
                if (res.data.success) {
                    localStorage.setItem('token', res.data.token)
                    navigate(HOME)
                    signIn()
                }
            }).catch((e) => {
                const { response } = e
                alert(response?.data)
            })
        }
    }
    return (
        <>
            <Title>Login</Title>
            <form onSubmit={submitHandler}>
                <Wrap>
                    <Input type='email' placeholder='Email' required autoComplete='off' name='email' value={details.email} onChange={handleChange} />
                    <Input type='password' placeholder='Password' required autoComplete='off' name='password' value={details.password} onChange={handleChange} />
                    <SubmitButton onClick={submitHandler}>Sign in</SubmitButton>
                    <RegisterTo>Don't have an account? <Register to='/register'>Register</Register></RegisterTo>
                </Wrap>
            </form>
        </>
    );
};
export default Login;
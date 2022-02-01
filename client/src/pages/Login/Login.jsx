import { useEffect, useState } from 'react';
import http from '../../services/http';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, getUser } from '../../redux/actions/authAction';
import { Title, Input, Wrap, SubmitButton, RegisterTo } from './Login.style';
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.user.isLogged);
    console.log('isLogged', isLogged);
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
                console.log('res.headers', res);
                if (res.data.success) {
                    localStorage.setItem('token', res.data.token)
                    navigate('/home')
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
                    <RegisterTo>Don't have an account? <Link to='/register'>Register</Link></RegisterTo>
                </Wrap>
            </form>
        </>
    );
};
export default Login;
import { useState } from 'react';
import http from '../../services/http';
import { LOGIN } from '../../utils/routes';
import { useNavigate } from 'react-router-dom';
import { Title, Input, Wrap, Login, LoginTo, SubmitButton } from './Register.style';
const Register = () => {
    const navigate = useNavigate();
    const initialData = { name: '', email: '', password: '' }
    const [details, setDetails] = useState(initialData);
    const handleChange = e => {
        const { name, value } = e.target;
        setDetails(prev => {
            return { ...prev, [name]: value }
        })
    }
    const submitHandler = e => {
        e.preventDefault();
        const { name, email, password } = details
        if (name.trim() || password.trim()) {
            const newObj = { name, email, password }
            http.post(`/user`, newObj).then((res) => {
                if (res.data.success) {
                    navigate(LOGIN)
                }
            }).catch((e) => {
                const { response } = e
                alert(response?.data?.message)
            })
        }
    }
    return (
        <>
            <Title>Register</Title>
            <form onSubmit={submitHandler}>
                <Wrap>
                    <Input placeholder='Name' type="text" required autoComplete='off' name='name' value={details.name} onChange={handleChange} />
                    <Input type='email' placeholder='Email' required autoComplete='off' name='email' value={details.email} onChange={handleChange} />
                    <Input type='password' placeholder='Password' required autoComplete='off' name='password' value={details.password} onChange={handleChange} />
                    <SubmitButton onClick={submitHandler}>Register</SubmitButton>
                    <LoginTo>Already have an account? <Login to='/login'>Login</Login></LoginTo>
                </Wrap>
            </form>
        </>
    );
};

export default Register;

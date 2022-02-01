import styled from "styled-components";
import { Link } from 'react-router-dom';
const Title = styled.h1`
    margin: 0;
    margin-bottom: 50px;
    font-weight: bold;
    font-size: 44px;
    line-height: 60px;
    color: #21243D;
    text-align: center;
    text-transform: capitalize;
    @media (max-width: 992px) {
        font-size: 40px;
        margin-bottom: 40px;
        line-height: 50px;
    }
    @media (max-width: 768px) {
        font-size: 30px;
        margin-bottom: 30px;
        line-height: 40px;
    }
    @media (max-width: 600px) {
        font-size: 20px;
        margin-bottom: 20px;
        line-height: 30px;
    }
`
const Wrap = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
const Input = styled.input`
    height: 45px;
    width: 50%;
    padding: 15px;
    font-size: 16px;
    background: #FFFFFF;
    border: 2px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 5px;
    transition: all 0.3s ease;
    &:not(:last-child){
        margin-bottom: 20px;
    }
    &:focus {
        border-color: #4040f0;
        outline: none;
    }
     @media (max-width: 992px) {
        padding: 14px;
        font-size: 16px;
        height: 38px;
    }
    @media (max-width: 768px) {
        padding: 10px;
        font-size: 14px;
        height: 35px;
    }
    @media (max-width: 600px) {
        padding: 8px;
        font-size: 12px;
        height: 28px;
    }
`
const SubmitButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    width: 50%;
    height: 40px;
    background-color: #ff5e86;
    border-radius: 8px;
    border: none;
    outline: none;
    color: #fff;
    font-weight: bold;
    font-size: 19px;
    line-height: 28px;
    margin: 0;
    margin-top: 20px;
    cursor: pointer;
    &:hover {
        color: #fff;
        border: 1px solid #ff5782;
        background-color: #ff4070;
    }
    @media (max-width: 1200px) {
        width: 135px;
        height: 45px;
        margin-top: 0;
        font-size: 19px;
    }
    @media (max-width: 992px) {
        width: 50%;
        height: 35px;
        margin-top: 0;
        font-size: 16px;
    }
    @media (max-width: 768px) {
        width: 50%;
        height: 30px;
        margin-top: 0;
        font-size: 14px;
    }
    @media (max-width: 600px) {
        width: 50%;
        height: 30px;
        margin-top: 0;
        font-size: 12px;
    }
`
const LoginTo = styled.div`
    font-size: 16px;
    margin-top: 15px;
`
const Login = styled(Link)`
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
`
export { Title, Input, Wrap, Login, LoginTo, SubmitButton }
import styled from "styled-components";

const Title = styled.h1`
    margin: 0;
    margin-bottom: 50px;
    font-weight: bold;
    font-size: 44px;
    line-height: 60px;
    color: #21243D;
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
const Label = styled.label`
    display: block;
    color: #21243D;
    font-weight: bold;
    font-size: 18px;
    line-height: 60px;
    @media (max-width: 992px) {
        font-size: 17px;
        line-height: 50px;
    }
    @media (max-width: 768px) {
        font-size: 16px;
        line-height: 40px;
    }
    @media (max-width: 600px) {
        font-size: 14px;
        line-height: 30px;
    }
`
const Input = styled.input`
    height: 45px;
    width: 100%;
    padding: 15px;
    font-size: 16px;
    background: #FFFFFF;
    border: 2px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 5px;
    transition: all 0.3s ease;
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
        height: 38px;
    }
    @media (max-width: 600px) {
        padding: 8px;
        font-size: 12px;
        height: 30px;
    }
`
const SubmitButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    width: 157px;
    height: 49px;
    background-color: #FF7999;
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
        border: 1px solid #FF7999;
        color: #FF7999;
        background-color: transparent;
    }
    @media (max-width: 1200px) {
        width: 135px;
        height: 45px;
        font-size: 19px;
    }
    @media (max-width: 992px) {
        width: 120px;
        height: 40px;
        font-size: 16px;
    }
    @media (max-width: 768px) {
        width: 100px;
        height: 30px;
        font-size: 14px;
    }
    @media (max-width: 600px) {
        width: 70px;
        height: 30px;
        font-size: 12px;
    }
`
export { Title, Label, Input, SubmitButton }
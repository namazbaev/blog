import styled from 'styled-components';

const Container = styled.div`
    font-family: Heebo;
    padding: 160px 235px 50px 235px;
    @media (max-width: 768px) {
        padding: 80px 18px 50px 18px;
    }
    @media (max-width: 992px) {
        padding: 120px 80px 50px 80px;
    }
`
const HeadWrapper = styled.div`
    display: flex;
    align-items: center;
`
const Title = styled.h1`
    font-weight: bold;
    font-size: 44px;
    line-height: 60px;
     @media (max-width: 768px) {
        margin: 0;
        font-size: 30px;
        line-height: 60px;
    }
    @media (max-width: 992px) {
        margin: 0;
        font-size: 36px;
        line-height: 60px;
    }
`
const AddButton = styled.button`
    color: #fff;
    width: 124px;
    height: 34px;
    background-color: #FF7999;
    border-radius: 8px;
    border: 1px solid #FF7999;
    outline: none;
    text-transform: capitalize;
    font-weight: bold;
    font-size: 16px;
    line-height: 28px;
    margin-left: 25px;
    cursor: pointer;
    padding: 4px 13px 2px 14px;
    transition: all ease 0.3s;
    &:hover {
        border: 1px solid #FF7999;
        color: #FF7999;
        background-color: transparent;
    }

    @media (max-width: 768px) {
        margin-left: 12px;
    }
    @media (max-width: 992px) {
        margin-left: 18px;
    }
`

const BlogItemWrapper = styled.ul`
    margin-top: 55px;
    padding: 0;
    @media (max-width: 768px) {
        margin-top: 30px;
    }
    @media (max-width: 992px) {
        margin-top: 36px;
    }
`
const BlogItem = styled.li`
    list-style-type: none;
`
const BlogItemTitle = styled.h3`
    margin: 0;
    color: #21243D;
    font-weight: 500;
    font-size: 30px;
    line-height: 44px;
    @media (max-width: 768px) {
        font-size: 26px;
        line-height: 38px;
    }
    @media (max-width: 992px) {
        font-size: 28px;
        line-height: 40px;
    }
`
const BlogItemHead = styled.div`
    margin: 16px 0;
    display: flex;
    align-items: center;
    font-size: 20px;
    line-height: 29px;
    @media (max-width: 768px) {
        margin: 10px 0 20px;
        font-size: 16px;
        line-height: 23px;
    }
    @media (max-width: 992px) {
        margin: 14px 0 24px;
        font-size: 18px;
        line-height: 25px;
    }
`
const BlogItemDate = styled.span`
    color: #21243D;
`
const BlogItemTag = styled.span`
    color: #8695A4;
    text-transform: capitalize;
`
const Drop = styled.span`
    width: 1.5px;
    height: 21px;
    display: inline-block;
    background-color: #000000;
    margin: 0 25px;
    @media (max-width: 768px) {
        margin: 0 15px;
    }
    @media (max-width: 992px) {
        margin: 0 20px;
    }
`
const Description = styled.p`
    color: #21243D;
    font-size: 16px;
    line-height: 23px;
    @media (max-width: 768px) {
        font-size: 14px;
        line-height: 20px;
    }
`
const BlogBottom = styled.hr`
    background-color: #E0E0E0;
    border: 0.5px solid #E0E0E0;
    margin-bottom: 32px;
    @media (max-width: 768px) {
        margin-bottom: 18px;
    }
    @media (max-width: 768px) {
        margin-bottom: 24px;
    }
`
export {
    HeadWrapper, Title, AddButton, BlogItemWrapper, BlogItem, BlogItemTitle, BlogItemHead, BlogItemDate, BlogItemTag,
    Drop, Description, BlogBottom, Container,
}
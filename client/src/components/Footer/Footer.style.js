import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 1200px) {
        padding-bottom: 48px;
    }
    @media (max-width: 992px) {
        padding-bottom: 20px;
    }
    @media (max-width: 768px) {
        padding-bottom: 24px;
    }
    @media (max-width: 600px) {
        padding: 0;
    }
`

const Socials = styled.ul`
    width: 232px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 26px;
    padding: 0;
`
const SocialItem = styled.li`
    font-size: 30px;
    cursor: pointer;
    list-style-type: none;
    @media (max-width: 1200px) {
        font-size: 28px;
    }
    @media (max-width: 992px) {
        font-size: 25px;
    }
    @media (max-width: 768px) {
        font-size: 20px;
    }
    @media (max-width: 600px) {
        font-size: 18px;
    }
`
const Copyright = styled.p`
    margin: 0;
    color: #21243D;
    font-size: 14px;
    line-height: 21px;
     @media (max-width: 1200px) {
        font-size: 20px;
        line-height: 20px;
    }
    @media (max-width: 992px) {
        font-size: 18px;
        line-height: 18px;
    }
    @media (max-width: 768px) {
        font-size: 16px;
        line-height: 16px;
    }
    @media (max-width: 600px) {
        font-size: 12px;
        margin: 0;
    }
`
export { Wrapper, Socials, SocialItem, Copyright }
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 54px;
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
`
const Copyright = styled.p`
    margin: 0;
    color: #21243D;
    font-size: 14px;
    line-height: 21px;
`
export { Wrapper, Socials, SocialItem, Copyright }
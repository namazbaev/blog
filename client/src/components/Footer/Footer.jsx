import { Wrapper, Socials, SocialItem, Copyright } from './Footer.style'

const Footer = () => {
    return (
        <Wrapper>
            <Socials>
                <SocialItem><i className="fab fa-facebook-square"></i></SocialItem>
                <SocialItem><i className="fab fa-instagram"></i></SocialItem>
                <SocialItem><i className="fab fa-twitter"></i></SocialItem>
                <SocialItem><i className="fab fa-linkedin"></i></SocialItem>
            </Socials>
            <Copyright>Copyright ©2022 All rights reserved </Copyright>
        </Wrapper>
    );
};
export default Footer;

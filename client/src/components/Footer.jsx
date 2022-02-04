import { Facebook, Instagram, Pinterest, Twitter, Room, Phone, MailOutline } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`;

const Left = styled.div`
    flex:2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Logo = styled.h1`
    font-family: 'Bebas Neue', cursive;
    font-size: 60px;
    margin-bottom: 20px;
`;

const Desc = styled.p`
    width: 50%;
    font-size: 20px;
`;

const SocialContainer = styled.div`
    display: flex;
    margin-top: 30px;
`;

const SocialItem = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 20px;
    background-color: #${(props) => props.color};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const Right = styled.div`
    flex: 1;
    padding: 30px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
    ${mobile({textAlign: "center", fontSize: "24px"})}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`

`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>SHOPYA</Logo>
                <Desc>"Style is something each of us already has, all we need to do is find it."</Desc>
                <SocialContainer>
                    <SocialItem color="3B5999">
                        <Facebook />
                    </SocialItem>
                    <SocialItem color="55ACEE">
                        <Twitter />
                    </SocialItem>
                    <SocialItem color="E4405F">
                        <Instagram />
                    </SocialItem>
                    <SocialItem color="E60023">
                        <Pinterest />
                    </SocialItem>
                </SocialContainer>
            </Left>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}} /> 1 Lajya Estate, Mogra Road, Andheri (east)
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}} /> +91 385 078 7755
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}} /> contact@shopya.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
};

export default Footer;
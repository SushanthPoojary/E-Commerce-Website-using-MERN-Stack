import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
height: 50px;
background-color: #000000;
display: flex;
align-items: center;
justify-content: center;
`;

const Left = styled.div`
    flex: 1;
    color: white;
`;

const Language = styled.div`
    margin-left: 80px;
    font-size: 14px;
    cursor: pointer;
    ${mobile({fontSize: "10px", marginLeft: "40px"})}

`

const Right= styled.div`
    flex: 1;
    color: white;
    ${mobile({flex: 3})}
`;

const Lists = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const ListItems = styled.li`
    cursor: pointer;
    font-size: 14px;
    ${mobile({marginRight: "8px", fontSize: "10px"})}
`;

const UsefulLInks = () => {
    return (
        <Container>
            <Left>
                <Language>EN</Language>
            </Left>
            <Right>
                <Lists>
                    <ListItems>My Account</ListItems>
                    <ListItems>Wishlist</ListItems>
                    <ListItems>Cart</ListItems>
                    <ListItems>Order Tracking</ListItems>
                    <ListItems>Terms</ListItems>
                </Lists>
            </Right>
        </Container>
    );
};

export default UsefulLInks;
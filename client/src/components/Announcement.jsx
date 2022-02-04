import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
    height: 30px;
    background-color: lightgrey;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    word-spacing: 5px;
    font-size: 15px;
    font-weight: 700;
    ${mobile({fontSize: "12px"})}
`

const Announcement = () => {
    return (
        <Container>
            Deal! Free Shipping on orders above 499
        </Container>
    );
};

export default Announcement;
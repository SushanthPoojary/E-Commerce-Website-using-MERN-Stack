import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    height: 60vh;
    background-color: lightgrey;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 60px;
    margin-bottom: 20px;
    ${mobile({fontSize: "40px"})};
`

const Desc = styled.p`
    margin-bottom: 30px;
    font-weight: 400;
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid #000000; */
    ${mobile({width: "80%"})}
`

const Input = styled.input`
    border: none;
    flex: 8;
    padding: 10px;
    font-size: 18px;

    &:focus {
        outline: none;
    }
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #000000;
    color: white;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        background-color: #7E7474;
    }
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Keep Me Posted</Title>
            <Desc>Get timely updates from your favorite products.</Desc>
            <InputContainer>
                <Input placeholder="Email Address" />
                <Button>
                    Notify Me
                </Button>
            </InputContainer>
            
        </Container>
    );
};

export default Newsletter;
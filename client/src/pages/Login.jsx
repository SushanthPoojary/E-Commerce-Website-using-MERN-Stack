import { useState } from "react";
import styled from "styled-components";
import { login } from "../features/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ), url("https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    ${mobile({width: "70%"})};
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 400;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    padding: 10px;
    min-width: 40%;
    margin: 12px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #000000;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;

    &:hover {
        background-color: #7E7474;
    }

    &:disabled {
        cursor: not-allowed; 
    }
`;

const Link = styled.a`
    font-size: 13px;
    cursor: pointer;
    margin-top: 10px;

`;

const Error = styled.span`
    color: red;
`;

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector(state => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    };

    return (
        <Container>
            <Wrapper>
                <Title>LOGIN</Title>
                <Form>
                    <Input placeholder="Username" onChange={e => setUsername(e.target.value)} />
                    <Input placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
                    {error && <Error>Something Went Wrong</Error>}
                    <Link>FORGOT PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;
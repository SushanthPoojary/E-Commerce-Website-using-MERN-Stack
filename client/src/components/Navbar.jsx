import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
    height: 65px;
    background-color: white;
    ${mobile({height: "70px"})}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding: "10px 0px"})}
`

const Left = styled.div`
    flex: 1;
    color: #000000;
    display: flex;
    align-items: center;
`

const Name = styled.h1`
    font-family: 'Bebas Neue', cursive;
    margin-top: 3px;
    ${mobile({margin: "10px", fontSize: "24px"})}
    
`

const SearchContainer = styled.div`
    width: 250px;
    border-bottom: 1px solid #000000;
    display: flex;
    align-items: center;
    margin-left: 80px;
    padding: 3px;
    background-color: white;
    ${mobile({width: "100px", margin: "0px 20px 5px 15px"})}
`

const Input = styled.input`
    border: none;
    margin-left: 5px;
    :focus {
        outline: none;
        
    }
    ${mobile({width: "50px", fontSize: "12px"})}
`

const SearchIcon = styled(Search)`
    margin-left: 65px;
    color: #000000;
    cursor: pointer;
    ${mobile({marginLeft: "10px"})}
`

const Center = styled.div`
    flex: 1;
    ${mobile({display:"none"})}
`;

const Links = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-left: 20px;
`;

const LinkItems = styled.li`
    font-family: 'Oswald', sans-serif;
    font-size: 18px;
    cursor: pointer;

`;

const Right = styled.div`
    flex: 1;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({justifyContent: "center"})}
`

const MenuItem = styled.div`
    font-family: 'Oswald', sans-serif;
    font-size: 18px;
    margin-left: 20px;
    margin-right: 10px;
    cursor: pointer;
    ${mobile({fontSize: "14px", marginLeft: "5px"})}
    
`

const ShoppingCartIcon = styled(ShoppingCartOutlined)`
    color: #000000;
`

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    console.log(quantity)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Name>Shopya</Name>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <SearchIcon />
                    </SearchContainer>
                </Left>
                <Center>
                    <Links>
                        <LinkItems>Home</LinkItems>
                        <LinkItems>Man</LinkItems>
                        <LinkItems>Woman</LinkItems>
                        <LinkItems>Accessories</LinkItems>
                    </Links>
                </Center>
                <Right>
                    <MenuItem>Sign up</MenuItem>
                    <MenuItem>Login</MenuItem>
                    <Link to={`/cart`}>
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartIcon />
                        </Badge>
                    </MenuItem>
                    </Link>
                    
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
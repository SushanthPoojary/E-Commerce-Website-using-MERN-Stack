import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import UsefulLInks from "../components/UsefulLinks";
import { mobile } from "../responsive";

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})};

`;

const ImageContainer = styled.div`
    flex: 1;

`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height: "40vh"})};
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 400;
`;

const Price = styled.div`
    margin: 30px 0px;
    font-size: 23px;
    font-weight: 700;
    ${mobile({textAlign: "center", margin: "15px 0px"})};
`;

const FilterContainer = styled.div`

`;

const Select = styled.select`
    width: 200px;
    padding:10px;
    margin-right: 25px;
    border: 1px solid #000000;
    color: #000000;
    font-size: 15px;
    font-weight: 700;

    &:focus {
        outline: none;
    }

    ${mobile({marginTop: "10px"})};

`;

const Option = styled.option`

`;

const AddContainer = styled.div`
    margin-top: 30px;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({flexDirection: "column", marginLeft: "50px"})};
`;

const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({marginBottom: "15px"})};
`;

const Quantity = styled.span`
    width: 30px;
    height: 30px;
    border: 1px solid #000000;
    border-radius: 5px;
    background-color: #000000;
    color: white;
    margin: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const Button = styled.button`
    padding: 13px;
    background-color: #000000;
    color: white;
    border: none;
    cursor: pointer;
    word-spacing: 3px;

    &:hover {
        background-color: #7E7474;
    }

`;

const Desc = styled.p`
    margin-top: 30px;
`;

const Product = () => {
    return (
        <Container>
            <UsefulLInks />
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://www.dhresource.com/0x0/f2/albu/g8/M00/95/77/rBVaV16iUVOAHSVmAAOVGO3JAqk036.jpg/2020-new-spring-casual-checked-shirt-men.jpg" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Casual Shirt</Title>
                    <Price>₹520</Price>
                    <FilterContainer>
                        <Select>
                            <Option hidden selected>Color</Option>
                            <Option>Black</Option>
                            <Option>White</Option>
                            <Option>Blue</Option>
                            <Option>Red</Option>
                            <Option>Green</Option>
                            <Option>Yellow</Option>
                        </Select>
                        <Select>
                            <Option hidden selected>Size</Option>
                            <Option>XS</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                            <Option>XXL</Option>
                        </Select>
                    </FilterContainer>
                    <AddContainer>
                        <QuantityContainer>
                            <Remove style={{cursor: "pointer"}} />
                            <Quantity>1</Quantity>
                            <Add style={{cursor: "pointer"}} />
                        </QuantityContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                    <Desc>Navy blue and green checked casual shirt, has a spread collar, long sleeves, button placket, curved hem, and 1 patch pocket</Desc>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
};

export default Product;
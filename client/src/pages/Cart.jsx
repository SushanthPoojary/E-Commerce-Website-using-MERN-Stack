import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import UsefulLinks from "../components/UsefulLinks"
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
    margin-bottom: 100px;
    /* ${mobile({width: "10%"})}; */
`;

const Title = styled.h1`
    font-size: 40px;
    font-weight: 400;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    border: none;
    background-color: #000000;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #7E7474;
    }

    ${mobile({fontSize: "12px", margin: "0px 10px"})};

`;

const TopText = styled.span`
    ${mobile({marginLeft: "10px", fontSize: "13px"})};
`;

const Bottom = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})};

`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px;
    border: 0.5px solid lightgrey;
    border-radius: 5px;
    box-shadow: 1px 1px 5px lightgrey;
    margin: 20px 20px 0px 0px;
    background-color: #F7F7F7;
    ${mobile({marginRight: "0px"})};
`;

const ProductDetails = styled.div`
    display: flex;
`;

const ProductImage = styled.img`
    width: 30%;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
`;

const ProductName = styled.span`
    font-size: 20px;
    font-weight: 700;
`;

const ProductId = styled.span`
    margin: 20px 0px;
`;

const ProductContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`;

const ProductSize = styled.span``;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`;

const ProductAmount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: #000000;
    color: white;
    margin: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProductPrice = styled.div`
    font-size: 22px;
    font-weight: 700;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgrey;
    border-radius: 5px;
    box-shadow: 1px 1px 5px lightgrey;
    margin: 20px 0px 0px 20px;
    padding: 20px;
    height: 50vh;
    background-color: #F7F7F7;
    ${mobile({marginLeft: "0px"})};
`;

const SummaryTitle = styled.h1`
    font-weight: 400;
    text-align: center;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ;
    font-weight: ${props => props.type === "total" && 700};
    font-size: ${props => props.type === "total" && "21px"};
`;

const SummaryItemText = styled.div`
    
`;

const SummaryItemPrice = styled.div`
    
`;

const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #000000;
    color: white;
    cursor: pointer;
    &:hover {
        background-color: #7E7474;
    }
`;

const Cart = () => {
    return (
        <Container>
            <UsefulLinks />
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopText>My Shopping Bag(2)</TopText>
                    <TopButton>CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <ProductImage src="https://www.dhresource.com/0x0/f2/albu/g8/M00/95/77/rBVaV16iUVOAHSVmAAOVGO3JAqk036.jpg/2020-new-spring-casual-checked-shirt-men.jpg" />
                                <Details>
                                    <ProductName>Casual Shirt</ProductName>
                                    <ProductId><strong>ID: </strong>86905432163</ProductId>
                                    <ProductContainer>
                                        <ProductColor color="blue" />
                                        <ProductSize><strong>Size: </strong>M</ProductSize>
                                    </ProductContainer>
                                    <ProductAmountContainer>
                                        <Remove />
                                        <ProductAmount>2</ProductAmount>
                                        <Add />
                                    </ProductAmountContainer>
                                </Details>
                            </ProductDetails>
                            <ProductPrice>₹499</ProductPrice>
                        </Product>
                        <Product>
                            <ProductDetails>
                                <ProductImage src="https://www.dhresource.com/0x0/f2/albu/g8/M00/95/77/rBVaV16iUVOAHSVmAAOVGO3JAqk036.jpg/2020-new-spring-casual-checked-shirt-men.jpg" />
                                <Details>
                                    <ProductName>Casual Shirt</ProductName>
                                    <ProductId><strong>ID: </strong>86905432163</ProductId>
                                    <ProductContainer>
                                        <ProductColor color="blue" />
                                        <ProductSize><strong>Size: </strong>M</ProductSize>
                                    </ProductContainer>
                                    <ProductAmountContainer>
                                        <Remove />
                                        <ProductAmount>2</ProductAmount>
                                        <Add />
                                    </ProductAmountContainer>
                                </Details>
                            </ProductDetails>
                            <ProductPrice>₹499</ProductPrice>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Bag Total</SummaryItemText>
                            <SummaryItemPrice>₹499</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Charges</SummaryItemText>
                            <SummaryItemPrice>₹50</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>-₹50</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total Payable</SummaryItemText>
                            <SummaryItemPrice>₹499</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton>CHECKOUT</SummaryButton>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
};

export default Cart;
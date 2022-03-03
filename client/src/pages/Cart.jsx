import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import UsefulLinks from "../components/UsefulLinks"
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { publicRequest } from "../requestMethods";
import { useStripe } from "@stripe/react-stripe-js";
// import StripeCheckout from "react-stripe-checkout";
// import Stripe from "stripe";
// import { useState } from "react";
// import { useEffect } from "react";
// import { userRequest } from "../requestMethods";
// import { useNavigate } from "react-router-dom";
// require("dotenv").config();

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
    const cart = useSelector(state => state.cart)

    const stripe = useStripe();
    // const [stripeToken, setStripeToken] = useState(null);
    // const navigate = useNavigate()

    // const stripe = new Stripe("pk_test_51KH1T8SH0nspW65A2YWrNLJEcw3KQkkjidMiTZwkqGc5FGDeqNNwuqiAQ9dgNq29vBsV99wAKjcNOAH6RqAyPO0000Ds3Q2Fl0");

    // const onToken = (token) => {
    //     setStripeToken(token);
    // };

    // console.log(stripeToken);

    // useEffect(() => {
    //     const makeRequest = async () => {
    //         try {
    //             const res = await userRequest.post("/checkout/payment", {
    //                 tokenId: stripeToken.id,
    //                 amount: cart.total * 100,
    //             });
    //             navigate("/success", {data: res.data});
    //         } catch (err) {
                
    //         }
    //     };
    //     stripeToken && makeRequest();
    // }, [stripeToken, cart.total, navigate]);

    const handleCheckout = async (e) => {
        e.preventDefault();
        console.log(cart);

        const line_items = cart.products.map(item => {
            return {
                quantity: item.quantity,
            price_data: {
                currency : "inr",
                unit_amount : item.price * 100,
            product_data: {
                name: item.title,
                description: item.desc,
                images: [
                    item.img
                ]
            }
            }
            }
        });

        const response = await publicRequest.post("/create-checkout-session", { line_items })
        

//         const response = await axios.post("http://localhost:8080/create-checkout-session", {
//     "line_items": 
//     [
//         {
//             "quantity": 1,
//             "price_data": {
//                 "currency": "inr",
//                 "unit_amount": 2000 * 100,
//             "product_data": {
//                 "name": "Cumulus",
//                 "description": "test",
//                 "images": [
//                     "https://e7.pngegg.com/pngimages/656/85/png-clipart-yellow-circles-background-other-orange-thumbnail.png"
//                 ]
//             }
//             }
//         }
//     ],
//     "customer_email": "abc@gmail.com"
// })

        console.log(response.data);
        const { sessionId } = response.data;
        console.log(sessionId);
        const {error} = await stripe.redirectToCheckout({
            sessionId
        })
        if(error){
            console.log(error);
        }
    };

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
                        {cart.products.map(product => (

                        <Product>
                            <ProductDetails>
                                <ProductImage src={product.img} />
                                <Details>
                                    <ProductName>{product.title}</ProductName>
                                    <ProductId><strong>ID: </strong>{product._id}</ProductId>
                                    <ProductContainer>
                                        <ProductColor color={product.color} />
                                        <ProductSize><strong>Size: </strong>{product.size}</ProductSize>
                                    </ProductContainer>
                                    <ProductAmountContainer>
                                        <Remove />
                                        <ProductAmount>{product.quantity}</ProductAmount>
                                        <Add />
                                    </ProductAmountContainer>
                                </Details>
                            </ProductDetails>
                            <ProductPrice>₹{product.price * product.quantity}</ProductPrice>
                        </Product>
                        ))}
                        
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Bag Total</SummaryItemText>
                            <SummaryItemPrice>₹{cart.total}</SummaryItemPrice>
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
                            <SummaryItemPrice>₹{cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        {/* <StripeCheckout
                            name="Sushanth Poojary"
                            image=""
                            billingAddress
                            shippingAddress
                            description={`Your total is ${cart.total}`}
                            amount={cart.total*100}
                            token={onToken}
                            stripeKey={KEY}
                        > */}
                            <SummaryButton onClick={handleCheckout}>CHECKOUT</SummaryButton>
                        {/* </StripeCheckout> */}
                        
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
};

export default Cart;
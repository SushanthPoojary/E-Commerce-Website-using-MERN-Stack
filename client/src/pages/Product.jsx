import { Add, Remove } from "@material-ui/icons";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import UsefulLInks from "../components/UsefulLinks";
import { publicRequest } from "../requestMethods";
import { mobile } from "../responsive";
import { addProduct } from "../features/cartRedux";
import { useDispatch } from "react-redux";

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
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get(`/products/find/${id}`)
                setProduct(res.data)
            } catch(err) {

            }
        }
        getProduct();
    }, [id]);

    const handleQuantity = (type) => {
        if (type === "inc") {
            setQuantity(quantity + 1);
        } else {
            quantity > 1 && setQuantity(quantity - 1);
        }
    };

    const handleClick = () => {
        dispatch(
            addProduct({ ...product, quantity, color, size })    
        )
    };

    return (
        <Container>
            <UsefulLInks />
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src={product.img} />
                </ImageContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Price>₹{product.price}</Price>
                    <FilterContainer>
                        <Select onChange={(e)=>setColor(e.target.value)}>
                            <Option value="Color" hidden>Color</Option>
                            {product.color?.map((e) => (
                                <Option key={e}>{e}</Option>
                            ))}
                            
                            
                        </Select>
                        <Select onChange={(e)=>setSize(e.target.value)}>
                            <Option value="Size" hidden>Size</Option>
                            {product.size?.map((e) => (
                                <Option key={e}>{e}</Option>
                            ))}
                        </Select>
                    </FilterContainer>
                    <AddContainer>
                        <QuantityContainer>
                            <Remove style={{cursor: "pointer"}} onClick={() => handleQuantity("dec")} />
                            <Quantity>{quantity}</Quantity>
                            <Add style={{cursor: "pointer"}} onClick={() => handleQuantity("inc")} />
                        </QuantityContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>
                    <Desc>{product.desc}</Desc>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
};

export default Product;
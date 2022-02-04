import styled from "styled-components";
import Announcement from "../components/Announcement";
import UsefulLinks from "../components/UsefulLinks";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import {popularProducts} from "../data";

const Container = styled.div`
`;

const ProductContainer = styled.div`
`;

const Title = styled.h1`
   margin: 20px;

`;

const  FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const Select = styled.select`
    width: 200px;
    padding:10px;
    margin-right: 25px;
    border: 1px solid #000000;
    color: #000000;
    font-size: 14px;
    font-weight: 700;

    &:focus {
        outline: none;
    }

    
    ${mobile({width: "130px", marginTop: "10px"})}

`;

const Option = styled.option`
`;



const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");
    console.log(cat);

    const handleFilter = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value.toLowerCase()
        });
    };

    console.log(filters)

    return (
        <Container>
            <UsefulLinks />
            <ProductContainer>
                <Navbar />
                <Announcement />
                <Title>Clothing</Title>
                <FilterContainer>
                    <Filter>
                        <Select name="color" onChange={handleFilter}>
                            <Option hidden>Color</Option>
                            <Option>Black</Option>
                            <Option>White</Option>
                            <Option>Blue</Option>
                            <Option>Red</Option>
                            <Option>Green</Option>
                            <Option>Yellow</Option>
                        </Select>
                        <Select name="size" onChange={handleFilter}>
                            <Option hidden>Size</Option>
                            <Option>XS</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                            <Option>XXL</Option>
                        </Select>
                    </Filter>
                    <Filter>
                        <Select onChange={e => setSort(e.target.value)}>
                            <Option hidden>Sort</Option>
                            <Option value="newest">Newest</Option>
                            <Option value="asc">Price - high to low</Option>
                            <Option value="desc">Price - low to high</Option>
                        </Select>
                    </Filter>
                </FilterContainer>
            </ProductContainer> 
            <Products category={cat} filters={filters} sort={sort} id={popularProducts.id} />
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default ProductList;
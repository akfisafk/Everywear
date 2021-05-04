import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Product = styled.div`
    width: 260px;
    margin: 60px 30px;
    padding: 10px;
    border: 1px solid transparent;
    display: flex;
    justify-content: center;
    transition: all .2s ease;

    &:hover {
        transition: all .2s ease;
        transform: scale(1.005);
        opacity: .95;
        cursor: pointer;
    }
`

const styles = {
    img: {
        width: '260px',
        height: '300px',
        objectFit: 'cover',
        objectPosition: 'center 10%'
    },
    card_name: {
        fontFamily: 'futura-pt, sans-serif',
        fontSize: '15px',
        color: 'black',
        margin: '5px 0'
    },
    card_price: {
        fontFamily: 'roboto, sans-serif',
        fontSize: '20px',
        color: 'black',
        margin: '5px 0'
    }
}

export const PageItem = ({ products, onAddToCart }) => {
    const history = useHistory();

    const goToProductPage = (path) => {
        history.push(path);
    }

    return (
        <>
            {products.map((product) => (
                <Product onClick={() => goToProductPage('/products/' + product.id)} key={Math.random()}>
                    <div>
                        <img className="product-img" src={product.media.source} alt="" />
                        <div>
                            <p style={styles.card_name}>{product.name}</p>
                            <p style={styles.card_price}>{product.price.formatted_with_symbol}</p>
                        </div>
                    </div>
                </Product>     
            ))}
        </>
    )
}
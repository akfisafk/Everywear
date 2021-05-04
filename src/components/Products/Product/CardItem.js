import React from 'react'
import { Link } from 'react-router-dom';

const styles = {
    card_img: {
        width: '100%',
        height: '320px',
        display: 'block',
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

export const CardItem = ({ products, onAddToCart }) => {

    return (
    <>
            {products.map((product) => (
                <Link key={Math.random()} to={'/products/' + product.id} className="card">
                    <div>
                        <img style={styles.card_img} src={product.media.source} alt="" />
                        <div>
                            <p style={styles.card_name}>{product.name}</p>
                            <p style={styles.card_price}>{product.price.formatted_with_symbol}</p>
                        </div>
                    </div>
                </Link>
            ))}
    </>
    )
}

import React from 'react'
import { Jumbotron } from '../Jumbotron';
import { Products } from '../Products/Products';

const styles = {
    landing: {
        position: 'relative'
    },
    section: {
        textAlign: 'center',
        fontFamily: 'roboto, sans-serif',
        fontSize: '24px'
    }
}

export const Landing = ({ onAddToCart, womensProducts, mensProducts, shoesProducts }) => {

    return (
        <div className="landing">
            <Jumbotron />
            <h2 style={styles.section}>POPULAR ITEMS</h2>
            <Products category="Women's" products={womensProducts} onAddToCart={onAddToCart} />
            <Products category="Men's" products={mensProducts} onAddToCart={onAddToCart} />
            <Products category="Shoes" products={shoesProducts} onAddToCart={onAddToCart} />
        </div>
    )
}

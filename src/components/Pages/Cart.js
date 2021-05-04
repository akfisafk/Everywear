import React from 'react'
import { EmptyCart } from '../EmptyCart';
import { FilledCart } from '../FilledCart';

const styles = {
    container: {
        maxWidth: '1500px',
        minHeight: '1000px',
        margin: '40px auto 0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    btn: {
        alignSelf: 'flex-end'
    }
}

export const Cart = ({ cart, handleUpdateCartQty, handleEmptyCart }) => {
    const isEmpty = !cart.line_items.length;
    console.log(cart);
    console.log(cart.id);

    return (
        <div style={styles.container}>
            {isEmpty ? <EmptyCart /> : <FilledCart cart={cart} handleUpdateCartQty={handleUpdateCartQty} handleEmptyCart={handleEmptyCart}/>}
        </div>
    )
}

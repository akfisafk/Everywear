import React from 'react'
import { Link } from 'react-router-dom';

const styles = {
    cart: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        margin: '40px 0'
    },
    subtotal: {
        alignSelf: 'flex-end',
        margin: '20px 20px 0 0'
    },
    quantity: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '70px',
    },
    quantity_btn: {
        height: '5%',
        margin: '16px 0',
        backgroundColor: 'transparent',
        border: 'none'
    },
    empty_btn: {
        margin: '20px 20px 20px 0',
        width: '90px',
        alignSelf: 'flex-end',
        backgroundColor: '#F0F0F0',
        border: '1px solid black',
        borderRadius: '4px',
        textAlign: 'center',
        color: 'black'
    }
}

export const FilledCart = ({ cart, handleUpdateCartQty, modal }) => {

    console.log(cart);

    return (
        <div style={styles.cart}>
            {cart.line_items.map((item) => (
                <div key={Math.random()} className={modal === "true" ? "modal_item" : "item"}>
                    <div className="img_container">
                        <img className={modal === "true" ? "modal_img" : "img"} src={item.media.source} alt=""/>
                    </div>
                    {modal && (
                        <div className={modal === "true" ? "modal_item_text" : "item_text"}>
                            <div><p>{item.name}</p></div>
                            {item.selected_options.length > 0 && (
                                <div><p>{item.selected_options[0].option_name}</p></div>
                            )}
                            <div><p>{item.price.formatted_with_symbol}</p></div>
                            <div style={styles.quantity}>
                                <button className="quantity_btn" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</button>
                                <p>{item.quantity}</p>
                                <button className="quantity_btn" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</button>
                            </div>
                        </div>
                    )}
                    {!modal && (
                    <>
                        <div className={modal === "true" ? "modal_item_text" : "item_text"}>
                            <div><p>{item.name}</p></div>
                            {/* {item.selected_options.length > 0 && (
                                <div><p>{item.selected_options[0].option_name}</p></div>
                            )}
                            <div><p>{item.price.formatted_with_symbol}</p></div>
                            <div style={styles.quantity}>
                                <button className="quantity_btn" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</button>
                                <p>{item.quantity}</p>
                                <button className="quantity_btn" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</button>
                            </div> */}
                        </div>
                        <div className="item_text">
                            {item.selected_options.length > 0 && (
                                <div><p>{item.selected_options[0].option_name}</p></div>
                            )}
                        </div>
                        <div className="item_text">
                            <p>{item.price.formatted_with_symbol}</p>
                        </div>
                        <div className="item_text">
                            <button className="quantity_btn" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</button>
                            <p>{item.quantity}</p>
                            <button className="quantity_btn" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</button>
                        </div>
                    </>
                    )}
                </div>
            ))}
            <h2 style={styles.subtotal}>Subtotal: {cart.subtotal.formatted_with_symbol}</h2>
            <Link style={styles.empty_btn} to="/checkout">Checkout</Link>
        </div>
    )
}

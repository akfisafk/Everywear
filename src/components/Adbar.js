import React from 'react'

const styles = {
    nav_background: {
        height: '40px',
        width: '100%',
        backgroundColor: '#121212'
    },
    container: {
        color: 'white',
        maxWidth: '1500px',
        height: '100%',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export const Adbar = () => {
    return (
        <div style={styles.nav_background}>
            <div style={styles.container}>
                FREE Shipping On All US Orders | Offer Valid Through 5/15
            </div>
        </div>
    )
}